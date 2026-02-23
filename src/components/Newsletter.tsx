import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-rolex-ivory">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl text-rolex-green font-serif mb-4"
        >
          {t.newsletter.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-rolex-black/60 text-lg mb-8"
        >
          {t.newsletter.subtitle}
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <label htmlFor="newsletter-email" className="sr-only">{t.newsletter.placeholder}</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={t.newsletter.placeholder}
            className="flex-grow px-6 py-3 rounded-full border border-rolex-gold bg-white text-rolex-black focus:outline-none focus:ring-2 focus:ring-rolex-gold"
          />
          <button
            type="submit"
            className="bg-rolex-gold text-rolex-black px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-rolex-gold/90 transition-colors"
          >
            {t.newsletter.button}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
