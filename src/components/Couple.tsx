import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { slideLeft, slideRight, staggerContainer, fadeUp } from '../lib/animations';

export default function Couple() {
  return (
    <section className="bg-wedding-white py-24 px-6 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-md mx-auto relative"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-wine-red uppercase mb-4">Chú rể & Cô dâu</p>
          <div className="w-[1px] h-12 bg-wine-red/30 mx-auto"></div>
        </motion.div>

        {/* Groom - Left aligned */}
        <div className="relative mb-24 pr-12">
          <motion.div variants={slideRight} className="w-full h-80 overflow-hidden relative shadow-xl">
            <img 
              src={wedding.photos.photo2} 
              alt="Groom" 
              className="w-full h-full object-cover object-[70%_20%]"
            />
          </motion.div>
          <motion.div 
            variants={slideLeft}
            className="absolute -bottom-8 -right-4 bg-ivory p-6 shadow-lg border border-wine-red/10 w-64"
          >
            <p className="font-sans text-[10px] tracking-widest text-wine-red mb-2 uppercase">Chú rể</p>
            <h2 className="font-serif text-3xl text-wedding-text">{wedding.groom.name}</h2>
          </motion.div>
        </div>

        {/* Bride - Right aligned */}
        <div className="relative pl-12 mt-32">
          <motion.div variants={slideLeft} className="w-full h-80 overflow-hidden relative shadow-xl">
            <img 
              src={wedding.photos.photo2} 
              alt="Bride" 
              className="w-full h-full object-cover object-[30%_20%]"
            />
          </motion.div>
          <motion.div 
            variants={slideRight}
            className="absolute -bottom-8 -left-4 bg-ivory p-6 shadow-lg border border-wine-red/10 w-64 text-right"
          >
            <p className="font-sans text-[10px] tracking-widest text-wine-red mb-2 uppercase">Cô dâu</p>
            <h2 className="font-serif text-3xl text-wedding-text">{wedding.bride.name}</h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
