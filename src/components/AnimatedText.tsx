import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  type: 'split' | 'blur' | 'decrypt';
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, type, className = '' }) => {
  if (type === 'split') {
    return (
      <div className={className}>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    );
  }

  if (type === 'blur') {
    return (
      <motion.div
        className={className}
        initial={{ filter: 'blur(10px)', opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.div>
    );
  }

  // Decrypt effect
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.div>
  );
};