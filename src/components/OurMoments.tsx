import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function OurMoments() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        {/* Gallery title: scrolls with document */}
        <h2 className="font-script text-5xl text-white mb-10">
          The Album Of Love
        </h2>

        <div className="flex flex-col space-y-4">
          {/* GALLERY_ROW_01: simultaneous row opacity reveal over ~0.48s (F397-412) */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.48, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] bg-[#801323] rounded-md overflow-hidden shadow-2xl">
              <img 
                src={wedding.photos.photo1} 
                alt="Album 1" 
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 20%" }}
                loading="lazy" 
                decoding="async"
              />
            </div>
            <div className="aspect-[3/4] bg-[#801323] rounded-md overflow-hidden shadow-2xl">
              <img 
                src={wedding.photos.photo2} 
                alt="Album 2" 
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 20%" }}
                loading="lazy" 
                decoding="async"
              />
            </div>
          </motion.div>

          {/* GALLERY_ROW_LATER: simultaneous row opacity reveal over ~0.65s (F468-490) */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] bg-[#801323] rounded-md overflow-hidden shadow-2xl">
              <img 
                src={wedding.photos.photo2} 
                alt="Album 3" 
                className="w-full h-full object-cover grayscale-[20%]"
                style={{ objectPosition: "60% 20%" }}
                loading="lazy" 
                decoding="async"
              />
            </div>
            <div className="aspect-[3/4] bg-[#801323] rounded-md overflow-hidden shadow-2xl">
              <img 
                src={wedding.photos.photo1} 
                alt="Album 4" 
                className="w-full h-full object-cover"
                style={{ objectPosition: "40% 30%" }}
                loading="lazy" 
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
