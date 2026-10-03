import { wedding } from '../data/wedding';
import { FlowerOrnament } from './Decorations';

// Helper to format date "DD/MM/YYYY" into components
const parseDate = (dateStr: string) => {
  const parts = dateStr.split('/');
  return {
    day: parts[0] || "14",
    month: parts[1] || "10",
    year: parts[2] || "2026"
  };
};

export default function WeddingTimeline() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto relative flex flex-col space-y-12">
        <FlowerOrnament className="absolute -top-10 -left-6 opacity-30 w-12 h-12" />
        
        {/* Event 1 (Lễ Thành Hôn): enters purely with page scroll as observed in MOTION_SPEC.md */}
        <div className="border border-white/20 p-8 text-center relative bg-[#801323]">
          {/* Corner borders */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/60"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/60"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/60"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/60"></div>

          <h3 className="font-serif text-[22px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">{wedding.events[2].title}</h3>
          <p className="font-sans text-[10px] tracking-widest text-white/90 uppercase mb-6">
            Vào lúc {wedding.events[2].time}
          </p>
          
          {/* Date format matching video */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="font-serif text-[10px] uppercase text-white tracking-widest">Tháng</span>
              <span className="font-serif text-sm uppercase text-white tracking-widest">{parseDate(wedding.events[2].date).month}</span>
            </div>
            
            <div className="font-serif text-5xl text-white">
              {parseDate(wedding.events[2].date).day}
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-[10px] uppercase text-white tracking-widest">Năm</span>
              <span className="font-serif text-sm uppercase text-white tracking-widest">{parseDate(wedding.events[2].date).year}</span>
            </div>
          </div>
          
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/80 mb-2">TẠI</p>
          <p className="font-serif text-sm text-white mb-8 tracking-widest uppercase">{wedding.events[2].venue}</p>
          
          <a 
            href={wedding.maps.groom}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#801323] transition-colors"
          >
            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            XEM BẢN ĐỒ
          </a>
        </div>

        {/* Event 2 (Tiệc Nhà Gái / Bữa Cơm Thân Mật) */}
        <div className="border border-white/20 p-8 text-center relative bg-[#801323]">
          {/* Corner borders */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/60"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/60"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/60"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/60"></div>

          <FlowerOrnament className="absolute -bottom-6 -right-6 opacity-40 w-16 h-16" />

          <h3 className="font-serif text-[22px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2">{wedding.events[1].title}</h3>
          <p className="font-sans text-[10px] tracking-widest text-white/90 uppercase mb-6">
            Vào lúc {wedding.events[1].time}
          </p>
          
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="font-serif text-[10px] uppercase text-white tracking-widest">Tháng</span>
              <span className="font-serif text-sm uppercase text-white tracking-widest">{parseDate(wedding.events[1].date).month}</span>
            </div>
            
            <div className="font-serif text-5xl text-white">
              {parseDate(wedding.events[1].date).day}
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-[10px] uppercase text-white tracking-widest">Năm</span>
              <span className="font-serif text-sm uppercase text-white tracking-widest">{parseDate(wedding.events[1].date).year}</span>
            </div>
          </div>
          
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/80 mb-2">TẠI</p>
          <p className="font-serif text-sm text-white mb-8 tracking-widest uppercase">{wedding.events[1].venue}</p>
          
          <a 
            href={wedding.maps.bride}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#801323] transition-colors"
          >
            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            XEM BẢN ĐỒ
          </a>
        </div>
      </div>
    </section>
  );
}
