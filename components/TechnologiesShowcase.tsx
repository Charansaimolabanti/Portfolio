'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Particles } from './ui/shadcn-io/particles';
import { TextRevealCardPreview } from './reveal';
import { Button } from './ui/button';

type Tech = {
  name: string;
  logoUrl: string;
};

const technologyData: {
  frontend: Tech[];
  backend: Tech[];
  videoEditing: Tech[];
} = {
  frontend: [
    { name: 'HTML5', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind', logoUrl: '/tailwind.png' }, // make sure this is inside /public/
  ],
  backend: [
    { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  ],
  videoEditing: [
    { name: 'Adobe Premiere', logoUrl: '/adobep.png' },
    { name: 'After Effects', logoUrl: '/adobe.png' },
    { name: 'DaVinci Resolve', logoUrl: '/davinci.png' },
    { name: 'CapCut', logoUrl: '/capcut.png' },
  ],
};

// Tilt effect hook
const useCardTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 15;
    const rotateY = ((x / rect.width) - 0.5) * -15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return { ref, rotate, handleMouseMove, handleMouseLeave };
};

interface CategoryCardProps {
  title: string;
  technologies: Tech[];
}

const CategoryCard = ({ title, technologies }: CategoryCardProps) => {
  const { ref, rotate, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-80 transform-gpu hover:shadow-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {technologies.map((tech, i) => (
          <button
            key={i}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 hover:scale-105 transition-transform"
          >
            <Image
              src={tech.logoUrl.trim()} // ✅ removes any accidental leading spaces
              alt={tech.name}
              width={20}
              height={20}
              className="object-contain"
            />
            {tech.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default function TechnologiesShowcase() {
  return (
    <div className="relative w-full min-h-screen py-16 px-6 bg-black overflow-hidden">
       
      <Particles
        className="absolute inset-0 pointer-events-none z-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#803ae0"
        size={2.0}
      />

 
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Technologies & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <CategoryCard title="Frontend" technologies={technologyData.frontend} />
          <CategoryCard title="Backend" technologies={technologyData.backend} />
          <CategoryCard title="Video Editing" technologies={technologyData.videoEditing} />
          </div>
          <div className='hidden md:block'>
            <div>
          <TextRevealCardPreview/>
          </div>

        </div >
        
      </div>
    </div>
  );
}
