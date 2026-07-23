import React, { useState, useRef, useEffect } from 'react';

interface DraggableBubbleProps {
  label: string;
  index: number;
  totalCount: number;
}

export default function DraggableBubble({ label, index, totalCount }: DraggableBubbleProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });

  // Calculate layout on mount and window resize
  useEffect(() => {
    const updatePosition = () => {
      if (!bubbleRef.current || isDragging) return;
      const parent = bubbleRef.current.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const bubbleRect = bubbleRef.current.getBoundingClientRect();

      // Dynamic grid based on totalCount
      const cols = Math.ceil(Math.sqrt(totalCount));
      const rows = Math.ceil(totalCount / cols);

      const row = Math.floor(index / cols);
      const col = index % cols;

      const slotWidth = parentRect.width / cols;
      const slotHeight = parentRect.height / rows;

      // Center within the slot
      const centerX = col * slotWidth + slotWidth / 2 - bubbleRect.width / 2;
      const centerY = row * slotHeight + slotHeight / 2 - bubbleRect.height / 2;

      // Deterministic pseudo-randomness based on label
      const pseudoRandom = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return (Math.abs(hash) % 100) / 100;
      };

      // Add slight jitter for organic scatter, up to 30% of slot width/height
      const jitterX = (pseudoRandom(label) - 0.5) * slotWidth * 0.3;
      const jitterY = (pseudoRandom(label + "y") - 0.5) * slotHeight * 0.3;

      const maxX = Math.max(0, parentRect.width - bubbleRect.width);
      const maxY = Math.max(0, parentRect.height - bubbleRect.height);

      const finalX = Math.max(0, Math.min(centerX + jitterX, maxX));
      const finalY = Math.max(0, Math.min(centerY + jitterY, maxY));

      setPosition({ x: finalX, y: finalY });
    };

    updatePosition();

    let ticking = false;
    const handleResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [label, index, totalCount, isDragging]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging || !bubbleRef.current) return;
      
      const parent = bubbleRef.current.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const bubbleRect = bubbleRef.current.getBoundingClientRect();
      
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;
      
      let newX = positionStart.current.x + deltaX;
      let newY = positionStart.current.y + deltaY;

      // Restrict the bubbles so they don't leak out of the inventory box
      const maxX = parentRect.width - bubbleRect.width;
      const maxY = parentRect.height - bubbleRect.height;
      
      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    positionStart.current = { ...position };
  };

  return (
    <span
      ref={bubbleRef}
      onPointerDown={handlePointerDown}
      className={`absolute px-3 py-1.5 bg-bg-tertiary text-white font-bold text-xs md:text-sm rounded-lg border whitespace-nowrap select-none touch-none
        ${isDragging 
          ? 'cursor-grabbing z-30 shadow-[0_4px_12px_rgba(226,85,67,0.4)]' 
          : 'cursor-grab z-20 hover:scale-102 shadow-[0_2px_8px_rgba(226,85,67,0.2)] transition-all delay-200 duration-200'
        }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {label}
    </span>
  );
}