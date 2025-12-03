import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';
import { getIconData } from '../utils/iconHelper';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const coreTechs = ['Python', 'TensorFlow', 'AWS', 'Qdrant', 'FastAPI', 'RAG'];

  return (
    <Section id="about">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-3">
            <span className="text-zinc-500 font-mono">01.</span> About Me
        </h2>

        <div className="space-y-6 text-zinc-300 text-lg leading-relaxed font-medium tracking-wide">
          <p>
            Hello! My name is Donald and I am an experienced AI Engineer skilled in developing and implementing machine learning algorithms for data extraction,
            with a proven track record of improving workflow efficiency and scaling AI systems on AWS. Contributed to the pioneering Ivy framework,
            enhancing its functionalities using TensorFlow and Python. Driven to leverage expertise in AI development and integration to help optimize and innovate solutions.
          </p>
          <p className="text-zinc-400">
            I graduated from <span className="text-white font-semibold">{EDUCATION_DATA.institution}</span> with a {EDUCATION_DATA.degree} <span className="text-white">({EDUCATION_DATA.details})</span>.
          </p>
          
          <div className="pt-12 w-full flex flex-col items-center">
             <h3 className="text-white font-bold mb-8 text-xl">Core Technologies</h3>
             <div className="flex flex-wrap justify-center gap-6">
                {coreTechs.map((skill, index) => {
                   const { type, src, Icon, color } = getIconData(skill);
                   return (
                     <motion.div
                       key={skill}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                       whileHover={{ y: -5 }}
                       className="flex flex-col items-center justify-center w-24 h-24 p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-all duration-300 hover:border-white/20 hover:shadow-lg"
                     >
                        <div 
                           className="w-10 h-10 mb-2 flex items-center justify-center rounded-lg"
                           style={{
                               // Subtle tint for icon background if color exists
                               backgroundColor: type === 'icon' && color ? `${color}10` : 'transparent'
                           }}
                        >
                           {type === 'img' ? (
                             <img 
                               src={src} 
                               alt={skill} 
                               className="w-full h-full object-contain" 
                             />
                           ) : (
                             <Icon 
                               size={30} 
                               style={{ color: color || 'white' }} 
                               strokeWidth={1.5} 
                             />
                           )}
                        </div>
                        <span className="text-xs font-mono text-zinc-400">{skill}</span>
                     </motion.div>
                   );
                })}
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;