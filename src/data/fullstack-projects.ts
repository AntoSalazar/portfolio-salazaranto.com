import { Project } from './types';

export const fullstackProjects: Project[] = [
  {
    id: 'ai-saas-platform',
    title: 'AI-Powered Multi-Tenant SaaS Platform',
    description: 'Production-ready enterprise CRM with GPT-4 lead scoring, RAG conversational AI, and multi-tenant architecture.',
    longDescription: 'Full-stack AI-powered SaaS platform combining CRM, sales pipeline management, and conversational AI to help businesses manage their complete customer lifecycle.',
    category: 'Full-Stack',
    featured: true,
    tags: [
      'Node.js',
      'TypeScript',
      'React',
      'PostgreSQL',
      'GPT-4',
      'LangChain',
      'Docker',
      'Redis',
      'Clean Architecture',
      'RAG',
      'Stripe'
    ],
    highlights: [
      'Implemented GPT-4 powered lead scoring with automatic priority classification using BullMQ job queues',
      'Built RAG system using LangChain, OpenAI embeddings, and PostgreSQL pgvector for semantic search',
      'Designed Clean Architecture with 20 domain entities and 29+ business services',
      'Developed multi-strategy authentication (JWT, OAuth 2.0, API keys) with RBAC',
      'Integrated Stripe for subscription management with webhook handling',
      'Created 51+ unit and integration tests with Jest',
      'Built modern React UI with 56+ accessible components using shadcn/ui'
    ],
    metrics: {
      linesOfCode: '30,000+',
      duration: 'Ongoing',
      impact: 'Production-ready enterprise platform'
    }
  },
  {
    id: 'preca',
    title: 'Preca - Credit Screening SaaS',
    description: 'Tenant credit screening platform with Mexican Buró de Crédito integration, AI workflow automation, and identity verification.',
    longDescription: 'Production-ready SaaS platform for tenant credit screening in Mexican real estate market with hybrid AI-bot and human-verified workflow.',
    category: 'Full-Stack',
    featured: true,
    tags: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'Clean Architecture',
      'Docker',
      'INE Verification',
      'n8n Integration'
    ],
    highlights: [
      'Architected Clean Architecture with 51 use cases and 68+ API endpoints',
      'Integrated Stripe payments, Mexican identity verification (Wee Trust)',
      'Developed dual authentication supporting JWT sessions and API keys for AI chatbot',
      'Implemented dynamic form schema engine for database-driven service configuration',
      'Built event-driven workflow coordinating AI chatbots and payment providers'
    ],
    metrics: {
      linesOfCode: '30,000+',
      duration: '1 month',
      impact: 'Serving Mexican real estate market'
    }
  },
  {
    id: 'el-espacio',
    title: 'El Espacio - Restaurant Management',
    description: 'Restaurant reservation system with AI integration, conflict detection, and timezone-aware scheduling.',
    longDescription: 'Production-ready restaurant table reservation system with REST API for n8n AI agent integration and comprehensive management features.',
    category: 'Full-Stack',
    featured: true,
    tags: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Clean Architecture',
      'Docker',
      'REST API',
      'Better Auth'
    ],
    highlights: [
      'Implemented Clean Architecture with 23+ use cases and repository pattern',
      'Built REST API with rate limiting (1000 req/hour) and OpenAPI documentation',
      'Engineered timezone-aware reservation system with conflict detection algorithm',
      'Optimized production performance through database connection pooling',
      'Resolved 504 timeout errors via strategic connection pool configuration',
      'Created responsive UI with 50+ components and dark mode support'
    ],
    metrics: {
      linesOfCode: '15,000+',
      duration: '3 weeks',
      impact: 'AI-integrated reservation workflows'
    }
  },
  {
    id: 'ecommerce-platform',
    title: 'Microservice E-commerce Platform',
    description: 'Sophisticated e-commerce with microservices architecture, multi-warehouse inventory, and CFDI invoicing.',
    longDescription: 'Full-featured Node.js e-commerce backend with Clean Architecture and Ruby postal code microservice, orchestrated with Docker Compose.',
    category: 'E-commerce',
    featured: true,
    tags: [
      'Node.js',
      'TypeScript',
      'Express',
      'PostgreSQL',
      'TypeORM',
      'Docker',
      'Ruby',
      'Stripe',
      'Clean Architecture',
      'Microservices'
    ],
    highlights: [
      'Implemented Clean Architecture with Inversify.js for dependency injection',
      'Developed complete order workflow from cart to checkout with Stripe integration',
      'Built multi-warehouse inventory management across physical locations',
      'Created Ruby microservice for Mexican postal code lookups with auto-updating data',
      'Integrated CFDI e-invoicing for Mexican tax compliance',
      'Orchestrated multi-container environment with Docker Compose'
    ],
    metrics: {
      linesOfCode: '25,000+',
      duration: '2 months',
      impact: 'Scalable e-commerce infrastructure'
    }
  },
  {
    id: 'iris',
    title: 'IRIS - Insurance Claims Management',
    description: 'Insurance claims management system with AI processing, n8n automation, and secure containerized deployment.',
    longDescription: 'Professional insurance claims management system with AI integration for claim processing via n8n automation platform.',
    category: 'Full-Stack',
    tags: [
      'Django 5.2',
      'Python 3.13',
      'PostgreSQL 17',
      'Docker',
      'Nginx',
      'Gunicorn',
      'n8n',
      'AI Integration',
      'ReportLab'
    ],
    highlights: [
      'Built containerized Django application with multi-stage Dockerfile for security',
      'Integrated AI claim processing with n8n automation via webhooks',
      'Implemented REST API with JWT authentication',
      'Designed scalable database schema with indexing and partitioning plans',
      'Created custom admin interface with django-jazzmin',
      'Generated PDF reports using ReportLab'
    ],
    metrics: {
      linesOfCode: '18,000+',
      duration: '6 weeks',
      impact: 'Automated insurance workflows'
    }
  },
  {
    id: 'financial-management',
    title: 'Personal Finance Manager',
    description: 'Comprehensive financial management application for tracking income, expenses, investments, and debts.',
    longDescription: 'Full-stack financial management app with dashboard visualization, budgeting, investment tracking, and debt management.',
    category: 'Full-Stack',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'NextAuth.js',
      'Tailwind CSS',
      'Shadcn/ui'
    ],
    highlights: [
      'Architected hexagonal architecture separating business logic from infrastructure',
      'Built comprehensive dashboard with net worth and income vs expense visualization',
      'Implemented transaction management for income and expenses',
      'Created budgeting system with category tracking',
      'Developed cryptocurrency portfolio tracking with performance metrics',
      'Designed debt management module with payment status tracking'
    ],
    metrics: {
      linesOfCode: '12,000+',
      duration: '4 weeks',
      impact: 'Personal financial planning tool'
    },
    githubLink: 'https://github.com/AntoSalazar/personal-finance-tracker'
  }
];
