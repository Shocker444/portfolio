import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="py-40">
      <div className="border-t border-zinc-800 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-zinc-500 font-mono mb-8">05. What's Next?</p>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              LET'S<br/>WORK<br/>TOGETHER
            </h2>
          </div>
          
          <div className="space-y-8 mb-4">
            <p className="text-zinc-400 text-xl leading-relaxed max-w-md">
              I'm always interested in hearing about new projects and opportunities in AI and Machine Learning.
            </p>
            
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-black border border-zinc-700 rounded-full text-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Message me</span>
              <ArrowRight className="relative w-8 h-8 transform group-hover:translate-x-2 transition-transform text-zinc-400 group-hover:text-violet-400" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;