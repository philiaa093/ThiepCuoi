import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';

export default function OurMoments() {
  const animations = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8 }
  };

  return (
    <section className="bg-wedding-white py-24 px-6">
      <motion.div {...animations} className="text-center mb-12">
        <h2 className="font-handwriting text-4xl text-wine-red mb-2">Our Moments</h2>
        <p className="font-serif tracking-widest text-wedding-text">KHOẢNH KHẮC ĐÁNG NHỚ</p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex gap-4 h-64">
          <motion.div {...animations} className="flex-1 overflow-hidden">
            <img 
              src={wedding.photos.photo1} 
              alt="Moment 1" 
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </motion.div>
          <motion.div {...animations} transition={{ delay: 0.2, duration: 0.8 }} className="flex-1 overflow-hidden">
            <img 
              src={wedding.photos.photo2} 
              alt="Moment 2" 
              className="w-full h-full object-cover object-[80%_30%] grayscale-[30%]"
            />
          </motion.div>
        </div>

        {/* Row 2 - Full width */}
        <motion.div {...animations} transition={{ delay: 0.1, duration: 0.8 }} className="h-48 overflow-hidden">
          <img 
            src={wedding.photos.photo1} 
            alt="Moment 3" 
            className="w-full h-full object-cover object-[50%_10%]"
          />
        </motion.div>

        {/* Row 3 */}
        <div className="flex gap-4 h-72">
          <motion.div {...animations} className="w-2/3 overflow-hidden">
            <img 
              src={wedding.photos.photo2} 
              alt="Moment 4" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <motion.div {...animations} transition={{ delay: 0.2, duration: 0.8 }} className="w-1/3 overflow-hidden">
            <img 
              src={wedding.photos.photo1} 
              alt="Moment 5" 
              className="w-full h-full object-cover object-[30%_10%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
