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
      {/* Video Background */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          poster="https://th.bing.com/th/id/R.dade39779e7549015f83af8f8782e6e8?rik=IHFleItx%2by2chw&riu=http%3a%2f%2fwww.pearlceylon.com%2fimages%2fdestination%2fsigiriya%2fsigiriya-by-air.jpg&ehk=qBvBwGXJvH%2fks4lehtxalJjDvmSDg8BAUkxTRWpI%2bWo%3d&risl=&pid=ImgRaw&r=0"
        >
          <source 
            src="https://player.vimeo.com/external/517089410.hd.mp4?s=d946575103635398666579895939d33878153226&profile_id=175" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-rolex-black/60 via-rolex-black/40 to-rolex-black/80" />
      </motion.div>
      
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl text-rolex-ivory mb-6 leading-tight"
        >
          {t.hero.title}
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-sans font-light tracking-[0.2em] uppercase text-rolex-gold">
            {t.hero.subtitle}
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <button className="px-8 py-4 bg-rolex-green text-rolex-ivory rounded-full font-medium tracking-wider uppercase transition-all hover:scale-105 gold-glow">
            {t.nav.explore}
          </button>
          <button className="px-8 py-4 bg-rolex-gold text-rolex-black rounded-full font-medium tracking-wider uppercase transition-all hover:scale-105 shadow-lg">
            {t.nav.book}
          </button>
          <button className="px-8 py-4 bg-rolex-emerald text-rolex-ivory rounded-full font-medium tracking-wider uppercase transition-all hover:scale-105 gold-glow">
            {t.nav.contact}
          </button>
        </motion.div>
      </motion.div>

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
