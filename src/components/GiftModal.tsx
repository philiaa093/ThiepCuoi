import { X } from 'lucide-react';
import { wedding } from '../data/wedding';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiftModal({ isOpen, onClose }: GiftModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="bg-ivory w-full max-w-sm rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative border-4 border-wine-dark/10">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-wedding-white rounded-full text-wine-red hover:bg-wine-red hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 text-center pt-12">
          <h2 className="font-serif text-2xl tracking-widest text-wine-red mb-8">HỘP MỪNG CƯỚI</h2>
          
          <div className="space-y-6">
            {/* Chú rể */}
            <div className="bg-wedding-white p-6 border border-wine-red/20 shadow-sm rounded-sm relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory px-2 text-wine-dark font-serif text-sm tracking-widest">
                CHÚ RỂ
              </div>
              <h3 className="font-serif text-lg mb-2">{wedding.groom.name.toUpperCase()}</h3>
              {wedding.bank.groom ? (
                <p className="text-sm">Thông tin ngân hàng chú rể...</p>
              ) : (
                <p className="font-sans text-sm text-gray-500 italic">Thông tin sẽ được cập nhật.</p>
              )}
            </div>

            {/* Cô dâu */}
            <div className="bg-wedding-white p-6 border border-wine-red/20 shadow-sm rounded-sm relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ivory px-2 text-wine-dark font-serif text-sm tracking-widest">
                CÔ DÂU
              </div>
              <h3 className="font-serif text-lg mb-2">{wedding.bride.name.toUpperCase()}</h3>
              {wedding.bank.bride ? (
                <p className="text-sm">Thông tin ngân hàng cô dâu...</p>
              ) : (
                <p className="font-sans text-sm text-gray-500 italic">Thông tin sẽ được cập nhật.</p>
              )}
            </div>
          </div>

          <div className="mt-8">
             <button 
              onClick={onClose}
              className="bg-wine-red text-ivory px-8 py-2 rounded-full font-sans tracking-widest text-xs hover:bg-wine-dark transition-colors"
            >
              ĐÓNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
