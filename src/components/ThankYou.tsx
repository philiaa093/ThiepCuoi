import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function ThankYou() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center text-center px-6">
      <motion.img 
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={wedding.photos.photo2} 
        alt="Thank You" 
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-wine-dark/60"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-wedding-white"
      >
        <h2 className="font-handwriting text-5xl mb-8">Thank You</h2>
        
        <p className="font-sans text-sm font-light leading-relaxed max-w-[280px] mx-auto mb-10 opacity-90">
          Cảm ơn bạn đã dành thời gian<br/>
          chung vui trong ngày đặc biệt<br/>
          của chúng mình.
        </p>

        <div className="font-serif tracking-widest text-lg mb-4">
          <p>{wedding.groom.name.toUpperCase()}</p>
          <p className="text-xl my-1">&</p>
          <p>{wedding.bride.name.toUpperCase()}</p>
        </div>

        <p className="font-sans text-xs tracking-widest">
          {wedding.mainDate.substring(8,10)}.{wedding.mainDate.substring(5,7)}.{wedding.mainDate.substring(0,4)}
        </p>
      </motion.div>
    </section>
  );
}
