import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center px-6 pt-12 pb-6">
        <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-t-full rounded-b-xl overflow-hidden shadow-2xl">
          <img 
            src={wedding.photos.photo2}
            alt="Wedding Couple" 
            className="w-full h-full object-cover"
            style={{ objectPosition: wedding.photos.position.hero }}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 mt-8">
            <h2 className="text-[4rem] leading-none font-serif text-white mb-2 drop-shadow-md">
              14.06
            </h2>
            <div className="font-script text-4xl text-white mb-3 drop-shadow-md">
              {wedding.groom.shortName} & {wedding.bride.shortName}
            </div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-white/90 drop-shadow-md font-sans">
              WELCOME TO OUR WEDDING
            </div>
          </div>
        </div>
      </section>

      {/* Save the date section right below */}
      <section className="relative w-full flex flex-col items-center pb-16 px-6">
        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <h3 className="font-serif text-[10px] tracking-[0.2em] text-white uppercase border-y border-white/30 py-2">
            QUYẾT ĐỊNH BÊN NHAU TRỌN ĐỜI
          </h3>
          <p className="font-script text-4xl text-white pt-2">Save the date</p>
          <p className="font-serif text-lg tracking-[0.2em] text-white">14 . 06 . 2026</p>
        </div>

        {/* First large portrait: emerges from burgundy background via 0.8s opacity reveal */}
        <motion.div 
          className="w-full max-w-[280px] aspect-[3/4] relative bg-[#801323] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.80, ease: "easeOut" }}
        >
          <img 
            src={wedding.photos.photo1}
            alt="Couple secondary" 
            className="w-full h-full object-cover"
            style={{ objectPosition: wedding.photos.position.saveTheDate }}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </section>
    </>
  );
}
