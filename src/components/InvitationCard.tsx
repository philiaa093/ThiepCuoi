import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function InvitationCard() {
  return (
    <section className="bg-ivory py-24 px-6 flex justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm border-[6px] border-double border-wine-red/40 p-8 relative bg-wedding-white shadow-xl"
      >
        {/* Họa tiết góc */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-wine-red"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-wine-red"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-wine-red"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-wine-red"></div>

        <h2 className="font-serif text-2xl tracking-[0.2em] text-wine-red mb-10">LỄ THÀNH HÔN</h2>
        
        <div className="font-serif text-3xl text-wedding-text mb-10 leading-relaxed">
          <p>{wedding.groom.name.toUpperCase()}</p>
          <p className="text-xl text-wine-red my-1">&</p>
          <p>{wedding.bride.name.toUpperCase()}</p>
        </div>

        <p className="font-sans text-sm font-light text-gray-600 mb-4 tracking-widest uppercase">
          Hôn lễ được tổ chức<br/>vào hồi
        </p>

        <p className="font-serif text-3xl text-wine-red mb-4">08 GIỜ 45</p>
        
        <div className="font-sans text-sm font-medium tracking-widest text-wedding-text mb-2">
          THỨ NĂM<br/>
          NGÀY 15 THÁNG 10 NĂM 2026
        </div>
        
        <p className="font-sans text-xs italic text-gray-500 mb-8">
          Tức ngày 06 tháng 09 năm Bính Ngọ
        </p>

        <p className="font-sans text-sm font-light text-gray-600 mb-2 tracking-widest uppercase">
          Tại
        </p>

        <p className="font-serif text-xl tracking-widest text-wedding-text mb-10">
          GIA ĐÌNH NHÀ TRAI
        </p>

        <p className="font-serif text-sm tracking-widest text-wine-red uppercase font-semibold">
          Rất hân hạnh được đón tiếp!
        </p>
      </motion.div>
    </section>
  );
}
