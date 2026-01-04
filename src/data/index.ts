import { fullstackProjects } from './fullstack-projects';
import { mobileProjects } from './mobile-projects';
import { aiAutomationProjects } from './ai-automation-projects';
import { backendProjects } from './backend-projects';
import { Project } from './types';

export * from './types';
export * from './personal-info';

// Combine all projects and sort by featured first, then by category priority
export const allProjects: Project[] = [
  ...fullstackProjects,
  ...mobileProjects,
  ...aiAutomationProjects,
  ...backendProjects
].sort((a, b) => {
  // Featured projects first
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  return 0;
});

export const featuredProjects = allProjects.filter(p => p.featured);

export const projectsByCategory = {
  'Full-Stack': fullstackProjects,
  'Mobile': mobileProjects,
  'AI & Automation': aiAutomationProjects,
  'Backend': backendProjects,
  'E-commerce': fullstackProjects.filter(p => p.category === 'E-commerce')
};

export const categories = Object.keys(projectsByCategory);
