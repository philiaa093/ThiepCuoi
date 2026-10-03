import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { staggerContainer, fadeUp, imageReveal, slideLeft, slideRight } from '../lib/animations';

export default function OurMoments() {
  return (
    <section className="bg-ivory py-32 px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUp} className="font-handwriting text-5xl text-wine-dark mb-4">Our Moments</motion.h2>
        <motion.p variants={fadeUp} className="font-sans text-[10px] tracking-[0.3em] uppercase text-wedding-text/60">Khoảnh Khắc Đáng Nhớ</motion.p>
      </motion.div>

      <div className="flex flex-col gap-8 max-w-md mx-auto">
        {/* Row 1 */}
        <div className="flex gap-4 h-64">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} 
            className="flex-1 overflow-hidden"
          >
            <img 
              src={wedding.photos.photo1} alt="Moment 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: wedding.photos.position.moment1 }}
              loading="lazy" decoding="async"
            />
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft} 
            className="flex-1 overflow-hidden"
          >
            <img 
              src={wedding.photos.photo2} alt="Moment 2" 
              className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: wedding.photos.position.moment2 }}
              loading="lazy" decoding="async"
            />
          </motion.div>
        </div>

        {/* Row 2 - Full width */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal} 
          className="h-56 overflow-hidden"
        >
          <img 
            src={wedding.photos.photo2} alt="Moment 3" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            style={{ objectPosition: wedding.photos.position.moment3 }}
            loading="lazy" decoding="async"
          />
        </motion.div>

        {/* Row 3 */}
        <div className="flex gap-4 h-72">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} 
            className="w-2/3 overflow-hidden"
          >
            <img 
              src={wedding.photos.photo1} alt="Moment 4" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: wedding.photos.position.moment4 }}
              loading="lazy" decoding="async"
            />
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft} 
            className="w-1/3 overflow-hidden"
          >
            <img 
              src={wedding.photos.photo2} alt="Moment 5" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: wedding.photos.position.moment5 }}
              loading="lazy" decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
