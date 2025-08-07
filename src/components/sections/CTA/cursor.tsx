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
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "30px",
          height: "38px",
          background: "radial-gradient(circle at 50% 75%, white, #e0e0e0)",
          borderRadius: "10% 100% 100% 100% / 50% 100% 80% 100%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-10%, -30%) rotate(-30deg)",
          boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
          transition: "transform 0.05s ease-out",
        }}
      />
    </>
  );
};

export default MilkDropCursor;
