import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function InvitationGate({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500); // Wait for animations to finish
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#54151D] min-h-screen overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: 'easeInOut' } }}
      >
        <div className="relative w-[90%] max-w-[350px] aspect-[3/4] flex items-center justify-center perspective-[1000px]">
          
          {/* Lưng phong bì */}
          <div className="absolute inset-0 bg-[#6a1a25] shadow-2xl rounded-md"></div>

          {/* Ruột thiệp */}
          <motion.div 
            initial={{ y: 20 }}
            animate={isOpening ? { y: -120, scale: 1.05, zIndex: 30 } : { y: 20 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: isOpening ? 0.3 : 0 }}
            className="absolute top-4 bottom-12 left-4 right-4 bg-ivory shadow-lg rounded-sm flex flex-col items-center justify-center px-6 text-center border-4 border-double border-wine-dark/10"
            style={{ zIndex: 10 }}
          >
            <div className="text-wine-red text-4xl mb-4 font-serif opacity-80">囍</div>
            <h2 className="font-serif text-lg tracking-[0.2em] text-wine-red mb-6">LỄ THÀNH HÔN</h2>
            <div className="text-center font-serif text-3xl text-wedding-text mb-6">
              <p>{wedding.groom.name}</p>
              <p className="text-xl my-1 text-wine-red">&</p>
              <p>{wedding.bride.name}</p>
            </div>
            <div className="font-sans text-xs tracking-widest text-wedding-text opacity-70">
              {wedding.mainDate.substring(8,10)} . {wedding.mainDate.substring(5,7)} . {wedding.mainDate.substring(0,4)}
            </div>
          </motion.div>

          {/* Nắp trên của phong bì */}
          <motion.div 
            initial={{ rotateX: 0 }}
            animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: 'top', zIndex: 20, clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#771E2A] drop-shadow-md rounded-t-md"
          ></motion.div>

          {/* Mặt trước của phong bì (Trái, Phải, Dưới) */}
          <div 
            className="absolute inset-0 bg-[#83202e] rounded-md pointer-events-none"
            style={{ 
              clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
              zIndex: 25
            }}
          ></div>

          {/* Nút bấm (Seal) */}
          {!isOpening && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              style={{ zIndex: 40 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ivory text-wine-red font-serif shadow-xl flex items-center justify-center uppercase tracking-widest text-[10px] border border-wine-red/20"
            >
              <div className="absolute inset-1 rounded-full border border-wine-red/30 border-dashed"></div>
              Mở
            </motion.button>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
