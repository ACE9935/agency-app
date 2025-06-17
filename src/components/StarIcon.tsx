import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Register the plugin
gsap.registerPlugin(MorphSVGPlugin);

interface StarIconProps {
  animate?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ animate = false }) => {
  const blobRef = useRef<SVGPathElement | null>(null);
  const shape1Ref = useRef<SVGPathElement | null>(null);
  const shape2Ref = useRef<SVGPathElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!blobRef.current || !shape1Ref.current || !shape2Ref.current) return;

    // Kill previous timeline if it exists
    timelineRef.current?.kill();

    if (animate) {
      // Create a new timeline
      timelineRef.current = gsap.timeline({ repeat: -1, yoyo: true });
      timelineRef.current
        .to(blobRef.current, {
          duration: 1,
          morphSVG: shape1Ref.current,
          ease: "power1.inOut",
        })
        .to(blobRef.current, {
          duration: 1,
          morphSVG: shape2Ref.current,
          ease: "power1.inOut",
        });
    }
  }, [animate]);

  return (
    <svg width="195" height="197" viewBox="0 0 195 197" role="img" aria-label="Gradient Shape">
      <defs>
        <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="197" gradientUnits="userSpaceOnUse">
          <stop offset="20%" stopColor="var(--color-gradient-one)" />
          <stop offset="33%" stopColor="var(--color-gradient-two)" />
          <stop offset="66%" stopColor="var(--color-gradient-three)" />
          <stop offset="80%" stopColor="var(--color-gradient-four)" />
        </linearGradient>
      </defs>

      <path
        ref={blobRef}
        d="M97.0001 196.5C98.0001 175.5 111 104 194 98C147.5 96 101.5 65 97 1C92.5 69 39.5 96.5 1 98.5C32 98 91.5001 123 97.0001 196.5Z"
        fill="url(#gradientFill)"
      />

      {/* Hidden morph targets */}
      <path
        ref={shape1Ref}
        d="M0.5 94.5V131.5L116.5 82.5L116.5 49.5L0.5 1V36L77.5 66.5L0.5 94.5Z"
        fill="none"
        stroke="none"
        style={{ visibility: "hidden" }}
      />
      <path
        ref={shape2Ref}
        d="M1 166H28.5L48.5 92.5L59 55L73 0.5H45.5L26 71.5L1 166Z"
        fill="none"
        stroke="none"
        style={{ visibility: "hidden" }}
      />
    </svg>
  );
};

export default StarIcon;
