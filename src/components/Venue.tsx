import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { wedding } from '../data/wedding';

export default function Venue() {
  return (
    <section className="bg-ivory py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-serif text-3xl tracking-widest text-wine-red mb-16">ĐỊA ĐIỂM</h2>

        <div className="flex flex-col gap-12">
          {/* Groom's Venue */}
          <div className="bg-wedding-white p-8 shadow-md border-t-4 border-wine-red">
            <MapPin className="w-8 h-8 text-wine-red mx-auto mb-4" />
            <h3 className="font-serif text-xl tracking-[0.2em] text-wine-dark mb-4">NHÀ TRAI</h3>
            <p className="font-sans text-wedding-text mb-6 leading-relaxed">
              {wedding.groom.address}
            </p>
            <a 
              href={wedding.maps.groom || '#'} 
              target={wedding.maps.groom ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <button 
                disabled={!wedding.maps.groom}
                className="bg-ivory border border-wine-red text-wine-red px-6 py-2 text-sm tracking-widest font-sans uppercase hover:bg-wine-red hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                XEM BẢN ĐỒ
              </button>
            </a>
          </div>

          {/* Bride's Venue */}
          <div className="bg-wedding-white p-8 shadow-md border-t-4 border-wine-red">
            <MapPin className="w-8 h-8 text-wine-red mx-auto mb-4" />
            <h3 className="font-serif text-xl tracking-[0.2em] text-wine-dark mb-4">NHÀ GÁI</h3>
            <p className="font-sans text-wedding-text mb-6 leading-relaxed">
              {wedding.bride.address}
            </p>
            <a 
              href={wedding.maps.bride || '#'} 
              target={wedding.maps.bride ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <button 
                disabled={!wedding.maps.bride}
                className="bg-ivory border border-wine-red text-wine-red px-6 py-2 text-sm tracking-widest font-sans uppercase hover:bg-wine-red hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                XEM BẢN ĐỒ
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
