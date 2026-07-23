import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface PhotoProps {
  src: string;
  size: number; // base width in pixels
  orientation: "landscape" | "portrait";
  rotation?: number; // Optional rotation in degrees
  caption?: string; // Optional caption for the photo
  defaultX?: number; // Base x offset
  defaultY?: number; // Base y offset
  onClick?: () => void; // Event trigger for parent component
}

export default function Photo({
  src,
  size,
  orientation,
  rotation,
  caption,
  onClick,
  defaultX,
  defaultY,
}: PhotoProps) {
  // 1. Calculate responsive scale factor relative to container/viewport size
  const [scaleFactor, setScaleFactor] = useState(1);
  const photoRef = useRef<HTMLDivElement>(null);

  // Re-calculate responsive scale factor when screen resizes
  useEffect(() => {
    const updateScale = () => {
      if (!photoRef.current) return;
      const parent = photoRef.current.parentElement;
      const parentWidth = parent ? parent.getBoundingClientRect().width : window.innerWidth;

      // Scaling down smoothly on screens narrower than standard desktop (1024px)
      // Caps minimum scale at 0.55 so photos stay legible on small mobile screens
      if (parentWidth < 1024) {
        const factor = Math.max(0.55, parentWidth / 600);
        setScaleFactor(factor);
      } else {
        setScaleFactor(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // 2. Responsive dimensions based on scale factor
  const isLandscape = orientation === "landscape";
  const scaledWidth = size * scaleFactor;
  const scaledHeight = (isLandscape ? size * (3 / 4) : size * (4 / 3)) * scaleFactor;

  // 3. Dragging & positioning states (scaled coordinates)
  const baseInitialX = (defaultX ?? 40) * scaleFactor;
  const baseInitialY = (defaultY ?? 40) * scaleFactor;

  const [position, setPosition] = useState({
    x: baseInitialX,
    y: baseInitialY,
  });

  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Helper function to extract cursor/finger pointer positions across Mouse and Touch events
  const getClientCoords = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };
  };

  // 4. Combined Drag Handler (Mouse & Touch)
  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !photoRef.current) return;

      const parent = photoRef.current.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const coords = getClientCoords(e);

      // Calculate delta movement
      const deltaX = coords.x - dragStart.current.x;
      const deltaY = coords.y - dragStart.current.y;

      let newX = positionStart.current.x + deltaX;
      let newY = positionStart.current.y + deltaY;

      // Track if actual dragging movement happened
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasMoved.current = true;
      }

      // Constrain inside parent boundaries taking scaled dimension into account
      const maxX = Math.max(0, parentRect.width - scaledWidth);
      const maxY = Math.max(0, parentRect.height - scaledHeight);

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    },
    [isDragging, scaledWidth, scaledHeight]
  );

  const handleEnd = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      // Clean tap/click trigger if pointer didn't drag significantly
      if (!hasMoved.current && onClick) {
        onClick();
      }
    }
  }, [isDragging, onClick]);

  // Event listener binding for Mouse & Touch
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  // 5. Start Handlers for Mouse & Touch
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent standard browser dragging artifacts & page scroll while dragging photo
    if (e.cancelable) e.preventDefault();

    const nativeEvent = e.nativeEvent;
    const coords = getClientCoords(nativeEvent);

    setIsDragging(true);
    hasMoved.current = false;
    dragStart.current = { x: coords.x, y: coords.y };
    positionStart.current = { ...position };
  };

  return (
    <div
      ref={photoRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      className={`group absolute rounded-md bg-white p-1.5 sm:p-2 pb-8 sm:pb-12 shadow-md transition-shadow duration-200 select-none touch-none ${
        isDragging
          ? "z-50 cursor-grabbing shadow-2xl scale-105"
          : "z-10 cursor-grab hover:shadow-lg"
      }`}
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotation ?? 0}deg)`,
        aspectRatio: isLandscape ? "4 / 3" : "3 / 4",
      }}
    >
      <div className="pointer-events-none relative h-full w-full overflow-hidden rounded-md bg-neutral-100">
        <Image
          src={src}
          alt={caption || "Draggable component asset"}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />
      </div>
      {caption && (
        <div className="font-gochi absolute right-0 bottom-1 left-0 text-center text-xs sm:text-sm text-black truncate px-1">
          {caption}
        </div>
      )}
    </div>
  );
}