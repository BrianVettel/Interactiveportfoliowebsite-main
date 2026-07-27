import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

function TypewriterText({ words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000 }: { words: string[]; typingSpeed?: number; deletingSpeed?: number; pauseDuration?: number }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === targetWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? targetWord.substring(0, prev.length - 1)
            : targetWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span>{currentText}</span>
      <span className="w-[2px] h-4 bg-[#FF6B35] ml-1 animate-pulse" />
    </span>
  );
}

function Cloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 100" fill="white" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="60" rx="60" ry="30" opacity="0.9" />
      <ellipse cx="110" cy="55" rx="50" ry="28" opacity="0.85" />
      <ellipse cx="50" cy="55" rx="40" ry="22" opacity="0.9" />
      <ellipse cx="90" cy="45" rx="35" ry="20" opacity="0.95" />
      <ellipse cx="130" cy="60" rx="35" ry="20" opacity="0.85" />
    </svg>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-sky-gradient" />

      {/* Floating clouds */}
      <Cloud className="absolute w-48 sm:w-64 cloud-float-1" style={{ top: '8%', left: '5%', opacity: 0.8 }} />
      <Cloud className="absolute w-36 sm:w-52 cloud-float-2" style={{ top: '15%', right: '10%', opacity: 0.6 }} />
      <Cloud className="absolute w-56 sm:w-72 cloud-float-3" style={{ top: '55%', left: '60%', opacity: 0.7 }} />
      <Cloud className="absolute w-40 sm:w-56 cloud-float-1" style={{ top: '70%', left: '-5%', opacity: 0.5 }} />
      <Cloud className="absolute w-32 sm:w-44 cloud-float-2" style={{ top: '30%', left: '35%', opacity: 0.55 }} />
      <Cloud className="absolute w-48 sm:w-60 cloud-float-3" style={{ bottom: '10%', right: '5%', opacity: 0.65 }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6">
          <div
            className="inline-flex items-center px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 min-h-[40px]"
            style={{ border: '1px solid #B5D8F0' }}
          >
            <span className="text-sm font-medium font-grotesk" style={{ color: '#1A1A2E' }}>
              <TypewriterText words={['UX Designer & Developer', 'UI/UX Specialist', 'Full-Stack Mobile Developer']} />
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 font-grotesk"
          style={{ color: '#1A1A2E', lineHeight: 1.1 }}
        >
          Creating{' '}
          <span style={{ color: '#FF6B35' }}>Meaningful</span>
          <br />
          User{' '}
          <span style={{ color: '#3B9FD9' }}>Experiences</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="dashed-border rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>
            <p className="text-sm font-mono-heading uppercase mb-2" style={{ color: '#5A6B7A', letterSpacing: '0.1em' }}>
              we don't do forgettable ✦
            </p>
            <p className="text-lg font-grotesk" style={{ color: '#1A1A2E' }}>
              Crafting intuitive, user-centered designs that solve real problems and delight users.
              Let's build something amazing together.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 font-grotesk"
            style={{ backgroundColor: '#FF6B35' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E85D2C'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B35'}
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-grotesk"
            style={{ color: '#1A1A2E', border: '2px solid #1A1A2E' }}
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}