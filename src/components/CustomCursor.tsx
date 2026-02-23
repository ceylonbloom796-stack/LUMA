import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      x: mousePosition.x - 10, // Adjust for half width of the dot
      y: mousePosition.y - 10, // Adjust for half height of the dot
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
  };

  const ringVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.4,
      scale: 1,
      x: mousePosition.x - 25, // Adjust for half width of the ring
      y: mousePosition.y - 25, // Adjust for half height of the ring
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-rolex-gold rounded-full pointer-events-none z-[9999]"
        variants={cursorVariants}
        animate="visible"
        initial="hidden"
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-rolex-gold rounded-full pointer-events-none z-[9998]"
        variants={ringVariants}
        animate="visible"
        initial="hidden"
      />
    </>
  );
}
