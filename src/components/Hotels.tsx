import { motion } from "motion/react";
import { Hotel } from "../types";
import { useLanguage } from "../LanguageContext";

const hotels: Hotel[] = [
  { id: "1", name: "", location: "Colombo", image: "https://sitecore-backend.shangri-la.com/-/media/Shangri-La/colombo_shangrila/stay/SLC-Stay-Horizon-Club-Lake-View-Room-1.jpg" },
  { id: "2", name: "", location: "Kandy", image: "https://www.aitkenspencehotels.com/earlsregency/images/stay/luxury-room/luxury-room-1.jpg" },
  { id: "3", name: "", location: "Sigiriya", image: "https://www.watergardensigiriya.com/images/stay/deluxe-villa/deluxe-villa-1.jpg" },
  { id: "4", name: "", location: "Polonnaruwa", image: "https://www.ugaescapes.com/ulagalla/wp-content/uploads/sites/2/2016/10/Ulagalla-Resort-Pool-Villa-Bedroom.jpg" },
  { id: "5", name: "", location: "Pasikudah", image: "https://www.thecalmresort.com/images/stay/garden-view/garden-view-1.jpg" },
  { id: "6", name: "", location: "Arugam Bay", image: "https://www.jetwinghotels.com/jetwingsurf/wp-content/uploads/sites/46/2017/11/Jetwing-Surf-Stay-1.jpg" },
  { id: "7", name: "", location: "Nuwara Eliya", image: "https://www.heritancehotels.com/teafactory/wp-content/uploads/sites/11/2018/02/Heritance-Tea-Factory-Stay-1.jpg" },
  { id: "8", name: "", location: "Mirissa", image: "https://www.resplendentceylon.com/capeweligama/wp-content/uploads/sites/3/2014/09/Cape-Weligama-Stay-1.jpg" },
  { id: "9", name: "", location: "Galle", image: "https://www.jetwinghotels.com/jetwinglighthouse/wp-content/uploads/sites/10/2017/06/Jetwing-Lighthouse-Stay-1.jpg" },
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
              transition={{ delay: index * 0.05 }}
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
