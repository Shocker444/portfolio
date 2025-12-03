import React from 'react';
import Section from './Section';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, BrainCircuit, ScanFace, ScanLine, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  // Helper to determine icon and colors based on project title
  const getProjectIcon = (title: string) => {
    // Resume Ranking System - Electric Violet
    if (title.includes("Resume")) return { 
      Icon: BrainCircuit, 
      color: "text-violet-400", 
      bg: "bg-violet-500/10 group-hover:bg-violet-500/20", 
      border: "border-violet-500/20 group-hover:border-violet-500/50" 
    };
    
    // Age Progression - Cyan
    if (title.includes("Age")) return { 
      Icon: ScanFace, 
      color: "text-cyan-400", 
      bg: "bg-cyan-500/10 group-hover:bg-cyan-500/20", 
      border: "border-cyan-500/20 group-hover:border-cyan-500/50" 
    };
    
    // Plate Recognition - Emerald
    if (title.includes("Plate")) return { 
      Icon: ScanLine, 
      color: "text-emerald-400", 
      bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20", 
      border: "border-emerald-500/20 group-hover:border-emerald-500/50" 
    };
    
    // Diabetes Prediction - Rose
    if (title.includes("Diabetes")) return { 
      Icon: Activity, 
      color: "text-rose-400", 
      bg: "bg-rose-500/10 group-hover:bg-rose-500/20", 
      border: "border-rose-500/20 group-hover:border-rose-500/50" 
    };
    
    // Default - Violet
    return { 
      Icon: BrainCircuit, 
      color: "text-violet-400", 
      bg: "bg-violet-500/10 group-hover:bg-violet-500/20", 
      border: "border-violet-500/20 group-hover:border-violet-500/50" 
    };
  };

  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-zinc-500 font-mono">03.</span> Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => {
          const { Icon, color, bg, border } = getProjectIcon(project.title);
          
          return (
            <motion.a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/30 backdrop-blur-md border border-zinc-800 rounded-xl p-6 md:p-8 hover:border-violet-500/30 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-violet-500/5 cursor-pointer"
            >
              {/* Glass shine effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 border ${bg} ${color} ${border}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-4">
                    <span className="text-zinc-500 group-hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-violet-200">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono text-zinc-400 bg-black/50 border border-zinc-800 px-2 py-1 rounded group-hover:border-violet-500/30 group-hover:text-violet-200 transition-colors backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;