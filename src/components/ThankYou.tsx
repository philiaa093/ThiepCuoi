import { wedding } from '../data/wedding';

export default function ThankYou() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* FINAL_SECTION: static closing couple photo, scrolls with document per MOTION_SPEC.md */}
        <div className="w-full max-w-sm aspect-[4/3] mb-8 bg-[#801323] rounded-md overflow-hidden shadow-2xl">
          <img 
            src={wedding.photos.photo2} 
            alt="Thank You" 
            className="w-full h-full object-cover"
            style={{ objectPosition: wedding.photos.position.thankYou }}
            loading="lazy" 
            decoding="async"
          />
        </div>

        <h2 className="font-script text-6xl text-white mb-6">
          Lời cảm ơn!
        </h2>

        <p className="font-serif text-sm text-white/90 leading-relaxed mb-16">
          Cảm ơn quý khách đã dành tình cảm cho gia đình chúng tôi. Sự hiện diện của quý khách chính là món quà vô giá, là niềm vinh hạnh lớn nhất của gia đình chúng tôi. Xin chân thành cảm ơn và kính chúc quý khách sức khỏe, hạnh phúc!
        </p>

        <div className="text-[10px] uppercase tracking-widest text-white/60 mb-8">
          Thiệp cưới online Hữu Thuận & Thu Trang
        </div>
      </div>
    </section>
  );
}
