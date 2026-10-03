import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { wedding } from '../data/wedding';

export default function PhotoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[130%]"
      >
        <img 
          src={wedding.photos.photo2} 
          alt="Wedding" 
          className="w-full h-full object-cover"
          style={{ objectPosition: wedding.photos.position.photoSection }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-8 text-center"
      >
        <p className="font-serif text-2xl md:text-3xl text-wedding-white leading-loose italic tracking-wider font-light">
          "From this day forward, <br/>
          you shall not walk alone."
        </p>
      </motion.div>
    </section>
  );
}
