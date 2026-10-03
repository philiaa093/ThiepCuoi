import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function ThankYou() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm aspect-[4/3] mb-8"
        >
          <img 
            src={wedding.photos.photo2} 
            alt="Thank You" 
            className="w-full h-full object-cover rounded-md shadow-2xl"
            style={{ objectPosition: wedding.photos.position.thankYou }}
            loading="lazy" decoding="async"
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-6xl text-white mb-6"
        >
          Lời cảm ơn!
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-sm text-white/90 leading-relaxed mb-16"
        >
          Cảm ơn quý khách đã dành tình cảm cho gia đình chúng tôi. Sự hiện diện của quý khách chính là món quà vô giá, là niềm vinh hạnh lớn nhất của gia đình chúng tôi. Xin chân thành cảm ơn và kính chúc quý khách sức khỏe, hạnh phúc!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-widest text-white/60 mb-8"
        >
          Thiệp cưới online Hữu Thuận & Thu Trang
        </motion.div>
      </div>
    </section>
  );
}
