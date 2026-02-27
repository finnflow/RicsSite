import { motion } from "motion/react";
import { useState } from "react";

interface SunLogoProps {
  size?: number;
  className?: string;
  isWatermark?: boolean;
  externalHover?: boolean;
}

export function SunLogo({ size = 20, className = "", isWatermark = false, externalHover = false }: SunLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use external hover if provided, otherwise use internal state
  const shouldAnimate = externalHover || isHovered;
  
  // Gleichmäßig verteilte Strahlen rundherum (wie im Referenzbild)
  // Abwechselnd: lang durchgängig, kurz gestrichelt
  const rays = [
    { angle: 0, length: 1.0, dashed: false },      // oben
    { angle: 30, length: 0.65, dashed: true },
    { angle: 60, length: 1.0, dashed: false },
    { angle: 90, length: 0.65, dashed: true },     // rechts
    { angle: 120, length: 1.0, dashed: false },
    { angle: 150, length: 0.65, dashed: true },
    { angle: 180, length: 1.0, dashed: false },    // unten
    { angle: 210, length: 0.65, dashed: true },
    { angle: 240, length: 1.0, dashed: false },
    { angle: 270, length: 0.65, dashed: true },    // links
    { angle: 300, length: 1.0, dashed: false },
    { angle: 330, length: 0.65, dashed: true },
  ];

  const center = size / 2;
  const circleRadius = size * 0.15;
  const rayStartDistance = circleRadius + size * 0.05;
  const maxRayLength = size * 0.32;

  const strokeColor = isWatermark ? "#D4A88C" : "currentColor";
  const strokeWidth = isWatermark ? 1.3 : 1.6;
  const opacity = isWatermark ? 0.04 : 1;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Strahlen - minimalistisch, feine Linien */}
      {rays.map((ray, index) => {
        const angleRad = (ray.angle * Math.PI) / 180;
        const startX = center + Math.cos(angleRad) * rayStartDistance;
        const startY = center + Math.sin(angleRad) * rayStartDistance;
        
        // Hover: Strahlen gehen weiter nach außen
        const hoverExtension = shouldAnimate && !isWatermark ? 1.4 : 1.0;
        const endX = center + Math.cos(angleRad) * (rayStartDistance + maxRayLength * ray.length * hoverExtension);
        const endY = center + Math.sin(angleRad) * (rayStartDistance + maxRayLength * ray.length * hoverExtension);

        return (
          <motion.line
            key={index}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={ray.dashed ? "2.5 2" : "none"}
            strokeLinecap="round"
            animate={{
              x2: endX,
              y2: endY,
              opacity: shouldAnimate && !isWatermark ? [1, 0.7, 1] : 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              opacity: {
                duration: 0.6,
                repeat: shouldAnimate ? Infinity : 0,
                repeatType: "reverse",
              }
            }}
          />
        );
      })}

      {/* Mittlerer Kreis */}
      <circle
        cx={center}
        cy={center}
        r={circleRadius}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Zentraler Punkt - winziger warmer Akzent */}
      {!isWatermark && (
        <circle
          cx={center}
          cy={center}
          r={circleRadius * 0.35}
          fill="#D4A88C"
          opacity={0.6}
        />
      )}
    </svg>
  );
}