import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const locations = [
  { name: "Colombo", x: 60, y: 440, day: 1 },
  { name: "Kandy", x: 180, y: 380, day: 2 },
  { name: "Sigiriya", x: 210, y: 280, day: 3 },
  { name: "Polonnaruwa", x: 250, y: 300, day: 5 },
  { name: "Pasikudah", x: 340, y: 300, day: 6 },
  { name: "Polonnaruwa Gal Oya", x: 230, y: 240, day: 7 },
  { name: "Arugam Bay", x: 370, y: 460, day: 8 },
  { name: "Nuwara Eliya", x: 210, y: 440, day: 9 },
  { name: "Mirissa", x: 160, y: 580, day: 11 },
  { name: "Galle", x: 110, y: 570, day: 13 },
];

const pathData = locations.map((loc, i) => `${i === 0 ? 'M' : 'L'} ${loc.x} ${loc.y}`).join(' ');

export default function TourMap() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-rolex-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-rolex-green mb-8">
              {t.map.title.split(t.map.italic)[0]}
              <span className="italic text-rolex-gold">{t.map.italic}</span>
              {t.map.title.split(t.map.italic)[1]}
            </h2>
            <p className="text-lg text-rolex-black/80 leading-relaxed mb-6">
              {t.map.subtitle}
            </p>
            <div className="space-y-4">
              {locations.map((loc, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5, color: "#D4AF37" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-8 h-8 rounded-full bg-rolex-green text-rolex-ivory flex items-center justify-center text-xs font-bold group-hover:bg-rolex-gold transition-colors">
                    {loc.day}
                  </span>
                  <span className="text-rolex-black font-medium">{loc.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-white p-8 rounded-3xl shadow-2xl border border-rolex-gold/10 flex justify-center"
          >
            <svg width="400" height="650" viewBox="0 0 400 650" className="w-full h-auto max-w-[400px]">
              {/* Sri Lanka Simplified Outline */}
              <path
                d="M 200 20 C 250 50, 350 150, 380 300 C 400 450, 350 550, 250 620 C 150 650, 50 600, 20 450 C 0 300, 50 100, 150 30 Z"
                fill="#f8f9fa"
                stroke="#e9ecef"
                strokeWidth="2"
              />
              
              {/* Route Path */}
              <motion.path
                d={pathData}
                fill="none"
                stroke="#d4af37"
                strokeWidth="3"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />

              {/* Location Markers */}
              {locations.map((loc, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  <circle cx={loc.x} cy={loc.y} r="6" fill="#1a3a32" className="drop-shadow-lg" />
                  <circle cx={loc.x} cy={loc.y} r="12" fill="#d4af37" opacity="0.2" />
                  <text
                    x={loc.x + 15}
                    y={loc.y + 5}
                    className="text-[10px] font-bold fill-rolex-black pointer-events-none"
                  >
                    {loc.name}
                  </text>
                </motion.g>
              ))}
            </svg>
            
            <div className="absolute top-8 right-8 flex items-center gap-2 bg-rolex-ivory/80 backdrop-blur-sm p-3 rounded-xl border border-rolex-gold/20">
              <MapPin className="text-rolex-gold" size={16} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-rolex-green">{t.map.interactive}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
