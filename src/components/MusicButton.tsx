import { useEffect, useRef } from 'react';
import { wedding } from '../data/wedding';

interface MusicButtonProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
}

export default function MusicButton({ isPlaying, setIsPlaying }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(wedding.music);
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.play().catch(e => {
        console.log('Audio autoplay prevented or play failed', e);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#801323] hover:scale-105 active:scale-95 transition-transform"
    >
      {isPlaying ? (
        // Playing music note icon (static orientation, no spin)
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" fill="currentColor" />
          <circle cx="18" cy="16" r="3" fill="currentColor" />
        </svg>
      ) : (
        // Muted music note with diagonal slash (matching reference frames 40-95, static)
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" fill="currentColor" />
          <circle cx="18" cy="16" r="3" fill="currentColor" />
          <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      )}
    </button>
  );
}
