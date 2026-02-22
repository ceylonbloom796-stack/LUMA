import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-rolex-black text-rolex-ivory py-16 border-t border-rolex-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-serif mb-6">Luma Travel</h3>
            <p className="text-rolex-ivory/50 leading-relaxed">
              Crafting premium adventures that redefine luxury in the heart of Sri Lanka.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-rolex-gold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-rolex-ivory/70">
              <li><a href="#" className="hover:text-rolex-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rolex-gold transition-colors">Our Tours</a></li>
              <li><a href="#" className="hover:text-rolex-gold transition-colors">Luxury Stays</a></li>
              <li><a href="#" className="hover:text-rolex-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-rolex-gold mb-6">Newsletter</h4>
            <p className="text-rolex-ivory/50 mb-4 text-sm">Subscribe for exclusive travel insights and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:border-rolex-gold flex-1"
              />
              <button className="bg-rolex-gold text-rolex-black px-6 py-2 rounded-r-lg font-medium hover:bg-rolex-emerald transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-rolex-ivory/30">
          <p>© 2026 Luma Travel. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-rolex-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rolex-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
