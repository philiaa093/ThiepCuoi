import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function WeddingTimeline() {
  return (
    <section className="bg-wedding-white py-20 px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <h2 className="font-serif text-3xl tracking-widest text-center text-wine-red mb-16">CHƯƠNG TRÌNH</h2>

        <div className="relative border-l border-wine-red/30 ml-4 md:ml-1/2">
          {wedding.events.map((event, index) => {
            const isMainEvent = index === 2;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-12 ml-8 relative"
              >
                {/* Dot */}
                <div className={`absolute -left-[41px] top-1 rounded-full border-4 border-wedding-white ${isMainEvent ? 'w-5 h-5 bg-wine-red -left-[43px]' : 'w-4 h-4 bg-wine-red/60'}`}></div>
                
                <div className={isMainEvent ? "bg-ivory p-6 shadow-lg border border-wine-red/20 -mt-4 rounded-sm" : ""}>
                  <h3 className={`font-serif tracking-widest mb-2 ${isMainEvent ? 'text-2xl text-wine-red' : 'text-xl text-wedding-text'}`}>
                    {event.title.toUpperCase()}
                  </h3>
                  
                  <div className="font-sans text-sm text-gray-700 leading-relaxed space-y-1">
                    <p className={`font-semibold ${isMainEvent ? 'text-wine-red text-base' : ''}`}>{event.time}</p>
                    {isMainEvent && <p className="uppercase tracking-widest font-medium text-xs mt-2 text-wine-red/80">THỨ NĂM</p>}
                    <p className={isMainEvent ? 'font-medium' : ''}>{event.date}</p>
                    <p className="text-xs text-gray-500 italic">Tức {event.lunar}</p>
                    <p className="pt-2 uppercase tracking-wider text-xs font-semibold text-wine-dark mt-2">{event.venue}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
