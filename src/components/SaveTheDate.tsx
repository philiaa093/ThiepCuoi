import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { imageReveal, fadeUp, staggerContainer } from '../lib/animations';

export default function SaveTheDate() {
  const renderCalendar = () => {
    const daysInMonth = 31;
    const startDay = 4;
    const days = [];
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    const calendarHeader = (
      <div className="grid grid-cols-7 gap-2 mb-4 w-full max-w-[260px] text-[10px] tracking-widest uppercase font-sans text-wine-dark/70 mx-auto">
        {weekDays.map((d, i) => <div key={i} className="text-center">{d}</div>)}
      </div>
    );

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isWeddingDay = i === 15;
      days.push(
        <div key={i} className="text-center relative flex justify-center items-center h-8">
          {isWeddingDay ? (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="absolute w-8 h-8 flex items-center justify-center z-10"
            >
              {/* Heart Outline Animation */}
              <svg viewBox="0 0 24 24" className="w-full h-full text-wine-red absolute" fill="none" stroke="currentColor" strokeWidth="1.5">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                />
              </svg>
              <span className="text-wine-red font-serif font-bold text-sm z-10">{i}</span>
            </motion.div>
          ) : (
            <span className="text-wedding-text text-sm font-serif">{i}</span>
          )}
        </div>
      );
    }

    return (
      <motion.div variants={fadeUp} className="w-full flex flex-col items-center mt-12">
        <h3 className="font-serif text-sm tracking-[0.2em] text-wine-red mb-6 uppercase">Tháng 10, 2026</h3>
        {calendarHeader}
        <div className="grid grid-cols-7 gap-x-2 gap-y-2 w-full max-w-[260px] mx-auto">
          {days}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-ivory py-24 px-6 flex flex-col items-center relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-sm flex flex-col items-center"
      >
        <motion.div variants={imageReveal} className="w-full h-[400px] mb-12 overflow-hidden shadow-2xl">
          <img 
            src={wedding.photos.photo2} 
            alt="Couple" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.h2 variants={fadeUp} className="font-handwriting text-5xl text-wine-dark mb-4">Save the Date</motion.h2>
        <motion.h3 variants={fadeUp} className="font-serif text-2xl tracking-widest text-wedding-text mb-6">
          {wedding.groom.name} & {wedding.bride.name}
        </motion.h3>
        
        {renderCalendar()}
      </motion.div>
    </section>
  );
}
