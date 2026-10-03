import { useState, useEffect } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import InvitationGate from './components/InvitationGate';
import Hero from './components/Hero';
import SaveTheDate from './components/SaveTheDate';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Family from './components/Family';
import Invitation from './components/Invitation';
import WeddingTimeline from './components/WeddingTimeline';
import PhotoSection from './components/PhotoSection';
import InvitationCard from './components/InvitationCard';
import OurMoments from './components/OurMoments';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import GiftModal from './components/GiftModal';
import MusicButton from './components/MusicButton';
import ThankYou from './components/ThankYou';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMusicPlaying(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      // Cuộn lên đầu
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#f3efe8] flex justify-center selection:bg-wine-red selection:text-white">
        <div className="w-full max-w-[430px] bg-wedding-white shadow-2xl relative min-h-screen overflow-x-hidden">
          
          <AnimatePresence mode="wait">
            {!isOpen && (
              <motion.div 
                key="gate"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-50"
              >
                <InvitationGate onOpen={handleOpen} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-full"
            >
              <MusicButton isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying} />
              
              <Hero />
              <SaveTheDate />
              <Countdown />
              <Couple />
              <Family />
              <Invitation />
              <WeddingTimeline />
              <PhotoSection />
              <InvitationCard />
              <OurMoments />
              <Venue />
              <RSVP />
              
              <div className="py-24 bg-ivory flex justify-center items-center border-t border-wine-red/5">
                <button 
                  onClick={() => setIsGiftModalOpen(true)}
                  className="group relative px-10 py-4 bg-transparent border border-wine-red text-wine-red font-sans tracking-[0.2em] text-[10px] uppercase transition-all hover:text-wedding-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-wine-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10">Gửi Quà Mừng Cưới</span>
                </button>
              </div>

              <ThankYou />

              <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
            </motion.div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
