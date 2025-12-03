import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { getIconData } from '../utils/iconHelper';

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center text-center">
         <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-zinc-500 font-mono">04.</span> Technical Skills
        </h2>

        <div className="space-y-16 w-full max-w-5xl">
          {SKILLS_DATA.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col items-center">
               <h3 className="text-xl font-bold text-white mb-8 inline-block relative">
                  {category.category}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-zinc-700"></span>
               </h3>
               
               <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, index) => {
                     const { type, src, Icon, color } = getIconData(skill);
                     
                     return (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.05 }}
                         whileHover={{ y: -5 }}
                         className="flex flex-col items-center justify-center w-28 h-28 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl transition-all duration-300 group hover:bg-zinc-900 hover:shadow-lg"
                         style={{ 
                           // Dynamic border color on hover
                           ['--hover-color' as any]: color || '#ffffff' 
                         }}
                       >
                         {/* Icon Container with GUI styling */}
                         <div 
                           className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg transition-all duration-300"
                           style={{
                             backgroundColor: type === 'icon' && color ? `${color}15` : 'transparent', // 15 = low opacity hex
                             boxShadow: type === 'icon' && color ? `0 0 15px ${color}20` : 'none'
                           }}
                         >
                           {type === 'img' ? (
                             <img 
                               src={src} 
                               alt={skill} 
                               className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110" 
                             />
                           ) : (
                             <Icon 
                               size={28} 
                               style={{ color: color || 'white' }}
                               className="transition-all duration-300 group-hover:scale-110" 
                               strokeWidth={1.5} 
                             />
                           )}
                         </div>
                         <span className="text-xs font-medium text-zinc-400 group-hover:text-white text-center font-mono transition-colors">
                           {skill}
                         </span>
                       </motion.div>
                     );
                  })}
               </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;