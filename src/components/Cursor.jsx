import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-teal-500 rounded-full pointer-events-none z-9999 transition-transform duration-75"
      style={{
        transform: `translate(${position.x-4.5}px, ${position.y-4.5}px)`,
      }}
    />
  );
}