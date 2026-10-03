import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { wedding } from '../data/wedding';

export default function PhotoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.img 
        style={{ y }}
        src={wedding.photos.photo1} 
        alt="Wedding" 
        className="absolute inset-0 w-full h-[140%] object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 px-8 text-center"
      >
        <p className="font-serif text-2xl md:text-3xl text-wedding-white leading-relaxed italic tracking-wider">
          "From this day forward, <br/>
          you shall not walk alone."
        </p>
      </motion.div>
    </section>
  );
}
