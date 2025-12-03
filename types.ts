export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  details: string;
}