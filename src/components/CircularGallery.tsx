import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
}

interface CircularGalleryProps {
  projects: Project[];
}

export const CircularGallery: React.FC<CircularGalleryProps> = ({ projects }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      {/* Desktop view with grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-background-light rounded-lg cursor-pointer overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedId(project.id)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.period}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile view with horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
        <div className="flex space-x-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-none w-72 bg-background-light rounded-lg cursor-pointer overflow-hidden shadow-lg"
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedId(project.id)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-background-light p-8 rounded-lg max-w-2xl w-full m-4"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {projects.find(p => p.id === selectedId) && (
                <>
                  <div className="mb-6">
                    <img
                      src={projects.find(p => p.id === selectedId)?.image}
                      alt={projects.find(p => p.id === selectedId)?.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2">
                      {projects.find(p => p.id === selectedId)?.title}
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {projects.find(p => p.id === selectedId)?.period}
                    </p>
                    <p className="text-gray-300">
                      {projects.find(p => p.id === selectedId)?.description}
                    </p>
                  </div>
                  <button
                    className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-lg transition-colors"
                    onClick={() => setSelectedId(null)}
                  >
                    Fechar
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};