import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-rolex-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-rolex-green mb-8">{t.contact.title}</h2>
            <p className="text-rolex-black/70 mb-12 text-lg">{t.contact.subtitle}</p>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-rolex-green/10 flex items-center justify-center text-rolex-green">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rolex-black/40">Call Us</p>
                  <p className="font-serif text-lg">+94 11 234 5678</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-rolex-green/10 flex items-center justify-center text-rolex-green">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rolex-black/40">Email Us</p>
                  <p className="font-serif text-lg">concierge@luma.travel</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-rolex-green/10 flex items-center justify-center text-rolex-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rolex-black/40">Visit Us</p>
                  <p className="font-serif text-lg">Galle Face Terrace, Colombo 03, Sri Lanka</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 flex gap-4">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-full border border-rolex-gold flex items-center justify-center text-rolex-gold hover:bg-rolex-gold hover:text-rolex-ivory transition-all"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-full border border-rolex-gold flex items-center justify-center text-rolex-gold hover:bg-rolex-gold hover:text-rolex-ivory transition-all"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-full border border-rolex-gold flex items-center justify-center text-rolex-gold hover:bg-rolex-gold hover:text-rolex-ivory transition-all"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-rolex-gold/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-rolex-black/60 mb-2 block">{t.contact.name}</label>
                  <input type="text" className="w-full bg-rolex-ivory border-b border-rolex-gold/30 py-3 px-4 focus:outline-none focus:border-rolex-gold transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-rolex-black/60 mb-2 block">{t.contact.email}</label>
                  <input type="email" className="w-full bg-rolex-ivory border-b border-rolex-gold/30 py-3 px-4 focus:outline-none focus:border-rolex-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-rolex-black/60 mb-2 block">Phone Number</label>
                  <input type="tel" className="w-full bg-rolex-ivory border-b border-rolex-gold/30 py-3 px-4 focus:outline-none focus:border-rolex-gold transition-colors" placeholder="+94 77 123 4567" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-rolex-black/60 mb-2 block">Travel Dates</label>
                  <input type="text" className="w-full bg-rolex-ivory border-b border-rolex-gold/30 py-3 px-4 focus:outline-none focus:border-rolex-gold transition-colors" placeholder="Aug 2026" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-rolex-black/60 mb-2 block">{t.contact.message}</label>
                <textarea rows={4} className="w-full bg-rolex-ivory border-b border-rolex-gold/30 py-3 px-4 focus:outline-none focus:border-rolex-gold transition-colors resize-none" placeholder="Tell us about your dream trip..."></textarea>
              </div>
              <button className="w-full py-4 bg-rolex-gold text-rolex-black font-medium uppercase tracking-widest rounded-full transition-all hover:scale-[1.02] gold-glow">
                {t.contact.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
