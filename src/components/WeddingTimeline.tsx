import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { wedding } from '../data/wedding';
import { fadeUp } from '../lib/animations';

export default function WeddingTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="bg-ivory py-24 px-6 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-md mx-auto"
      >
        <motion.h2 variants={fadeUp} className="font-sans text-[10px] tracking-[0.4em] uppercase text-center text-wine-red mb-20">Chương Trình</motion.h2>

        <div className="relative pl-8 md:pl-16">
          {/* Animated Line */}
          <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-wine-red/10">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-wine-red origin-top will-change-transform"
              style={{ scaleY }}
            ></motion.div>
          </div>

          {wedding.events.map((event, index) => {
            const isMainEvent = index === 2;
            const number = `0${index + 1}`;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`mb-16 relative ${isMainEvent ? 'mt-8' : ''}`}
              >
                {/* Large Background Number */}
                <div className="absolute -left-12 -top-8 text-[80px] font-serif text-wine-red opacity-[0.03] pointer-events-none select-none">
                  {number}
                </div>

                {/* Dot */}
                <div className="absolute -left-[35.5px] md:-left-[67.5px] top-2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={`rounded-full border-2 border-ivory ${isMainEvent ? 'w-4 h-4 bg-wine-red -translate-x-[2px]' : 'w-3 h-3 bg-wine-red/40'}`}
                  ></motion.div>
                </div>
                
                <div className={isMainEvent ? "relative" : ""}>
                  <h3 className={`font-serif tracking-[0.15em] mb-3 ${isMainEvent ? 'text-2xl text-wine-red' : 'text-lg text-wedding-text'}`}>
                    {event.title.toUpperCase()}
                  </h3>
                  
                  <div className="font-sans text-sm text-gray-600 leading-relaxed space-y-1">
                    <p className={`font-medium tracking-widest ${isMainEvent ? 'text-wine-dark text-base' : ''}`}>{event.time}</p>
                    {isMainEvent && <p className="uppercase tracking-[0.2em] font-light text-[10px] mt-2 text-wine-red/70 mb-1">THỨ NĂM</p>}
                    <p className={isMainEvent ? 'font-serif text-lg text-wedding-text' : 'font-light'}>{event.date}</p>
                    <p className="text-[11px] text-gray-400 italic">Tức {event.lunar}</p>
                    <div className="w-8 h-px bg-wine-red/20 my-3"></div>
                    <p className="uppercase tracking-widest text-[10px] font-medium text-wine-dark">{event.venue}</p>
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
