import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/animations';

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="bg-ivory py-32 px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-md mx-auto text-center"
      >
        <motion.h2 variants={fadeUp} className="font-serif text-3xl tracking-widest text-wine-dark mb-6 uppercase">Xác Nhận Tham Dự</motion.h2>
        <motion.p variants={fadeUp} className="font-sans text-xs text-gray-500 mb-12 leading-relaxed max-w-[280px] mx-auto italic tracking-wider">
          "Sự hiện diện của bạn<br/>
          là niềm vui của chúng mình."
        </motion.p>

        <motion.form variants={fadeUp} className="text-left space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-wedding-text/70 mb-2">Họ và tên</label>
            <input 
              type="text" 
              required
              className="w-full border-b border-wine-red/20 bg-transparent py-2 focus:outline-none focus:border-wine-red transition-colors text-sm font-sans"
              placeholder="Nhập tên của bạn..."
            />
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-wedding-text/70 mb-4">Bạn sẽ tham dự chứ?</label>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4">
                  <input type="radio" name="attendance" value="yes" className="peer appearance-none w-4 h-4 border border-wine-red/50 rounded-full checked:border-wine-red transition-colors cursor-pointer" defaultChecked />
                  <div className="absolute w-2 h-2 rounded-full bg-wine-red scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="font-sans text-sm text-gray-700 group-hover:text-wine-dark transition-colors">Chắc chắn rồi!</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4">
                  <input type="radio" name="attendance" value="no" className="peer appearance-none w-4 h-4 border border-wine-red/50 rounded-full checked:border-wine-red transition-colors cursor-pointer" />
                  <div className="absolute w-2 h-2 rounded-full bg-wine-red scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="font-sans text-sm text-gray-700 group-hover:text-wine-dark transition-colors">Rất tiếc, tôi không thể tham dự.</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-wedding-text/70 mb-4">Bạn tham dự tiệc:</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4">
                  <input type="radio" name="party" value="groom" className="peer appearance-none w-4 h-4 border border-wine-red/50 rounded-full checked:border-wine-red transition-colors cursor-pointer" defaultChecked />
                  <div className="absolute w-2 h-2 rounded-full bg-wine-red scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="font-sans text-sm text-gray-700">Nhà trai</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4">
                  <input type="radio" name="party" value="bride" className="peer appearance-none w-4 h-4 border border-wine-red/50 rounded-full checked:border-wine-red transition-colors cursor-pointer" />
                  <div className="absolute w-2 h-2 rounded-full bg-wine-red scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="font-sans text-sm text-gray-700">Nhà gái</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-wedding-text/70 mb-2">Số người tham dự</label>
            <select className="w-full border-b border-wine-red/20 bg-transparent py-2 focus:outline-none focus:border-wine-red transition-colors text-sm font-sans cursor-pointer">
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
              <option value="4">4 người</option>
            </select>
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-wedding-text/70 mb-2">Lời chúc tới cô dâu chú rể</label>
            <textarea 
              rows={2}
              className="w-full border-b border-wine-red/20 bg-transparent py-2 focus:outline-none focus:border-wine-red transition-colors resize-none text-sm font-sans"
              placeholder="Nhập lời chúc..."
            ></textarea>
          </div>

          <div className="pt-8 h-16">
            <AnimatePresence mode="wait">
              {!isSubmitting && !isSuccess && (
                <motion.button 
                  key="submit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  type="submit"
                  className="w-full bg-wine-red text-ivory py-4 rounded-sm font-sans tracking-[0.2em] text-xs uppercase hover:bg-wine-dark transition-colors shadow-lg active:scale-[0.98]"
                >
                  Gửi Xác Nhận
                </motion.button>
              )}
              {isSubmitting && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center text-wine-red"
                >
                  <div className="w-6 h-6 border-2 border-wine-red/20 border-t-wine-red rounded-full animate-spin"></div>
                </motion.div>
              )}
              {isSuccess && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex items-center justify-center text-wine-dark font-sans text-xs tracking-[0.2em] uppercase"
                >
                  Cảm ơn bạn!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
