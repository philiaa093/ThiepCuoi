import { motion } from 'framer-motion';

export function Divider({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-full flex justify-center items-center my-6 ${className}`}
    >
      <svg width="200" height="15" viewBox="0 0 200 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5C25 7.5 25 1 50 1C75 1 75 14 100 14C125 14 125 1 150 1C175 1 175 7.5 200 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="100" cy="7.5" r="3" fill="currentColor"/>
      </svg>
    </motion.div>
  );
}

export function FlowerOrnament({ className = "", delay = 0 }: { className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      className={`text-white/60 ${className}`}
    >
      <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C50 10 65 30 50 50C35 30 50 10 50 10Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M50 90C50 90 35 70 50 50C65 70 50 90 50 90Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 50C10 50 30 35 50 50C30 65 10 50 10 50Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M90 50C90 50 70 65 50 50C70 35 90 50 90 50Z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
      </svg>
    </motion.div>
  );
}
