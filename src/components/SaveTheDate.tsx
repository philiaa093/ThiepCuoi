import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function SaveTheDate() {
  const renderCalendar = () => {
    // October 2026 starts on Thursday
    const daysInMonth = 31;
    const startDay = 4; // 0 = Sun, 1 = Mon, ..., 4 = Thu
    const days = [];

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    // Header
    const calendarHeader = (
      <div className="grid grid-cols-7 gap-2 mb-2 w-full max-w-[250px] text-xs font-serif text-wine-dark mx-auto">
        {weekDays.map((d, i) => <div key={i} className="text-center font-bold">{d}</div>)}
      </div>
    );

    // Empty spots
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center"></div>);
    }

    // Days
    for (let i = 1; i <= daysInMonth; i++) {
      const isWeddingDay = i === 15;
      days.push(
        <div key={i} className="text-center relative flex justify-center items-center h-8">
          {isWeddingDay ? (
            <div className="bg-wine-red text-ivory w-7 h-7 rounded-full flex items-center justify-center font-bold relative z-10 shadow-md">
              {i}
            </div>
          ) : (
            <span className="text-wedding-text text-sm">{i}</span>
          )}
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col items-center">
        <h3 className="font-serif text-lg text-wine-red mb-4">THÁNG 10, 2026</h3>
        {calendarHeader}
        <div className="grid grid-cols-7 gap-x-2 gap-y-1 w-full max-w-[250px] mx-auto">
          {days}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-ivory py-20 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        <div className="w-full h-80 mb-12 overflow-hidden shadow-lg border-4 border-white">
          <img 
            src={wedding.photos.photo2} 
            alt="Couple" 
            className="w-full h-full object-cover object-center grayscale-[10%]"
          />
        </div>

        <h2 className="font-handwriting text-4xl text-wine-red mb-2">Save the Date</h2>
        <h3 className="font-serif text-2xl tracking-widest text-wedding-text mb-4">
          {wedding.groom.name} & {wedding.bride.name}
        </h3>
        
        <div className="w-16 h-[1px] bg-wine-red mb-10"></div>
        
        {renderCalendar()}
      </motion.div>
    </section>
  );
}
