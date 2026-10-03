import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date(wedding.mainDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { timeLeft, difference };
  };

  const [{ timeLeft, difference }, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const pad = (num: number, digits = 2) => num.toString().padStart(digits, '0');

  return (
    <section className="bg-wine-dark text-ivory py-16 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={wedding.photos.photo1} alt="bg" className="w-full h-full object-cover blur-sm" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="font-serif text-2xl tracking-widest mb-10">ĐẾM NGƯỢC<br/>ĐẾN NGÀY CHUNG ĐÔI</h2>

        {difference > 0 ? (
          <div className="flex justify-center items-center space-x-4 font-serif">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 w-16">{pad(timeLeft.days, 3)}</span>
              <span className="text-xs tracking-widest text-wedding-gold">NGÀY</span>
            </div>
            <span className="text-2xl pb-6 text-wedding-gold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 w-12">{pad(timeLeft.hours)}</span>
              <span className="text-xs tracking-widest text-wedding-gold">GIỜ</span>
            </div>
            <span className="text-2xl pb-6 text-wedding-gold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 w-12">{pad(timeLeft.minutes)}</span>
              <span className="text-xs tracking-widest text-wedding-gold">PHÚT</span>
            </div>
            <span className="text-2xl pb-6 text-wedding-gold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 w-12">{pad(timeLeft.seconds)}</span>
              <span className="text-xs tracking-widest text-wedding-gold">GIÂY</span>
            </div>
          </div>
        ) : (
          <div className="font-serif text-3xl text-wedding-gold mt-4">
            Hôm nay là ngày của chúng mình.
          </div>
        )}
      </motion.div>
    </section>
  );
}
