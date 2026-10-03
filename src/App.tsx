import { useState, useEffect } from 'react';
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
    }
  }, [isOpen]);

  return (
    <div className="relative min-h-screen bg-ivory flex justify-center">
      <div className="w-full max-w-[430px] bg-wedding-white shadow-2xl relative min-h-screen">
        {!isOpen && <InvitationGate onOpen={handleOpen} />}
        
        {isOpen && (
          <div className="animate-in fade-in duration-1000">
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
            
            <div className="py-16 bg-ivory flex justify-center items-center">
              <button 
                onClick={() => setIsGiftModalOpen(true)}
                className="bg-wine-red text-ivory px-8 py-3 rounded-full font-serif tracking-widest text-sm hover:bg-wine-dark transition-colors shadow-lg active:scale-95"
              >
                GỬI QUÀ MỪNG CƯỚI
              </button>
            </div>

            <ThankYou />

            <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
