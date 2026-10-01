import { motion, useReducedMotion } from "motion/react";

export interface TextScannerProps {
  text?: string;
  className?: string;
  inkColor?: string;
  accentColor?: string;
  duration?: number;
}

export function TextScanner({
  text = "ANLI",
  className = "",
  inkColor = "#FFFFFF",
  accentColor = "#D4D4D4",
  duration = 3.2,
}: TextScannerProps) {
  const reducedMotion = useReducedMotion();
  const baseClass = `text-scanner ${className}`.trim();

  if (reducedMotion) {
    return <span className={baseClass} style={{ color: inkColor }}>{text}</span>;
  }

  return (
    <motion.span
      className={baseClass}
      style={{
        backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${inkColor} 38%, transparent) 0 39%, ${inkColor} 49%, color-mix(in srgb, ${inkColor} 38%, transparent) 61% 100%)`,
        backgroundSize: "240% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      animate={{ backgroundPosition: ["100% 0", "0% 0"] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    >
      {text}
      <motion.span
        aria-hidden="true"
        className="text-scanner__beam"
        style={{ background: accentColor, boxShadow: `0 0 12px ${accentColor}, 0 0 26px color-mix(in srgb, ${accentColor} 58%, transparent)` }}
        animate={{ left: ["0%", "100%"], transform: ["translateX(0)", "translateX(-100%)"] }}
        transition={{ duration, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.span>
  );
}

export default TextScanner;
