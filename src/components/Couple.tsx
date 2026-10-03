import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function Couple() {
  return (
    <section className="bg-wedding-white py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        {/* Groom */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-64 overflow-hidden mb-6 rounded-t-full border-4 border-ivory shadow-lg">
            <img 
              src={wedding.photos.photo2} 
              alt="Groom" 
              className="w-full h-full object-cover object-[70%_20%]"
            />
          </div>
          <p className="font-serif text-sm tracking-[0.3em] text-wine-red mb-2">CHÚ RỂ</p>
          <h2 className="font-serif text-3xl text-wedding-text">{wedding.groom.name}</h2>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-64 overflow-hidden mb-6 rounded-t-full border-4 border-ivory shadow-lg">
            <img 
              src={wedding.photos.photo2} 
              alt="Bride" 
              className="w-full h-full object-cover object-[30%_20%]"
            />
          </div>
          <p className="font-serif text-sm tracking-[0.3em] text-wine-red mb-2">CÔ DÂU</p>
          <h2 className="font-serif text-3xl text-wedding-text">{wedding.bride.name}</h2>
        </div>
      </motion.div>
    </section>
  );
}
