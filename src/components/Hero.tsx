import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { wedding } from '../data/wedding';

export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden flex flex-col items-center justify-center">
      <motion.img 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={wedding.photos.photo1}
        alt="Wedding Couple" 
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center text-wedding-white px-6 text-center w-full mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-handwriting text-3xl mb-4"
        >
          Save the Date
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl mb-4 tracking-widest leading-tight"
        >
          {wedding.groom.name.toUpperCase()}
          <br/>
          <span className="text-2xl my-2 block">&</span>
          {wedding.bride.name.toUpperCase()}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg tracking-[0.2em] mb-12"
        >
          {wedding.mainDate.substring(8,10)} . {wedding.mainDate.substring(5,7)} . {wedding.mainDate.substring(0,4)}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans text-sm font-light max-w-[280px] leading-relaxed opacity-90"
        >
          Trân trọng kính mời bạn<br/>
          đến chung vui trong ngày hạnh phúc<br/>
          của chúng mình.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-wedding-white flex flex-col items-center"
      >
        <ChevronDown className="w-6 h-6 animate-bounce opacity-80" />
      </motion.div>
    </section>
  );
}
