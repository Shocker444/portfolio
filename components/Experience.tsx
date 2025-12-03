import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-3">
        <span className="text-zinc-500 font-mono">02.</span> Experience
      </h2>

      <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-16">
        {EXPERIENCE_DATA.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-black" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {job.role} <span className="text-zinc-400">@ {job.company}</span>
              </h3>
            </div>
            
            <ul className="space-y-3 mt-4">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <span className="text-white mt-1.5 text-xs">▹</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;