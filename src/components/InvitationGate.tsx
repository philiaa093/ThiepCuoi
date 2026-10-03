import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

interface InvitationGateProps {
  onOpen: () => void;
}

export default function InvitationGate({ onOpen }: InvitationGateProps) {
  return (
    <div className="relative w-full h-full bg-[#801323] overflow-hidden cursor-pointer" onClick={onOpen}>
      <motion.div 
        className="absolute inset-0 z-10 flex items-center justify-center"
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 2 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative w-64 h-64 rounded-full border border-white/50 bg-[#801323] flex flex-col items-center justify-center p-6 shadow-2xl">
          {/* Ornaments inside the circle */}
          <div className="absolute top-4 w-full flex justify-center">
            <svg width="40" height="20" viewBox="0 0 100 50" fill="none" className="text-white/60">
              <path d="M50 40C50 40 20 20 50 0C80 20 50 40 50 40Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="absolute bottom-4 w-full flex justify-center rotate-180">
            <svg width="40" height="20" viewBox="0 0 100 50" fill="none" className="text-white/60">
              <path d="M50 40C50 40 20 20 50 0C80 20 50 40 50 40Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <h3 className="font-serif text-[10px] tracking-[0.2em] text-white/90 uppercase mt-4 mb-2">
            Save The Date
          </h3>
          
          <h2 className="font-serif text-5xl text-white mb-2">
            14.06
          </h2>
          
          <p className="font-serif text-sm tracking-widest text-white/90 mb-4 border-b border-white/30 pb-2">
            2026
          </p>
          
          <div className="font-script text-3xl text-white mb-2">
            {wedding.groom.shortName} & {wedding.bride.shortName}
          </div>
          
          <p className="font-sans text-[8px] tracking-[0.2em] text-white/70 uppercase">
            We're getting married
          </p>
          
          {/* Small instruction text below the circle */}
          <motion.div 
            animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-16 w-full text-center"
          >
            <p className="font-sans text-[10px] uppercase tracking-widest text-white/60">
              Nhấn để mở thiệp
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* The actual gate doors that slide apart */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#801323] border-r border-white/10"
        exit={{ x: '-100%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#801323] border-l border-white/10"
        exit={{ x: '100%' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}
