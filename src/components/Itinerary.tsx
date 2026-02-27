import { motion, useScroll, useTransform } from "motion/react";
import { ItineraryDay } from "../types";
import { useRef } from "react";

import { useLanguage } from "../LanguageContext";

const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Colombo",
    description: "Private city tour, Galle Face sunset, and rooftop dinner.",
    hotels: ["Shangri-La Colombo", "Cinnamon Grand"],
    activities: ["City Tour", "Galle Face Sunset", "Rooftop Dinner"],
    image: "https://www.portcitycolombo.gov.lk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewcover.a99dce4c.png&w=3840&q=75"
  },
  {
    day: 2,
    title: "Colombo to Kandy",
    description: "Temple of the Tooth, cultural dance, and Kandy Lake walk.",
    hotels: ["Earl’s Regency", "Golden Crown"],
    activities: ["Temple of Tooth", "Cultural Dance", "Gem Museum"],
    image: "https://dmc.dilmahtea.com/web-space/dmc/press-news/efbc0848b836a9de4b0c18c93ec052d87647fb06/150296400062073.jpg"
  },
  {
    day: 3,
    title: "Kandy to Sigiriya",
    description: "Climb the Sigiriya Rock Fortress and witness a Pidurangala sunset.",
    hotels: ["Water Garden Sigiriya", "Jetwing Vil Uyana"],
    activities: ["Rock Fortress Climb", "Pidurangala Sunset"],
    image: "https://th.bing.com/th/id/R.dade39779e7549015f83af8f8782e6e8?rik=IHFleItx%2by2chw&riu=http%3a%2f%2fwww.pearlceylon.com%2fimages%2fdestination%2fsigiriya%2fsigiriya-by-air.jpg&ehk=qBvBwGXJvH%2fks4lehtxalJjDvmSDg8BAUkxTRWpI%2bWo%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    day: 4,
    title: "Minneriya & Village Life",
    description: "Jeep safari and authentic village experience with bullock carts.",
    activities: ["Jeep Safari", "Village Tour", "Catamaran Ride"],
    image: "https://www.swantour.com/blogs/wp-content/uploads/2019/03/Wasgamuwa-National-Park.jpg"
  },
  {
    day: 5,
    title: "Sigiriya to Polonnaruwa",
    description: "Cycling tour through ancient ruins and sunset lake views.",
    hotels: ["EKHO Lake House", "Uga Ulagalla"],
    activities: ["Cycling Tour", "Ancient Ruins", "Lake Sunset"],
    image: "https://th.bing.com/th/id/R.141883ce9e6fd88f1071701dcdf2e4ac?rik=RMMnmYPoD6nAog&riu=http%3a%2f%2ftravellingclaus.com%2fwp-content%2fuploads%2f2018%2f02%2f1a22-1.jpg&ehk=fksnVD5daUgsXW%2b6HKdZfuU7go%2fkH6kMhY6xOVZWS3w%3d&risl=1&pid=ImgRaw&r=0"
  },
  {
    day: 6,
    title: "Polonnaruwa to Pasikudah",
    description: "Beach relaxation and sunset cocktails on the east coast.",
    hotels: ["The Calm Resort & Spa"],
    activities: ["Beach Relaxation", "Sunset Cocktails"],
    image: "https://wereldreizigers.nl/wp-content/uploads/2020/10/tomas-malik-FHAHnF9C0Sw-unsplash.jpg"
  },
  {
    day: 7,
    title: "Polonnaruwa Gal Oya Boat Safari",
    description: "Wildlife photography and a scenic picnic brunch.",
    activities: ["Boat Safari", "Wildlife Photography", "Picnic Brunch"],
    image: "https://www.bestoflanka.com/images/gal-oya-boat-safari-followed-by-an-evening-tea-and-snack-in-an-Island/gal-oya-boat-safari-followed-by-an-evening-tea-and-snack-in-an-Island-1.jpg"
  },
  {
    day: 8,
    title: "Pasikudah to Arugam Bay",
    description: "Lagoon safari and a beach BBQ under the stars.",
    hotels: ["Jetwing Surf", "Spice Trail"],
    activities: ["Lagoon Safari", "Beach BBQ", "Optional Surf"],
    image: "https://overatours.com/wp-content/uploads/2021/10/Surfing-Arugam-Bay-in-Sri-Lanka-for-Blog.jpg"
  },
  {
    day: 9,
    title: "Arugam Bay to Nuwara Eliya",
    description: "Scenic mountain drive, tea factory visit, and horse riding.",
    hotels: ["Grand Hotel", "Heritance Tea Factory"],
    activities: ["Tea Factory", "Gregory Lake", "Horse Riding"],
    image: "https://storage.googleapis.com/fvallimages/uploads/tour/images/tour_341_7235.jpg?tr=w-360,h-438"
  },
  {
    day: 10,
    title: "Nuwara Eliya Leisure",
    description: "Relax in the 'Little England' of Sri Lanka. Visit Victoria Park or enjoy high tea at the Grand Hotel.",
    hotels: ["Grand Hotel", "Heritance Tea Factory"],
    activities: ["Victoria Park", "High Tea", "Leisure Walk"],
    image: "https://www.heritancehotels.com/teafactory/wp-content/uploads/sites/11/2018/02/Heritance-Tea-Factory-Exterior-1.jpg"
  },
  {
    day: 11,
    title: "Nuwara Eliya to Mirissa",
    description: "Beach sunset and luxury spa treatments.",
    hotels: ["Weligama Bay Marriott", "Cape Weligama"],
    activities: ["Beach Sunset", "Luxury Spa"],
    image: "https://srilankaexplorers.com/wp-content/uploads/2024/05/Mirissa-Beach-819x700.jpeg"
  },
  {
    day: 12,
    title: "Mirissa Leisure",
    description: "Whale watching and free leisure time for diving.",
    activities: ["Whale Watching", "Optional Diving"],
    image: "https://tse2.mm.bing.net/th/id/OIP.a9YreD60SrnYjkJwnOB8-QHaEr?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    day: 13,
    title: "Mirissa",
    description: "Explore the historic Galle Fort and colonial architecture.",
    hotels: ["Jetwing Lighthouse"],
    activities: ["Galle Fort Visit", "Colonial Walk"],
    image: "https://i.pinimg.com/originals/fe/94/d9/fe94d9aee32db149a5a509eed47b8d21.jpg"
  },
  {
    day: 14,
    title: "Departure",
    description: "Transfer to Bandaranaike International Airport.",
    activities: ["Airport Transfer"],
    image: "https://www.onlanka.com/wp-content/uploads/2023/05/bandaranaike-international-airport-sri-lanka.jpg"
  }
];

interface ItineraryItemProps {
  item: ItineraryDay;
  index: number;
  key?: number;
}

function ItineraryItem({ item, index }: ItineraryItemProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Image Side */}
      <div className="flex-1 w-full overflow-hidden rounded-2xl">
        <motion.div 
          style={{ y }}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group"
        >
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-rolex-black/20 group-hover:bg-transparent transition-colors" />
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="flex-1 w-full text-center md:text-left">
        <h3 className="text-2xl md:text-3xl mb-4">{item.title}</h3>
        <p className="text-rolex-ivory/70 mb-6">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {item.activities.map(act => (
            <span key={act} className="px-3 py-1 bg-rolex-green/30 border border-rolex-green text-rolex-emerald text-xs rounded-full">
              {act}
            </span>
          ))}
        </div>
        
        {item.hotels && (
          <div className="mt-4 text-xs text-rolex-ivory/40 italic">
            {t.itinerary.stay}: {item.hotels.join(" / ")}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Itinerary() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-rolex-black text-rolex-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 italic">
            {t.itinerary.title.split(t.itinerary.italic)[0]}
            <span className="text-rolex-gold not-italic">{t.itinerary.italic}</span>
            {t.itinerary.title.split(t.itinerary.italic)[1]}
          </h2>
          <p className="text-rolex-ivory/60">{t.itinerary.subtitle}</p>
        </div>

        <div className="relative">
          <div className="space-y-24">
            {itinerary.map((item, index) => (
              <ItineraryItem key={item.day} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
