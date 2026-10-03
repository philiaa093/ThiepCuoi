import { useEffect, useRef } from 'react';
import { Disc3, Pause } from 'lucide-react';
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
      className="fixed top-6 right-6 z-40 w-10 h-10 bg-ivory rounded-full shadow-lg flex items-center justify-center text-wine-red"
    >
      {isPlaying ? (
        <Disc3 className="w-6 h-6 animate-[spin_3s_linear_infinite]" />
      ) : (
        <Pause className="w-5 h-5" />
      )}
    </button>
  );
}
