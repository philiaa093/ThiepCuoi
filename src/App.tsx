import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import InvitationGate from './components/InvitationGate';
import Hero from './components/Hero';
import Family from './components/Family';
import WeddingTimeline from './components/WeddingTimeline';
import OurMoments from './components/OurMoments';
import RSVP from './components/RSVP';
import ThankYou from './components/ThankYou';
import MusicButton from './components/MusicButton';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMusicPlaying(true);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#801323] flex justify-center selection:bg-white selection:text-[#801323]">
        <div className="w-full max-w-[430px] bg-[#801323] shadow-2xl relative min-h-screen overflow-x-hidden">
          
          {!isOpen && <InvitationGate onOpen={handleOpen} />}
          
          <div className={`w-full ${!isOpen ? 'h-screen overflow-hidden' : ''}`}>
            <MusicButton isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying} />
            <Hero />
            <Family />
            <WeddingTimeline />
            <OurMoments />
            <RSVP />
            <ThankYou />
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
