import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface GeminiTrailProps {
  path: string;
  visibleLength?: number;   // optional, default 300
  totalLength?: number;     // optional, default 1000
  duration?: number;        // optional, default 6 seconds
}

export default function GeminiTrail({
  path,
  visibleLength = 300,
  totalLength = 1000,
  duration = 6,
}: GeminiTrailProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: 0,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, duration]);

  return (
    <svg viewBox="0 0 500 200" width="100%" height="100%" className="">
      <defs>
        <linearGradient
          id="movingGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2={visibleLength}
          y2="0"
        >
          <motion.stop
            offset="0%"
            stopColor="var(--color-gradient-one)"
            stopOpacity={0}
            animate={{ stopOpacity: [0, 1, 1, 0] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          />
          <stop offset="50%" stopColor="var(--color-gradient-two)" stopOpacity={1} />
          <motion.stop
            offset="100%"
            stopColor="var(--color-gradient-three)"
            stopOpacity={0}
            animate={{ stopOpacity: [0, 1, 1, 0] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          />
        </linearGradient>
      </defs>

      <motion.path
        d={path}
        stroke="url(#movingGradient)"
        strokeWidth="4"
        fill="none"
        strokeDasharray={`${visibleLength} ${totalLength}`}
        strokeDashoffset={totalLength + visibleLength}
        animate={controls}
      />
    </svg>
  );
}
