import React from "react";

const GlitterBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      <div className="absolute inset-0 animate-glitter bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:4px_4px] opacity-20" />
    </div>
  );
};

export default GlitterBackground;
