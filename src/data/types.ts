export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full-Stack' | 'Mobile' | 'AI & Automation' | 'Backend' | 'E-commerce';
  tags: string[];
  highlights?: string[];
  githubLink?: string;
  featured?: boolean;
  metrics?: {
    linesOfCode?: string;
    duration?: string;
    impact?: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
}
