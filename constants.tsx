import { Experience, Project, SkillCategory, Education } from './types';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Donald Esset",
  title: "AI Engineer",
  tagline: "Exploring AI, ML & Data Science, Building scalable AI systems",
  email: "essetdonald617@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/Shocker444", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/donald-esset-984752261/", icon: Linkedin },
  ],
  bio: "I'm an AI Engineer skilled in developing and implementing machine learning algorithms for data extraction. Proven track record of improving workflow efficiency and scaling AI systems on AWS. Contributor to the pioneering Ivy framework."
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Lead AI Engineer",
    company: "Nurri AI",
    highlights: [
      "Designed and implemented AI-native backend systems and full-stack workflows for data extraction, retrieval, and \
      user-facing applications using FastAPI as backend integration and Qdrant as vector database .",
      "Built and optimized Retrieval-Augmented Generation (RAG) pipelines to support disciplined, context-aware user \
      interactions.",
      "Integrated LLMs into production systems to enhance reasoning, and prompt reliability. Optimized LLM generation time \
      by 5% decrease in generation time",
      "Collaborated with cross-functional teams to deploy and scale AI pipelines on Google Cloud Platform(GCP) and build \
      business logic microservices using FastAPI, ensuring continuous monitoring, system optimization, cost efficiency and \
      effectiveness of the products, supporting clean system design and long-term maintainability"
    ]
  },
  {
    role: "Research and Analytics Engineer",
    company: "Amazing Inspiration media LTD",
    highlights: [
      "Analyzed radio rankings, audience reach, and listenership trends using structured datasets from an internal analytics \
      platform (Harmoni) to support programming and business decisions.",
      "Performed data cleaning, validation, and exploratory analysis to identify patterns in audience behavior across time \
      slots, programs, and demographics",
      "Generated periodic analytical reports and summaries highlighting performance trends, growth opportunities, and areas \
      for improvement.",
      "Collaborated with content and management teams to translate data insights into actionable recommendations aimed \
      at improving audience engagement and station performance."
    ]
  },
  {
    role: "Systems Analyst/AI Intern",
    company: "First Cardiology Consultants",
    highlights: [
      "Automated workflows reducing report time by 40%.",
      "Conducted system testing and acceptance for Al-integrated features, like 3D liver segmentation with Tensorflow, \
      Numpy, Streamlit and python."
    ]
  },
  {
    role: "Open Source Contributor",
    company: "Outreachy",
    highlights: [
      "Implemented multiple scientific algebraic functions to enhance RavenML, strengthening the RavenML ecosystem with \
      new mathematical functions, providing a foundation for future contributors.",
      "Developed and submitted 4 pull requests, of which 3 were successfully merged into the main codebase.",
      "Developed production-quality code in OCaml, demonstrating the feasibility of ML systems in functional programming \
      environments.",
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Resume Ranking System",
    description: "RAG-based system using GPT-4.1 & o1-mini for semantic understanding and reasoning to automate candidate screening.",
    tags: ["RAG", "GPT-4.1", "Python", "Vector DB"],
    githubUrl: "https://github.com/Shocker444/Resume-Analyzer"
  },
  {
    title: "Shocker: AI Candidate Interviewer",
    description: "AI-powered interview platform that conducts technical interviews, evaluates responses, and provides detailed feedback to candidates.",
    tags: ["Svelte", "GPT-4.1", "Python", "Deepgram", "ElevenLabs", "FastAPI", "Typescript"],
    githubUrl: "https://github.com/Shocker444/Shocker-Agent"
  },
  {
    title: "Automatic Plate Number Recognition (APNR)",
    description: "Built an object detection system using Python and TensorFlow to detect license plates with 95% accuracy, optimizing for varying lighting conditions and image quality.",
    tags: ["Computer Vision", "TensorFlow", "CNN"],
    githubUrl: "https://github.com/Shocker444/-ANPR-Automatic-plate-number-recognition"
  },
  {
    title: "Diabetes Prediction Ensemble",
    description: "Combined Random Forest & Decision Trees achieving 98% accuracy in early diagnosis prediction models.",
    tags: ["Random Forest", "Scikit-learn", "Healthcare AI"],
    githubUrl: "https://github.com/Shocker444/Data-Science/tree/main/Diabetes_prediction"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "OCaml"]
  },
  {
    category: "Deep Learning",
    skills: ["CNNs", "RNNs", "LSTMs", "GANs", "LLMs", "RAG"]
  },
  {
    category: "Frameworks",
    skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Django", "FastAPI"]
  },
  {
    category: "Tools",
    skills: ["AWS", "Docker", "MongoDB", "Git", "Qdrant", "GPT"]
  }
];

export const EDUCATION_DATA: Education = {
  institution: "Landmark University",
  degree: "B.Sc. Computer Science",
  details: "First Class Honors, GPA 4.60/5.00"
};