import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { staggerContainer, fadeUp } from '../lib/animations';

export default function Venue() {
  return (
    <section className="bg-wedding-white py-32 px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-md mx-auto text-center"
      >
        <motion.h2 variants={fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-wine-red mb-24">Địa Điểm Tổ Chức</motion.h2>

        <div className="flex flex-col gap-24 relative">
          {/* Decorative Divider */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20 pointer-events-none text-wine-red font-serif text-2xl">
            囍
          </div>

          {/* Groom's Venue */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <h3 className="font-serif text-2xl tracking-[0.2em] text-wine-dark mb-6">NHÀ TRAI</h3>
            <p className="font-sans text-xs tracking-widest text-wedding-text/80 mb-8 max-w-[200px] leading-loose uppercase">
              {wedding.groom.address}
            </p>
            <a 
              href={wedding.maps.groom || '#'} 
              target={wedding.maps.groom ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={!wedding.maps.groom ? "pointer-events-none" : ""}
            >
              <button 
                disabled={!wedding.maps.groom}
                className="group relative px-8 py-3 text-[10px] tracking-[0.2em] font-sans uppercase text-wine-red transition-all disabled:opacity-30"
              >
                <span className="relative z-10 group-hover:text-wedding-white transition-colors duration-300">Xem Bản Đồ</span>
                <div className="absolute inset-0 border border-wine-red/30 group-hover:bg-wine-red transition-all duration-300"></div>
              </button>
            </a>
          </motion.div>

          <div className="w-px h-16 bg-wine-red/10 mx-auto"></div>

          {/* Bride's Venue */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <h3 className="font-serif text-2xl tracking-[0.2em] text-wine-dark mb-6">NHÀ GÁI</h3>
            <p className="font-sans text-xs tracking-widest text-wedding-text/80 mb-8 max-w-[200px] leading-loose uppercase">
              {wedding.bride.address}
            </p>
            <a 
              href={wedding.maps.bride || '#'} 
              target={wedding.maps.bride ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={!wedding.maps.bride ? "pointer-events-none" : ""}
            >
              <button 
                disabled={!wedding.maps.bride}
                className="group relative px-8 py-3 text-[10px] tracking-[0.2em] font-sans uppercase text-wine-red transition-all disabled:opacity-30"
              >
                <span className="relative z-10 group-hover:text-wedding-white transition-colors duration-300">Xem Bản Đồ</span>
                <div className="absolute inset-0 border border-wine-red/30 group-hover:bg-wine-red transition-all duration-300"></div>
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
