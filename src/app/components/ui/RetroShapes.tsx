import { motion } from "motion/react";

export function FloatingCircle({ color, size, top, left, delay = 0 }: any) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-30"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top: top,
        left: left,
      }}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function RetroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function WavyLine({ color = "#EC7A5E", className = "" }: { color?: string; className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.path
        d="M0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{
          d: [
            "M0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10",
            "M0 10 Q 25 15, 50 10 T 100 10 T 150 10 T 200 10",
            "M0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

export function RetroBlob({ color, className = "" }: { color: string; className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        <motion.path
          fill={color}
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.7,56.4,53.6,69,39.8,76.8C26,84.6,9.5,87.6,-6.1,86.4C-21.7,85.3,-43.4,80,-59.6,69.8C-75.8,59.6,-86.5,44.5,-91.3,27.7C-96.1,10.9,-95,-7.6,-88.7,-23.7C-82.4,-39.8,-70.9,-53.5,-56.8,-60.7C-42.7,-67.9,-26,-68.6,-10.5,-71.8C5,-75,22.6,-83.6,44.7,-76.4Z"
          animate={{
            d: [
              "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.7,56.4,53.6,69,39.8,76.8C26,84.6,9.5,87.6,-6.1,86.4C-21.7,85.3,-43.4,80,-59.6,69.8C-75.8,59.6,-86.5,44.5,-91.3,27.7C-96.1,10.9,-95,-7.6,-88.7,-23.7C-82.4,-39.8,-70.9,-53.5,-56.8,-60.7C-42.7,-67.9,-26,-68.6,-10.5,-71.8C5,-75,22.6,-83.6,44.7,-76.4Z",
              "M51.3,-85.8C65.4,-77.5,75.4,-61.8,81.2,-45.2C87,-28.6,88.6,-11.1,85.8,5.3C83,21.7,75.8,37,65.8,49.8C55.8,62.6,43,72.9,28.2,78.8C13.4,84.7,-3.4,86.2,-19.3,82.5C-35.2,78.8,-50.2,70,-62.8,57.4C-75.4,44.8,-85.6,28.4,-88.7,10.8C-91.8,-6.8,-87.8,-25.6,-78.9,-41.2C-70,-56.8,-56.2,-69.2,-40.8,-76.8C-25.4,-84.4,-8.5,-87.2,6.8,-87.3C22.1,-87.4,37.2,-94.1,51.3,-85.8Z",
              "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.7,56.4,53.6,69,39.8,76.8C26,84.6,9.5,87.6,-6.1,86.4C-21.7,85.3,-43.4,80,-59.6,69.8C-75.8,59.6,-86.5,44.5,-91.3,27.7C-96.1,10.9,-95,-7.6,-88.7,-23.7C-82.4,-39.8,-70.9,-53.5,-56.8,-60.7C-42.7,-67.9,-26,-68.6,-10.5,-71.8C5,-75,22.6,-83.6,44.7,-76.4Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}

export function RetroStar({ color, size = 60, className = "" }: { color: string; size?: number; className?: string }) {
  return (
    <motion.div
      className={`${className}`}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <path
          fill={color}
          d="M50 15 L58 42 L87 42 L64 58 L72 85 L50 69 L28 85 L36 58 L13 42 L42 42 Z"
        />
      </svg>
    </motion.div>
  );
}

export function RetroCircles({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-4 border-[#EC7A5E] rounded-full opacity-50"></div>
        <div className="absolute inset-2 border-4 border-[#F3A6A6] rounded-full opacity-50"></div>
        <div className="absolute inset-4 border-4 border-[#6BB1AD] rounded-full opacity-50"></div>
        <div className="absolute inset-6 border-4 border-[#E8ECB9] rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
}
