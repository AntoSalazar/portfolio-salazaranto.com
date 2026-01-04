import { Project } from './types';

export const backendProjects: Project[] = [
  {
    id: 'tire-inventory-api',
    title: 'Tire Industry Analytics API',
    description: 'Business intelligence API with Excel processing, purchasing recommendations, and market analysis.',
    longDescription: 'Sophisticated analytics API processing sales and inventory data to provide actionable insights for tire industry.',
    category: 'Backend',
    featured: true,
    tags: [
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'Pandas',
      'JWT',
      'Docker',
      'Clean Architecture',
      'Pytest'
    ],
    highlights: [
      'Developed RESTful API with FastAPI for inventory and sales analytics',
      'Implemented data ingestion pipeline using Pandas for Excel file processing',
      'Engineered analysis engine generating purchasing recommendations based on sales velocity',
      'Designed PostgreSQL schema with InventorySnapshot for historical trend analysis',
      'Secured endpoints using JWT-based authentication',
      'Architected using Hexagonal Architecture separating business logic from infrastructure',
      'Containerized with Docker Compose for reproducible environments',
      'Created Excel export endpoints for business users'
    ],
    metrics: {
      linesOfCode: '12,000+',
      duration: '5 weeks',
      impact: 'Optimized inventory management'
    }
  }
];
