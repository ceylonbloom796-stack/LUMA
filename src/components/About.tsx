import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-rolex-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-rolex-green mb-8">
            {t.about.title.split(t.about.italic)[0]}
            <span className="italic text-rolex-gold">{t.about.italic}</span>
            {t.about.title.split(t.about.italic)[1]}
          </h2>
          <p className="text-lg text-rolex-black/80 leading-relaxed mb-6">
            {t.about.p1}
          </p>
          <p className="text-lg text-rolex-black/80 leading-relaxed">
            {t.about.p2}
          </p>
          <div className="mt-10 h-1 w-24 bg-rolex-gold" />
        </motion.div>

        <motion.div
          style={{ y }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-rolex-gold/30 rounded-2xl -z-10" />
          <img 
            src="https://dmc.dilmahtea.com/web-space/dmc/press-news/efbc0848b836a9de4b0c18c93ec052d87647fb06/150296400062073.jpg" 
            alt="Sri Lanka Luxury Tea Estate" 
            className="rounded-xl shadow-2xl w-full h-[600px] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
