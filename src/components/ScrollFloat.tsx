import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollFloatProps {
  children: React.ReactNode;
  direction?: 'up' | 'down';
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({ children, direction = 'up' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 50 : -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};