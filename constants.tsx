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
      "Designed and implemented machine learning pipelines for high-efficiency data extraction, transformation, and \
      retrieval from the ground up using the Qdrant vector database for storage.",
      "Integrated autonomous AI agents.",
      "Collaborated with cross-functional teams to deploy and scale AI pipelines on AWS and build business logic \
      microservices using FastAPI, ensuring continuous"
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
    company: "Unify AI",
    highlights: [
      "Contributed to the development of the Ivy framework, an open-source machine learning framework by adding \
      new features, fixing bugs using python and TensorFlow"
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
    title: "Age Progression/Regression model (Gen AI)",
    description: "Implemented Conditional Adversarial Autoencoders (cAAE) to predict future and past facial appearances based on a research paper. Fine-tuned adversarial loss functions to improve realism.",
    tags: ["GenAI", "Autoencoders", "Computer Vision"],
    githubUrl: "https://github.com/Shocker444/Age_progression-regression"
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