import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { wedding } from '../data/wedding';
import { staggerContainer, staggerText } from '../lib/animations';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background with slow zoom out */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={wedding.photos.photo1}
          alt="Wedding Couple" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-wedding-white px-6 text-center w-full mt-24"
      >
        <motion.p 
          variants={staggerText}
          className="font-handwriting text-4xl md:text-5xl mb-6 text-ivory/90"
        >
          Save the Date
        </motion.p>
        
        <motion.h1 
          variants={staggerText}
          className="font-serif text-4xl md:text-5xl mb-6 tracking-widest leading-tight"
        >
          {wedding.groom.name.toUpperCase()}
          <br/>
          <span className="text-2xl my-3 block font-light text-wedding-gold/80">&</span>
          {wedding.bride.name.toUpperCase()}
        </motion.h1>

        <motion.div 
          variants={staggerText}
          className="font-sans text-lg tracking-[0.3em] mb-12 flex items-center justify-center gap-4"
        >
          <span>{wedding.mainDate.substring(8,10)}</span>
          <span className="w-1 h-1 rounded-full bg-wedding-gold"></span>
          <span>{wedding.mainDate.substring(5,7)}</span>
          <span className="w-1 h-1 rounded-full bg-wedding-gold"></span>
          <span>{wedding.mainDate.substring(0,4)}</span>
        </motion.div>

        <motion.div 
          variants={staggerText}
          className="w-[1px] h-12 bg-gradient-to-b from-wedding-gold/50 to-transparent mb-8"
        ></motion.div>

        <motion.p 
          variants={staggerText}
          className="font-sans text-sm font-light max-w-[280px] leading-loose opacity-90 tracking-wide"
        >
          Trân trọng kính mời bạn<br/>
          đến chung vui trong ngày hạnh phúc<br/>
          của chúng mình.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-wedding-white/70 flex flex-col items-center"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase mb-2">Cuộn</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
