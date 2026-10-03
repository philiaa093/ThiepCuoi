import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { useEffect, useState } from 'react';
import { fadeUp, staggerContainer, staggerText } from '../lib/animations';

export default function Invitation() {
  const [guestName, setGuestName] = useState('Bạn và gia đình');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest');
    if (guest) {
      setGuestName(guest);
    }
  }, []);

  return (
    <section className="bg-wedding-white py-32 px-8 flex justify-center text-center relative overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-sm relative z-10"
      >
        <motion.div variants={fadeUp} className="text-wine-red text-5xl mb-12 font-serif opacity-90">囍</motion.div>
        
        <motion.p variants={staggerText} className="font-sans text-[10px] tracking-[0.3em] uppercase text-wine-dark mb-8">
          Trân trọng kính mời
        </motion.p>
        
        <motion.h2 variants={staggerText} className="font-handwriting text-4xl md:text-5xl text-wedding-text mb-12 px-4 leading-tight">
          {guestName}
        </motion.h2>
        
        <motion.p variants={staggerText} className="font-sans text-sm font-light leading-loose text-gray-600 mb-10">
          Tới dự bữa cơm thân mật<br/>
          chung vui mừng
        </motion.p>

        <motion.h3 variants={staggerText} className="font-serif text-2xl tracking-[0.2em] text-wine-red mb-8">
          LỄ THÀNH HÔN
        </motion.h3>

        <motion.p variants={staggerText} className="font-sans text-sm font-light text-gray-600 mb-8">
          của chúng tôi
        </motion.p>

        <motion.div variants={staggerText} className="font-serif text-2xl text-wedding-text tracking-widest leading-relaxed">
          <p>{wedding.groom.name.toUpperCase()}</p>
          <p className="text-wine-red text-sm my-3 italic">&</p>
          <p>{wedding.bride.name.toUpperCase()}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
