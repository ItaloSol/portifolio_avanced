import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingThemeToggleProps {
  isRecruiter: boolean;
  onToggle: () => void;
}

export const FloatingThemeToggle: React.FC<FloatingThemeToggleProps> = ({ isRecruiter, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`
        fixed bottom-6 right-6 z-50
        px-4 py-4 rounded-full shadow-xl
        flex items-center justify-center
        transition-all duration-300
        ${isRecruiter 
          ? 'bg-primary text-white hover:bg-primary-dark' 
          : 'bg-white text-background hover:bg-gray-100'
        }
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {isRecruiter ? (
        <Users className="w-6 h-6" />
      ) : (
        <Briefcase className="w-6 h-6" />
      )}
    </motion.button>
  );
};