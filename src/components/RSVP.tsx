export default function RSVP() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        {/* RSVP text and form enter purely with document scroll per MOTION_SPEC.md */}
        <p className="font-sans text-xs uppercase tracking-widest text-white/90 mb-10 leading-relaxed">
          Hãy xác nhận sự có mặt của quý khách để gia đình chúng tôi chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!
        </p>

        <form className="space-y-4 mb-8">
          <input 
            type="text" 
            placeholder="Tên của bạn là gì?" 
            className="w-full bg-transparent border border-white/50 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:border-white text-center font-serif text-lg"
          />
          <input 
            type="text" 
            placeholder="Bạn là gì của Dâu Rể?" 
            className="w-full bg-transparent border border-white/50 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:border-white text-center font-serif text-lg"
          />
          <input 
            type="text" 
            placeholder="Gửi lời chúc đến Dâu Rể" 
            className="w-full bg-transparent border border-white/50 rounded-full py-3 px-6 text-white placeholder:text-white/60 focus:outline-none focus:border-white text-center font-serif text-lg"
          />
          <select 
            className="w-full bg-transparent border border-white/50 rounded-full py-3 px-6 text-white text-center font-serif text-lg focus:outline-none appearance-none"
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1em top 50%', backgroundSize: '.65em auto' }}
          >
            <option value="" className="text-black">Bạn có tham dự không?</option>
            <option value="yes" className="text-black">Có, chắc chắn rồi</option>
            <option value="no" className="text-black">Tiếc quá, tôi không thể đến</option>
          </select>

          <button 
            type="button" 
            className="w-full bg-white text-[#801323] font-serif font-bold tracking-widest uppercase py-4 rounded-full mt-6 hover:bg-white/90 transition-colors shadow-lg"
          >
            Gửi lời chúc & xác nhận
          </button>
        </form>
      </div>
    </section>
  );
}
