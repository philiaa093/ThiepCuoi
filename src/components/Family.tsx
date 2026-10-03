import { wedding } from '../data/wedding';
import { Divider, FlowerOrnament } from './Decorations';

export default function Family() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto flex flex-col items-center text-center relative">
        <FlowerOrnament className="absolute -top-10 -right-6 opacity-30" />
        
        {/* Invitation text block: moves with page scroll */}
        <div className="mb-10 w-full">
          <h3 className="font-serif text-sm tracking-[0.2em] text-white uppercase mb-4">
            TRÂN TRỌNG KÍNH MỜI
          </h3>
          <p className="font-script text-5xl mb-4 text-white">Quý Khách</p>
          <p className="font-serif text-xs uppercase tracking-[0.2em] text-white/80 mb-6 leading-relaxed px-4">
            TỚI DỰ BỮA CƠM THÂN MẬT CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI
          </p>
          <p className="font-script text-[3.5rem] leading-none text-white">{wedding.groom.shortName}</p>
          <p className="font-script text-2xl text-white my-1">&</p>
          <p className="font-script text-[3.5rem] leading-none text-white">{wedding.bride.shortName}</p>
        </div>

        {/* Paired portraits (COUPLE_PAIR ~F238-278): enters with scroll, no fake slide/stagger */}
        <div className="grid grid-cols-2 gap-3 w-full mb-12">
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-[#801323]">
            <img 
              src={wedding.photos.photo2} 
              alt="Chú rể" 
              className="w-full h-full object-cover"
              style={{ objectPosition: wedding.photos.position.groom }}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-[#801323]">
            <img 
              src={wedding.photos.photo2} 
              alt="Cô dâu" 
              className="w-full h-full object-cover"
              style={{ objectPosition: wedding.photos.position.bride }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Family information */}
        <div className="flex flex-col w-full space-y-12 relative mt-2">
          <FlowerOrnament className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 w-12 h-12" />
          
          <div className="text-center w-full flex flex-col items-center">
            <h3 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">NHÀ GÁI</h3>
            <Divider className="text-white/40 mb-4 w-32" />
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest mb-1">{wedding.bride.father}</p>
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest">{wedding.bride.mother}</p>
          </div>
          
          <div className="text-center w-full flex flex-col items-center">
            <h3 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">NHÀ TRAI</h3>
            <Divider className="text-white/40 mb-4 w-32" />
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest mb-1">{wedding.groom.father}</p>
            <p className="font-serif text-sm text-white/90 uppercase tracking-widest">{wedding.groom.mother}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
