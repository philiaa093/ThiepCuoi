import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function InvitationGate({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-wine-red min-h-screen">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[85%] max-w-sm bg-ivory shadow-2xl rounded-sm overflow-hidden flex flex-col items-center py-12 px-6 relative border-4 border-wine-dark/20"
      >
        <div className="text-wine-red text-5xl mb-6 font-serif">囍</div>
        <h2 className="font-serif text-xl tracking-[0.2em] text-wine-red mb-8">LỄ THÀNH HÔN</h2>
        
        <div className="text-center font-serif text-4xl text-wedding-text mb-8 leading-tight">
          <p>{wedding.groom.name}</p>
          <p className="text-2xl my-2 text-wine-red">&</p>
          <p>{wedding.bride.name}</p>
        </div>

        <div className="font-sans text-sm tracking-[0.3em] text-wedding-text mb-12">
          {wedding.mainDate.substring(8,10)} . {wedding.mainDate.substring(5,7)} . {wedding.mainDate.substring(0,4)}
        </div>

        <button 
          onClick={onOpen}
          className="bg-wine-red text-ivory px-10 py-3 rounded-full font-serif tracking-widest text-sm hover:bg-wine-dark transition-colors shadow-lg active:scale-95"
        >
          MỞ THIỆP
        </button>
      </motion.div>
    </div>
  );
}
