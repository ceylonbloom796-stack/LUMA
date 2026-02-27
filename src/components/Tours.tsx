import { motion } from "motion/react";
import { Tour } from "../types";
import { useLanguage } from "../LanguageContext";

const tours: Tour[] = [
  {
    id: "1",
    title: "Minneriya National Park Safari",
    description: "Witness the majestic 'Gathering' of hundreds of wild elephants in their natural habitat.",
    image: "https://www.swantour.com/blogs/wp-content/uploads/2019/03/Wasgamuwa-National-Park.jpg"
  },
  {
    id: "2",
    title: "Polonnaruwa Gal Oya Boat Safari",
    description: "A unique aquatic adventure observing elephants swimming across the vast reservoir.",
    image: "https://www.bestoflanka.com/images/gal-oya-boat-safari-followed-by-an-evening-tea-and-snack-in-an-Island/gal-oya-boat-safari-followed-by-an-evening-tea-and-snack-in-an-Island-1.jpg"
  },
  {
    id: "3",
    title: "Authentic Village Tour",
    description: "Experience rural life with bullock cart rides, catamaran journeys, and a traditional lunch.",
    image: "https://wereldreizigers.nl/wp-content/uploads/2020/10/tomas-malik-FHAHnF9C0Sw-unsplash.jpg"
  },
  {
    id: "4",
    title: "Night Cultural Show",
    description: "Immerse yourself in the vibrant rhythms and traditional dances of Deepawana.",
    image: "https://dmc.dilmahtea.com/web-space/dmc/press-news/efbc0848b836a9de4b0c18c93ec052d87647fb06/150296400062073.jpg"
  }
];

export default function Tours() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-rolex-black text-rolex-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">{t.tours.title.split('&')[0]} & <span className="text-rolex-gold">{t.tours.title.split('&')[1]}</span></h2>
          <p className="text-rolex-ivory/60 max-w-2xl mx-auto">{t.tours.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(212, 175, 55, 0.2)" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 10 }}
              className="group relative overflow-hidden rounded-lg border border-rolex-gold/20 hover:border-rolex-gold transition-colors"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-rolex-black via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-serif text-rolex-gold mb-2">{tour.title}</h3>
                <p className="text-sm text-rolex-ivory/80 line-clamp-2">{tour.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
