import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const particleCount = Math.min(Math.floor((width * height) / 15000), 100);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        // White particles
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    // White connection lines
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance/120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    };

    init();
    window.addEventListener('resize', init);
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-0 pointer-events-none" />
      {/* Monochrome Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[120px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="space-y-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-xl md:text-2xl text-zinc-400 font-mono mb-6">
              {PERSONAL_INFO.title}
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              DONALD<br />
              <span className="text-zinc-600">ESSET.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-zinc-400 max-w-lg leading-relaxed font-light"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center gap-3 px-8 py-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full text-lg text-white font-medium overflow-hidden transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:bg-zinc-900"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">View Projects</span>
              <ArrowRight size={20} className="relative transition-transform group-hover:translate-x-1 text-zinc-400 group-hover:text-violet-400" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
             <div className="absolute inset-0 border border-zinc-800 rounded-full transform translate-x-4 translate-y-4" />
             <div className="relative w-full h-full rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700">
               <img 
                 src="/moonshot.jpg" 
                 alt="Donald Esset" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=81";
                   e.currentTarget.style.filter = "grayscale(100%)";
                 }}
               />
               <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;