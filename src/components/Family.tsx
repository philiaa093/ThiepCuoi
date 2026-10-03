import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { Divider, FlowerOrnament } from './Decorations';

export default function Family() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto flex flex-col items-center text-center relative">
        <FlowerOrnament className="absolute -top-10 -right-6 opacity-30" delay={0.2} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 w-full"
        >
          <h3 className="font-serif text-sm tracking-[0.2em] text-white uppercase mb-4">
            TRÂN TRỌNG KÍNH MỜI
          </h3>
          <p className="font-script text-5xl mb-4 text-white">Quý Khách</p>
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-white/80 mb-6 leading-relaxed px-4">
            TỚI DỰ BỮA CƠM THÂN MẬT CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
          </p>
          <p className="font-script text-[3.5rem] leading-none text-white">{wedding.groom.shortName}</p>
          <p className="font-script text-2xl text-white my-1">&</p>
          <p className="font-script text-[3.5rem] leading-none text-white">{wedding.bride.shortName}</p>
        </motion.div>

        <div className="flex flex-col w-full space-y-12 relative mt-4">
          <FlowerOrnament className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 w-12 h-12" delay={0.4} />
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center w-full flex flex-col items-center"
          >
            <h3 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">NHÀ GÁI</h3>
            <Divider className="text-white/40 mb-4 w-32" />
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest mb-1">{wedding.bride.father}</p>
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest">{wedding.bride.mother}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center w-full flex flex-col items-center"
          >
            <h3 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">NHÀ TRAI</h3>
            <Divider className="text-white/40 mb-4 w-32" />
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest mb-1">{wedding.groom.father}</p>
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest">{wedding.groom.mother}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
