import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function Family() {
  return (
    <section className="bg-ivory py-20 px-6 relative border-y border-wine-dark/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-wine-red opacity-20">
        <span className="font-serif text-6xl">囍</span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-12 md:gap-8 justify-center text-center"
      >
        {/* Groom's Family */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="font-serif text-xl tracking-[0.2em] text-wine-red mb-6 border-b border-wine-red/30 pb-2">NHÀ TRAI</h3>
          <div className="font-sans text-wedding-text leading-relaxed">
            <p className="mb-1"><span className="text-sm text-gray-500 mr-2">Bà:</span><span className="font-semibold text-lg">{wedding.groom.mother}</span></p>
            <p className="text-sm mt-4 text-gray-600 max-w-[200px] mx-auto leading-relaxed">{wedding.groom.address}</p>
          </div>
        </div>

        {/* Bride's Family */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="font-serif text-xl tracking-[0.2em] text-wine-red mb-6 border-b border-wine-red/30 pb-2">NHÀ GÁI</h3>
          <div className="font-sans text-wedding-text leading-relaxed">
            <p className="mb-1"><span className="text-sm text-gray-500 mr-2">Ông:</span><span className="font-semibold text-lg">{wedding.bride.father}</span></p>
            <p className="mb-1"><span className="text-sm text-gray-500 mr-2">Bà:</span><span className="font-semibold text-lg">{wedding.bride.mother}</span></p>
            <p className="text-sm mt-4 text-gray-600 max-w-[200px] mx-auto leading-relaxed">{wedding.bride.address}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
