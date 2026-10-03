import type { Variants, Transition } from 'framer-motion';

const transition: Transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
const slowTransition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition }
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export const staggerText: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(10% 10% 10% 10%)', scale: 1.05 },
  visible: { 
    opacity: 1, 
    clipPath: 'inset(0% 0% 0% 0%)', 
    scale: 1,
    transition: slowTransition
  }
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition }
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition }
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition }
};

export const borderReveal: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }
};
