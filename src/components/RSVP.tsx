import { motion } from 'framer-motion';

export default function RSVP() {
  return (
    <section className="bg-wedding-white py-24 px-6 border-t border-wine-dark/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-serif text-3xl tracking-widest text-wine-red mb-4">XÁC NHẬN THAM DỰ</h2>
        <p className="font-sans text-sm text-gray-600 mb-10 leading-relaxed max-w-[280px] mx-auto italic">
          "Sự hiện diện của bạn<br/>
          là niềm vui của chúng mình."
        </p>

        <form className="text-left space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã xác nhận!'); }}>
          <div>
            <label className="block font-sans text-sm tracking-wider text-wedding-text mb-2">Họ và tên</label>
            <input 
              type="text" 
              required
              className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-wine-red transition-colors"
              placeholder="Nhập tên của bạn..."
            />
          </div>

          <div>
            <label className="block font-sans text-sm tracking-wider text-wedding-text mb-3">Bạn sẽ tham dự chứ?</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="attendance" value="yes" className="text-wine-red focus:ring-wine-red" defaultChecked />
                <span className="font-sans text-sm">Chắc chắn rồi!</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="attendance" value="no" className="text-wine-red focus:ring-wine-red" />
                <span className="font-sans text-sm">Rất tiếc, tôi không thể tham dự.</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-sans text-sm tracking-wider text-wedding-text mb-3">Bạn tham dự tiệc:</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="party" value="groom" className="text-wine-red focus:ring-wine-red" defaultChecked />
                <span className="font-sans text-sm">Nhà trai</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="party" value="bride" className="text-wine-red focus:ring-wine-red" />
                <span className="font-sans text-sm">Nhà gái</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-sans text-sm tracking-wider text-wedding-text mb-2">Số người tham dự</label>
            <select className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-wine-red transition-colors">
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
              <option value="4">4 người</option>
            </select>
          </div>

          <div>
            <label className="block font-sans text-sm tracking-wider text-wedding-text mb-2">Lời chúc tới cô dâu chú rể</label>
            <textarea 
              rows={3}
              className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-wine-red transition-colors resize-none"
              placeholder="Nhập lời chúc..."
            ></textarea>
          </div>

          <div className="pt-4 flex justify-center">
            <button 
              type="submit"
              className="bg-wine-red text-ivory px-10 py-3 rounded-full font-serif tracking-widest text-sm hover:bg-wine-dark transition-colors shadow-md w-full"
            >
              GỬI XÁC NHẬN
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
