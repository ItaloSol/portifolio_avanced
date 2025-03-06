import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isRecruiter: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isRecruiter, onToggle }) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.button
        onClick={onToggle}
        className={`
          px-8 py-4 rounded-full shadow-xl 
          flex items-center space-x-3 
          transition-all duration-300
          ${isRecruiter 
            ? 'bg-primary text-white hover:bg-primary-dark' 
            : 'bg-white text-background hover:bg-gray-100'
          }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {isRecruiter ? (
          <>
            <Users className="w-6 h-6" />
            <span className="font-semibold text-lg">Visualizando como Recrutador</span>
          </>
        ) : (
          <>
            <Briefcase className="w-6 h-6" />
            <span className="font-semibold text-lg">Visualizando como Cliente</span>
          </>
        )}
      </motion.button>
    </div>
  );
};