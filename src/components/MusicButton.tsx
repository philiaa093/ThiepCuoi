import { useEffect, useRef } from 'react';
import { Music, Play } from 'lucide-react';
import { wedding } from '../data/wedding';

export default function MusicButton({ isPlaying, setIsPlaying }: { isPlaying: boolean, setIsPlaying: (val: boolean) => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(wedding.music);
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#801323] border border-[#B59762] rounded-full shadow-lg flex items-center justify-center text-[#B59762] hover:scale-105 transition-transform ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}
    >
      {isPlaying ? (
        <Music className="w-5 h-5" />
      ) : (
        <Play className="w-5 h-5 ml-1" />
      )}
    </button>
  );
}
