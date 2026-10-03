import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function Family() {
  return (
    <section className="bg-ivory py-24 px-6 relative overflow-hidden">
      {/* Decorative floral/line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-wine-red/30 to-transparent"></div>
      
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-wine-red opacity-5 pointer-events-none">
        <span className="font-serif text-[200px] leading-none">囍</span>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-md mx-auto relative z-10 flex flex-col gap-20 text-center"
      >
        {/* Groom's Family */}
        <motion.div variants={fadeUp} className="flex flex-col items-center">
          <h3 className="font-serif text-sm tracking-[0.3em] text-wine-dark mb-8 uppercase">Đại diện nhà trai</h3>
          <div className="font-sans text-wedding-text leading-loose">
            <p className="mb-2"><span className="text-xs tracking-widest text-gray-400 uppercase mr-3">Bà</span><span className="font-serif text-xl">{wedding.groom.mother}</span></p>
            <p className="text-[11px] mt-6 tracking-widest uppercase text-wine-red/80 max-w-[200px] mx-auto leading-relaxed border-t border-wine-red/20 pt-4">{wedding.groom.address}</p>
          </div>
        </motion.div>

        <div className="w-12 h-px bg-wine-red/20 mx-auto"></div>

        {/* Bride's Family */}
        <motion.div variants={fadeUp} className="flex flex-col items-center">
          <h3 className="font-serif text-sm tracking-[0.3em] text-wine-dark mb-8 uppercase">Đại diện nhà gái</h3>
          <div className="font-sans text-wedding-text leading-loose">
            <p className="mb-2"><span className="text-xs tracking-widest text-gray-400 uppercase mr-3">Ông</span><span className="font-serif text-xl">{wedding.bride.father}</span></p>
            <p className="mb-2"><span className="text-xs tracking-widest text-gray-400 uppercase mr-3">Bà</span><span className="font-serif text-xl">{wedding.bride.mother}</span></p>
            <p className="text-[11px] mt-6 tracking-widest uppercase text-wine-red/80 max-w-[200px] mx-auto leading-relaxed border-t border-wine-red/20 pt-4">{wedding.bride.address}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
