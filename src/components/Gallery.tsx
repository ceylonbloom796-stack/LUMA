import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const images = [
  "https://www.portcitycolombo.gov.lk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewcover.a99dce4c.png&w=3840&q=75",
  "https://th.bing.com/th/id/R.dade39779e7549015f83af8f8782e6e8?rik=IHFleItx%2by2chw&riu=http%3a%2f%2fwww.pearlceylon.com%2fimages%2fdestination%2fsigiriya%2fsigiriya-by-air.jpg&ehk=qBvBwGXJvH%2fks4lehtxalJjDvmSDg8BAUkxTRWpI%2bWo%3d&risl=&pid=ImgRaw&r=0",
  "https://dmc.dilmahtea.com/web-space/dmc/press-news/efbc0848b836a9de4b0c18c93ec052d87647fb06/150296400062073.jpg",
  "https://wereldreizigers.nl/wp-content/uploads/2020/10/tomas-malik-FHAHnF9C0Sw-unsplash.jpg",
  "https://www.swantour.com/blogs/wp-content/uploads/2019/03/Wasgamuwa-National-Park.jpg",
  "https://overatours.com/wp-content/uploads/2021/10/Surfing-Arugam-Bay-in-Sri-Lanka-for-Blog.jpg",
  "https://srilankaexplorers.com/wp-content/uploads/2024/05/Mirissa-Beach-819x700.jpeg",
  "https://i.pinimg.com/originals/fe/94/d9/fe94d9aee32db149a5a509eed47b8d21.jpg",
];

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-rolex-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-rolex-green mb-4">
            {t.gallery.title.split(t.gallery.italic)[0]}
            <span className="text-rolex-gold italic">{t.gallery.italic}</span>
            {t.gallery.title.split(t.gallery.italic)[1]}
          </h2>
          <p className="text-rolex-black/60 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img 
                src={src} 
                alt={`Sri Lanka Gallery ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-rolex-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-rolex-ivory text-xs uppercase tracking-widest border border-rolex-ivory px-4 py-2 rounded-full">{t.gallery.view}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
