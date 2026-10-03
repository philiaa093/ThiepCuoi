import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { staggerContainer, staggerText } from '../lib/animations';

export default function ThankYou() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-center text-center pb-24 px-6">
      <motion.div 
        initial={{ scale: 1.04 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img 
          src={wedding.photos.photo2} 
          alt="Thank You" 
          className="w-full h-full object-cover"
          style={{ objectPosition: wedding.photos.position.thankYou }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/90 via-wine-dark/40 to-transparent"></div>
      </motion.div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-wedding-white"
      >
        <motion.h2 variants={staggerText} className="font-handwriting text-5xl md:text-6xl mb-10 text-ivory/90">Thank You</motion.h2>
        
        <motion.p variants={staggerText} className="font-sans text-sm font-light leading-loose max-w-[280px] mx-auto mb-16 opacity-80 tracking-wide">
          Cảm ơn bạn đã dành thời gian<br/>
          chung vui trong ngày đặc biệt<br/>
          của chúng mình.
        </motion.p>

        <motion.div variants={staggerText} className="font-serif tracking-widest text-xl mb-6">
          <p>{wedding.groom.name.toUpperCase()}</p>
          <p className="text-xl my-2 font-light opacity-80">&</p>
          <p>{wedding.bride.name.toUpperCase()}</p>
        </motion.div>

        <motion.p variants={staggerText} className="font-sans text-[10px] tracking-[0.3em] opacity-60">
          {wedding.mainDate.substring(8,10)}.{wedding.mainDate.substring(5,7)}.{wedding.mainDate.substring(0,4)}
        </motion.p>
      </motion.div>
    </section>
  );
}
