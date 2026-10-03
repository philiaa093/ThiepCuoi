import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InvitationGateProps {
  onOpen: () => void;
}

// 48 frames at 30 FPS = 1.60 s. Fitted directly to empirical pixel data from opening_measurements.csv (MSE: 0.000062)
const REVEAL_DURATION = 1.60;
const REVEAL_EASE = [0.25, 0.0, 0.75, 0.75] as const;

export default function InvitationGate({ onOpen }: InvitationGateProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompleted(true);
      onOpen();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onOpen]);

  if (isCompleted) {
    return null;
  }

  return (
    <div 
      className="absolute inset-0 z-30 h-screen w-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* LEFT BURGUNDY CURTAIN */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-[#801323] will-change-transform"
        initial={{ x: '-2px' }}
        animate={{ x: '-100%' }}
        transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE }}
      >
        {/* White floral ornament attached to the right moving edge of the left curtain */}
        <motion.div
          className="absolute right-0 top-[48%] -translate-y-1/2 translate-x-[35%] z-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: REVEAL_DURATION, times: [0, 0.82, 1], ease: 'linear' }}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="drop-shadow-md">
            {/* Soft stem */}
            <path d="M6 34C14 30 24 28 32 26" stroke="#8A9A7E" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 36C18 34 22 30 26 27" stroke="#7A8A6E" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* White calla lily / orchid petals */}
            <path 
              d="M32 26C35 22 41 16 46 17C49 18 48 23 44 26C40 29 35 28 32 26Z" 
              fill="#FFFFFF" 
              stroke="#EDE8DF" 
              strokeWidth="0.8" 
            />
            <path 
              d="M31 27C34 29 40 33 44 32C47 31 46 26 42 24C38 22 34 25 31 27Z" 
              fill="#F9F7F2" 
              stroke="#EDE8DF" 
              strokeWidth="0.8" 
            />
            <path 
              d="M33 26C37 25 41 23 44 21C42 25 39 28 34 27" 
              stroke="#E2DCD2" 
              strokeWidth="0.8" 
            />
            
            {/* Golden pollen / center accent */}
            <path d="M36 24C38 23 40 22 41 22" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* RIGHT BURGUNDY CURTAIN */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#801323] will-change-transform"
        initial={{ x: '2px' }}
        animate={{ x: '100%' }}
        transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE }}
        onAnimationComplete={() => {
          setIsCompleted(true);
          onOpen();
        }}
      >
        {/* Wax seal attached to the left moving edge of the right curtain */}
        <motion.div
          className="absolute left-0 top-[48%] -translate-y-1/2 -translate-x-[45%] z-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: REVEAL_DURATION, times: [0, 0.88, 1], ease: 'linear' }}
        >
          <div className="relative w-14 h-14 flex items-center justify-center filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
            {/* Foliage / delicate branch extending from behind the seal */}
            <svg 
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none" 
              viewBox="0 0 32 32" 
              fill="none"
            >
              <path d="M2 16C10 15 18 12 26 8" stroke="#8A9A7E" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 14C14 11 17 10 20 10C19 13 16 14 12 14Z" fill="#8A9A7E" opacity="0.85" />
              <path d="M18 11C21 8 24 8 26 9C24 11 21 12 18 11Z" fill="#8A9A7E" opacity="0.85" />
              <path d="M6 16C12 17 20 19 28 22" stroke="#8A9A7E" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 18C17 20 20 21 21 23C18 23 15 21 14 18Z" fill="#8A9A7E" opacity="0.85" />
            </svg>

            {/* Organic wax seal stamp */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <defs>
                <radialGradient id="waxGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#96202E" />
                  <stop offset="50%" stopColor="#7B1422" />
                  <stop offset="90%" stopColor="#550B15" />
                  <stop offset="100%" stopColor="#3F060F" />
                </radialGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE082" />
                  <stop offset="40%" stopColor="#D4AF37" />
                  <stop offset="80%" stopColor="#AA8010" />
                  <stop offset="100%" stopColor="#7E5C00" />
                </linearGradient>
              </defs>

              {/* Organic stamped wax perimeter */}
              <path
                d="M28 3C33 2.5 38 4.5 42 8C46 11.5 49 16 50.5 21C52 26 51.5 31.5 49 36.5C46.5 41.5 43 45.5 38.5 48C34 50.5 28.5 51 23.5 49.5C18.5 48 14 45 10.5 41C7 37 4.5 32 4 27C3.5 22 5 17 8 12.5C11 8 16 4.5 21 3.5C23.5 3 25.5 3.2 28 3Z"
                fill="url(#waxGrad)"
              />
              
              {/* Inner pressed rim */}
              <circle 
                cx="28" 
                cy="28" 
                r="19" 
                stroke="#470810" 
                strokeWidth="1.5" 
                fill="#6B121D" 
                fillOpacity="0.4" 
              />
              <circle 
                cx="28" 
                cy="28" 
                r="17.5" 
                stroke="#A82837" 
                strokeWidth="0.8" 
                strokeOpacity="0.6" 
                fill="none" 
              />

              {/* Detailed golden butterfly emblem */}
              {/* Upper left wing */}
              <path
                d="M28 27C27 24 22 17 16 18C13 18.5 12 21 14 24C16 26.5 22 27.5 28 27Z"
                fill="url(#goldGrad)"
                stroke="#6B4D00"
                strokeWidth="0.4"
              />
              {/* Upper right wing */}
              <path
                d="M28 27C29 24 34 17 40 18C43 18.5 44 21 42 24C40 26.5 34 27.5 28 27Z"
                fill="url(#goldGrad)"
                stroke="#6B4D00"
                strokeWidth="0.4"
              />
              {/* Lower left wing */}
              <path
                d="M28 28C26 29 20 32 18 36C17 38 19 39 21 38C24 36.5 26.5 32 28 28Z"
                fill="url(#goldGrad)"
                stroke="#6B4D00"
                strokeWidth="0.4"
              />
              {/* Lower right wing */}
              <path
                d="M28 28C30 29 36 32 38 36C39 38 37 39 35 38C32 36.5 29.5 32 28 28Z"
                fill="url(#goldGrad)"
                stroke="#6B4D00"
                strokeWidth="0.4"
              />
              {/* Butterfly body and head */}
              <ellipse cx="28" cy="28" rx="1.2" ry="5" fill="#FFE082" stroke="#6B4D00" strokeWidth="0.4" />
              <circle cx="28" cy="22.5" r="1.1" fill="#FFE082" />
              {/* Antennae */}
              <path d="M28 22C27 19.5 25 18 24 18" stroke="#FFE082" strokeWidth="0.6" strokeLinecap="round" />
              <path d="M28 22C29 19.5 31 18 32 18" stroke="#FFE082" strokeWidth="0.6" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
