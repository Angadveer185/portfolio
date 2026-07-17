import React, { useState, useRef, useEffect } from 'react';

interface DraggableBubbleProps {
  label: string;
  defaultX: number;
  defaultY: number;
}

export default function DraggableBubble({ label, defaultX, defaultY }: DraggableBubbleProps) {
  const [position, setPosition] = useState({ x: defaultX, y: defaultY });
  const [isDragging, setIsDragging] = useState(false);
  
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    positionStart.current = { ...position };
  };

return (
  <span
    ref={bubbleRef}
    onMouseDown={handleMouseDown}
    className={`absolute px-3 py-1.5 bg-bg-tertiary text-white font-bold text-xs md:text-sm rounded-lg border whitespace-nowrap select-none
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