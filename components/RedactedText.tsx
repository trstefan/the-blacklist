"use client";
import React, { useState } from "react";

interface RedactedTextProps {
  text: string;
}

const RedactedText = ({ text }: RedactedTextProps) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      className={`
        relative inline-block px-1 cursor-help transition-all duration-300
        ${
          revealed
            ? "bg-transparent text-[#C41E3A]"
            : "bg-[#0a0a0a] text-transparent select-none"
        }
      `}
      title="Access Restricted"
    >
      {text}
      {!revealed && <span className="absolute inset-0 bg-[#0a0a0a] z-0"></span>}
    </span>
  );
};

export default RedactedText;
