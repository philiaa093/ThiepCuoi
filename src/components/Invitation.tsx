import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { useEffect, useState } from 'react';

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
    <section className="bg-ivory py-24 px-8 flex justify-center text-center relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-wine-red opacity-50"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-wine-red opacity-50"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-wine-red opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-wine-red opacity-50"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full max-w-sm"
      >
        <div className="text-wine-red text-4xl mb-8 font-serif">囍</div>
        
        <p className="font-serif text-lg tracking-[0.15em] text-wine-red mb-8">TRÂN TRỌNG KÍNH MỜI</p>
        
        <h2 className="font-handwriting text-3xl md:text-4xl text-wedding-text mb-8 px-4">
          {guestName}
        </h2>
        
        <p className="font-sans text-sm font-light leading-loose text-wedding-text mb-8">
          Tới dự bữa cơm thân mật<br/>
          chung vui mừng
        </p>

        <h3 className="font-serif text-2xl tracking-[0.2em] text-wine-red mb-6">
          LỄ THÀNH HÔN
        </h3>

        <p className="font-sans text-sm font-light text-wedding-text mb-6">
          của chúng tôi
        </p>

        <div className="font-serif text-2xl text-wedding-text tracking-widest leading-relaxed">
          <p>{wedding.groom.name.toUpperCase()}</p>
          <p className="text-wine-red text-lg my-1">&</p>
          <p>{wedding.bride.name.toUpperCase()}</p>
        </div>
      </motion.div>
    </section>
  );
}
