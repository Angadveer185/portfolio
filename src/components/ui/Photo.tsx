import React, { useState, useRef, useEffect } from "react";

interface PhotoProps {
  src: string;
  size: number; // width in pixels
  orientation: "landscape" | "portrait";
  rotation?: number; // Optional rotation in degrees
  caption?: string; // Optional caption for the photo
  defaultX?: number; // Add these coordinates
  defaultY?: number;
  onClick?: () => void; // Event trigger for your other component
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
  // 1. Calculate aspect ratios based on orientation
  const isLandscape = orientation === "landscape";
  const width = size;
  const height = isLandscape ? size * (3 / 4) : size * (4 / 3);

  // 2. Dragging & positioning states
  const [position, setPosition] = useState({
    x: defaultX ?? 40,
    y: defaultY ?? 40,
  }); // Initial offsets
  const [isDragging, setIsDragging] = useState(false);

  const photoRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false); // Distinguishes between a pure click vs. a drag finish

  // 3. Handle Drag Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !photoRef.current) return;

      const parent = photoRef.current.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();

      // Calculate delta movement
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      let newX = positionStart.current.x + deltaX;
      let newY = positionStart.current.y + deltaY;

      // Track if actual dragging movement happened
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        hasMoved.current = true;
      }

      // Constrain inside parent boundaries
      const maxX = parentRect.width - width;
      const maxY = parentRect.height - height;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // If the mouse didn't move significantly, count it as a clean click action
        if (!hasMoved.current && onClick) {
          onClick();
        }
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, width, height, onClick]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent default browser image ghost dragging
    e.preventDefault();

    setIsDragging(true);
    hasMoved.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
    positionStart.current = { ...position };
  };

  return (
    <div
      ref={photoRef}
      onMouseDown={handleMouseDown}
      className={`group absolute rounded-md bg-white p-2 pb-12 shadow-md transition-shadow duration-200 select-none ${
        isDragging
          ? "z-50 cursor-grabbing shadow-2xl"
          : "z-10 cursor-grab hover:shadow-lg"
      }`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotation ?? 0}deg)`,
        // Aspect ratio enforcement helper
        aspectRatio: isLandscape ? "4 / 3" : "3 / 4",
      }}
    >
      <div className="pointer-events-none relative h-full w-full overflow-hidden rounded-md bg-neutral-100">
        <img
          src={src}
          alt="Draggable component asset"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {caption && (
        <div className="font-gochi absolute right-0 bottom-0 left-0 py-2 text-center text-black">
          {caption}
        </div>
      )}
    </div>
  );
}
