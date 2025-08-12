"use client";

import { theme } from "@/lib/theme";

interface LotusBackgroundProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
}

export function LotusBackground({
  children,
  className = "",
  opacity = theme.lotus.opacity,
}: LotusBackgroundProps) {
  return (
    <div
      className={`main-bg ${className}`}
      style={
        {
          "--lotus-opacity": opacity,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
