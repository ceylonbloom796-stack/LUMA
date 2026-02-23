import { motion } from "motion/react";
import { Hotel } from "../types";
import { useLanguage } from "../LanguageContext";

const hotels: Hotel[] = [
  { id: "1", name: "", location: "Colombo", image: "https://cdnassets.hw.net/ae/85/d8cc8daa424c9f2a65aab696fbb9/c462b207f90641859358f2e32bea2f74.jpg" },
  { id: "2", name: "", location: "Kandy", image: "https://i.pinimg.com/originals/25/20/58/2520586be360b85674919fdb9a1227d6.jpg" },
  { id: "3", name: "", location: "Sigiriya", image: "https://villasinsrilanka.com/media/cache/images/-OBS09875_fTb6N1M/8a97e23808dbc5b56846e71720a0d9ce.jpg" },
  { id: "4", name: "", location: "Polonnaruwa", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d9/02/dd/caption.jpg?w=700&h=-1&s=1" },
  { id: "5", name: "", location: "Pasikudah", image: "https://i.pinimg.com/736x/e3/b4/95/e3b4956621f781e848ea4e4982d1cbd3.jpg" },
  { id: "6", name: "", location: "Arugam Bay", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/126886652.jpg?k=7d9326625f89bd191911e3e936c56a93f2f8c8907c4808370aeb301886292dd7&o=&hp=1" },
  { id: "7", name: "", location: "Nuwara Eliya", image: "https://a0.muscache.com/im/pictures/d5b3c699-ec9f-483c-b295-69b1bb8b793e.jpg" },
  { id: "8", name: "", location: "Mirissa", image: "https://www.villainsrilanka.co.uk/wp-content/uploads/2021/12/fullsizeoutput_af0e.jpeg" },
  { id: "9", name: "", location: "Galle", image: "https://travelcommunication.net/wp-content/uploads/2014/08/hotels-travel-index-564.jpg" },
];

export default function Hotels() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-rolex-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl text-rolex-green mb-4">
              {t.hotels.title.split(t.hotels.italic)[0]}
              <span className="text-rolex-gold italic">{t.hotels.italic}</span>
              {t.hotels.title.split(t.hotels.italic)[1]}
            </h2>
            <p className="text-rolex-black/60 max-w-xl">{t.hotels.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 border border-rolex-gold text-rolex-gold text-xs uppercase tracking-widest rounded-full">{t.hotels.parking}</span>
            <span className="px-4 py-2 border border-rolex-gold text-rolex-gold text-xs uppercase tracking-widest rounded-full">{t.hotels.service}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 400, damping: 10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-2xl">
                <img 
                  src={hotel.image} 
                  alt={hotel.location}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-rolex-black/40 backdrop-blur-md text-rolex-ivory px-3 py-1 rounded-full text-xs">
                  {hotel.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
