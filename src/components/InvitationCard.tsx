import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { staggerContainer, staggerText, borderReveal } from '../lib/animations';

export default function InvitationCard() {
  return (
    <section className="bg-wedding-white py-32 px-6 flex justify-center text-center">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[340px] p-10 relative bg-ivory shadow-2xl"
      >
        {/* Animated Borders */}
        <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none">
          <motion.rect 
            variants={borderReveal}
            x="0" y="0" width="100%" height="100%" 
            fill="none" stroke="#771E2A" strokeWidth="1" strokeOpacity="0.3"
          />
        </svg>
        <svg className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] pointer-events-none">
          <motion.rect 
            variants={borderReveal}
            x="0" y="0" width="100%" height="100%" 
            fill="none" stroke="#771E2A" strokeWidth="0.5" strokeOpacity="0.2"
          />
        </svg>

        <motion.h2 variants={staggerText} className="font-serif text-xl tracking-[0.2em] text-wine-red mb-12 uppercase">LỄ THÀNH HÔN</motion.h2>
        
        <motion.div variants={staggerText} className="font-serif text-3xl text-wedding-text mb-12 leading-relaxed">
          <p>{wedding.groom.name.toUpperCase()}</p>
          <p className="text-xl text-wine-red my-3 font-light">&</p>
          <p>{wedding.bride.name.toUpperCase()}</p>
        </motion.div>

        <motion.p variants={staggerText} className="font-sans text-[10px] font-light text-gray-500 mb-6 tracking-[0.2em] uppercase">
          Hôn lễ được tổ chức vào hồi
        </motion.p>

        <motion.p variants={staggerText} className="font-serif text-3xl text-wine-red mb-6 tracking-widest">
          08:45
        </motion.p>
        
        <motion.div variants={staggerText} className="font-sans text-xs font-medium tracking-[0.15em] text-wedding-text mb-3 leading-loose">
          THỨ NĂM<br/>
          NGÀY 15 THÁNG 10 NĂM 2026
        </motion.div>
        
        <motion.p variants={staggerText} className="font-sans text-[10px] italic text-gray-400 mb-10">
          Tức ngày 06 tháng 09 năm Bính Ngọ
        </motion.p>

        <motion.p variants={staggerText} className="font-sans text-[10px] font-light text-gray-500 mb-4 tracking-[0.2em] uppercase">
          Tại
        </motion.p>

        <motion.p variants={staggerText} className="font-serif text-lg tracking-[0.15em] text-wedding-text mb-12">
          GIA ĐÌNH NHÀ TRAI
        </motion.p>

        <motion.p variants={staggerText} className="font-sans text-[9px] tracking-[0.2em] text-wine-red uppercase font-semibold">
          Rất hân hạnh được đón tiếp!
        </motion.p>
      </motion.div>
    </section>
  );
}
