import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../data/wedding';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiftModal({ isOpen, onClose }: GiftModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-ivory w-full max-w-sm rounded-sm shadow-2xl relative border border-wine-dark/20 z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-wine-red/50 hover:text-wine-red transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center pt-12">
              <h2 className="font-serif text-xl tracking-[0.2em] text-wine-dark mb-10">HỘP MỪNG CƯỚI</h2>
              
              <div className="space-y-8">
                {/* Chú rể */}
                <div className="relative pt-6">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory px-4 text-wine-red font-sans text-[10px] tracking-widest uppercase">
                    Nhà Trai
                  </div>
                  <div className="border border-wine-red/10 p-6 pt-8">
                    <h3 className="font-serif text-lg mb-4 text-wedding-text">{wedding.groom.name.toUpperCase()}</h3>
                    {wedding.bank.groom ? (
                      <p className="text-sm font-sans">Thông tin ngân hàng chú rể...</p>
                    ) : (
                      <p className="font-sans text-[10px] text-gray-400 italic tracking-widest uppercase">Thông tin sẽ được cập nhật</p>
                    )}
                  </div>
                </div>

                {/* Cô dâu */}
                <div className="relative pt-6">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory px-4 text-wine-red font-sans text-[10px] tracking-widest uppercase">
                    Nhà Gái
                  </div>
                  <div className="border border-wine-red/10 p-6 pt-8">
                    <h3 className="font-serif text-lg mb-4 text-wedding-text">{wedding.bride.name.toUpperCase()}</h3>
                    {wedding.bank.bride ? (
                      <p className="text-sm font-sans">Thông tin ngân hàng cô dâu...</p>
                    ) : (
                      <p className="font-sans text-[10px] text-gray-400 italic tracking-widest uppercase">Thông tin sẽ được cập nhật</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                 <button 
                  onClick={onClose}
                  className="bg-wine-red text-ivory px-10 py-3 rounded-full font-sans tracking-widest text-xs uppercase hover:bg-wine-dark transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
