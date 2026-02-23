import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/vHG5YshY/grok-image-40a4a93c-c58f-448b-8564-c02891c4bbd2.jpg"
          alt="Hero Background Image"
          className="absolute inset-0 w-full h-full object-cover z-[-10]"
          referrerPolicy="no-referrer"
        />
        {/* Luxury Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-rolex-black/10 via-rolex-black/5 to-rolex-black/20" />
      </motion.div>
      
      {/* Text Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >

        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rolex-ivory opacity-60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
