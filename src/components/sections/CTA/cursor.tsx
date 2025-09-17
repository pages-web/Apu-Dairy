"use client";

import React, { useEffect, useState } from "react";

const MilkDropCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <img
        src="/images/cursor.png"
        alt="cursor"
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "38px", // үндсэн cursor-ийн хэмжээнд ойролцоо
          height: "38px",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%) rotate(-30deg)",
          background: "transparent",
          cursor: "none",
        }}
      />
    </>
  );
};

export default MilkDropCursor;
