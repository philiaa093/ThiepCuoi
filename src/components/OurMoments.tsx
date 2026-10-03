import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function OurMoments() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="font-script text-5xl text-white mb-10"
        >
          The Album Of Love
        </motion.h2>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="aspect-[3/4]"
          >
            <img 
              src={wedding.photos.photo1} 
              alt="Album 1" 
              className="w-full h-full object-cover rounded-md shadow-2xl"
              style={{ objectPosition: "50% 20%" }}
              loading="lazy" decoding="async"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[3/4]"
          >
            <img 
              src={wedding.photos.photo2} 
              alt="Album 2" 
              className="w-full h-full object-cover rounded-md shadow-2xl"
              style={{ objectPosition: "50% 20%" }}
              loading="lazy" decoding="async"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="aspect-[3/4]"
          >
            <img 
              src={wedding.photos.photo2} 
              alt="Album 3" 
              className="w-full h-full object-cover grayscale-[20%] rounded-md shadow-2xl"
              style={{ objectPosition: "60% 20%" }}
              loading="lazy" decoding="async"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="aspect-[3/4]"
          >
            <img 
              src={wedding.photos.photo1} 
              alt="Album 4" 
              className="w-full h-full object-cover rounded-md shadow-2xl"
              style={{ objectPosition: "40% 30%" }}
              loading="lazy" decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
