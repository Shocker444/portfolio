import {
  Code, Sparkles, Layers, Network,
  Database, BrainCircuit, ScanEye,
  Activity, Repeat, Boxes, Zap, Bot
} from 'lucide-react';

export const getIconData = (skillName: string) => {
  const lower = skillName.toLowerCase();

  // Devicon mappings (Using real SVG logos)
  if (lower === 'python') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' };
  if (lower === 'ocaml') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg' };
  if (lower === 'tensorflow') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' };
  if (lower === 'pytorch') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' };
  if (lower === 'scikit-learn') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' };
  if (lower === 'django') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' };
  if (lower === 'fastapi') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' };
  if (lower === 'aws') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' };
  if (lower === 'docker') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' };
  if (lower === 'mongodb') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' };
  if (lower === 'git') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' };
  if (lower === 'keras') return { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' };

  // Custom Colorful GUI Icons for Abstract Concepts & Tools without generic Devicons
  
  // Tools
  if (lower.includes('gpt')) return { type: 'icon', Icon: Bot, color: '#10a37f' }; // OpenAI Green
  if (lower.includes('qdrant')) return { type: 'icon', Icon: Database, color: '#ff2c4f' }; // Qdrant Red

  // Deep Learning
  if (lower.includes('cnn')) return { type: 'icon', Icon: ScanEye, color: '#06b6d4' }; // Cyan (Vision)
  if (lower.includes('rnn')) return { type: 'icon', Icon: Repeat, color: '#8b5cf6' }; // Violet (Sequence)
  if (lower.includes('lstm')) return { type: 'icon', Icon: Activity, color: '#a855f7' }; // Purple (Memory/Activity)
  if (lower.includes('gan')) return { type: 'icon', Icon: Zap, color: '#f43f5e' }; // Rose (Generative/Energy)
  if (lower.includes('llm')) return { type: 'icon', Icon: BrainCircuit, color: '#10b981' }; // Emerald (Intelligence)
  if (lower.includes('rag')) return { type: 'icon', Icon: Layers, color: '#f59e0b' }; // Amber (Retrieval/Layers)

  // Default fallback
  return { type: 'icon', Icon: Code, color: '#94a3b8' };
};