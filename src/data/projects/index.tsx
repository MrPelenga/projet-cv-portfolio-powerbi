
import { Project } from '@/components/ProjectsList';
import { project1 } from './project1';
import { project2 } from './project2';
import { project3 } from './project3';
import { project4 } from './project4';

// Combine all projects in one array for easy access
export const allProjects: Project[] = [project1, project2, project3, project4];

// Export individual projects for direct access
export { project1, project2, project3, project4 };

// Helper function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

// Helper function to get related projects (excluding the current one)
export const getRelatedProjects = (currentId: string, limit: number = 3): Project[] => {
  return allProjects
    .filter(project => project.id !== currentId)
    .slice(0, limit);
};
