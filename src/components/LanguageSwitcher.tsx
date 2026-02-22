import { useLanguage } from "../LanguageContext";
import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-[60] flex gap-2">
      <motion.div 
        className="bg-rolex-black/40 backdrop-blur-md border border-rolex-gold/30 p-1 rounded-full flex items-center gap-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="p-2 text-rolex-gold">
          <Globe size={16} />
        </div>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
            language === 'en' 
              ? 'bg-rolex-gold text-rolex-black shadow-lg' 
              : 'text-rolex-ivory hover:text-rolex-gold'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('fi')}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
            language === 'fi' 
              ? 'bg-rolex-gold text-rolex-black shadow-lg' 
              : 'text-rolex-ivory hover:text-rolex-gold'
          }`}
        >
          FI
        </button>
      </motion.div>
    </div>
  );
}
