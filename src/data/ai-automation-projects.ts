import { Project } from './types';

export const aiAutomationProjects: Project[] = [
  {
    id: 'ai-automation-suite',
    title: 'AI Workflow Automation Suite',
    description: 'Portfolio of AI-powered automation solutions using N8N, OpenAI, and LangChain for various business domains.',
    longDescription: 'Comprehensive suite of AI agents and automation workflows serving restaurants, automotive, medical, and financial sectors.',
    category: 'AI & Automation',
    featured: true,
    tags: [
      'N8N',
      'OpenAI GPT-4',
      'LangChain',
      'PostgreSQL',
      'RAG',
      'Whisper',
      'Ollama',
      'Google Workspace',
      'Redis',
      'Amazon S3'
    ],
    highlights: [
      'Architected multi-modal AI agents processing text, audio, images, and location data',
      'Built end-to-end RAG pipelines with document processing and vectorization',
      'Integrated local LLMs using Ollama for cost-effective solutions',
      'Developed restaurant reservation system (EL ESPACIO) with PostgreSQL chat memory',
      'Created gas delivery platform (Gascom) with critical leak alert system',
      'Built automotive service scheduler (Taller K83) with strict business rule enforcement',
      'Engineered pawn shop appraiser with real-time market data scraping (Firecrawl)',
      'Developed medical clinic assistant with appointment lifecycle automation',
      'Deployed informational chatbots for government (Guatemala Consulate) and tech hub'
    ],
    metrics: {
      linesOfCode: '50,000+ (across all projects)',
      duration: 'Ongoing',
      impact: 'Serving 9+ businesses across industries'
    },
    githubLink: 'https://github.com/AntoSalazar'
  },
  {
    id: 'ai-restaurant-assistant',
    title: 'Sofi - Restaurant AI Assistant',
    description: 'AI-powered reservation system for EL ESPACIO with custom backend integration and timezone-aware scheduling.',
    longDescription: 'Complete automated reservation system managed by sophisticated AI assistant with business logic implementation.',
    category: 'AI & Automation',
    tags: [
      'N8N',
      'OpenAI',
      'PostgreSQL',
      'REST API',
      'Timezone Handling',
      'Business Logic'
    ],
    highlights: [
      'Integrated with custom backend API for clients, tables, and reservations',
      'Implemented complex business logic for table availability checking',
      'Utilized PostgreSQL for scalable and persistent chat memory',
      'Handled timezone conversions for accurate scheduling',
      'Created multi-step conversation flows for reservation process'
    ]
  },
  {
    id: 'gascom-delivery',
    title: 'Gascom - Gas Delivery Platform',
    description: 'Full-stack gas delivery service with order processing, invoice management, and emergency alert system.',
    longDescription: 'Complete backend logic for gas delivery service including critical safety features and customer management.',
    category: 'AI & Automation',
    tags: [
      'N8N',
      'PostgreSQL',
      'Google Sheets',
      'Alert System',
      'SQL'
    ],
    highlights: [
      'Developed user registration and order processing workflows',
      'Designed data model and wrote raw SQL queries for all operations',
      'Implemented critical gas leak alert system with instant manager notifications',
      'Created invoice data management system',
      'Built customer relationship tracking'
    ]
  },
  {
    id: 'pawn-shop-appraiser',
    title: 'AI Pawn Shop Appraiser',
    description: 'Automated product appraisal system with real-time market data scraping and AI-powered valuation.',
    longDescription: 'Intelligent appraisal system scraping multiple e-commerce sites and using AI to determine fair loan amounts.',
    category: 'AI & Automation',
    tags: [
      'N8N',
      'OpenAI',
      'Firecrawl',
      'Web Scraping',
      'Data Analysis'
    ],
    highlights: [
      'Engineered real-time scraping from Coppel, Walmart, and Elektra',
      'Developed data analysis pipeline for consolidating and cleaning scraped data',
      'Calculated key statistics for market pricing',
      'Used AI "expert appraiser" to determine fair loan amounts',
      'Automated entire appraisal workflow'
    ]
  },
  {
    id: 'rag-chatbots',
    title: 'RAG Knowledge Base Chatbots',
    description: 'Informational AI assistants with document processing, semantic search, and local LLM deployment.',
    longDescription: 'Enterprise chatbots for Guatemala Consulate and HUB TECH Chiapas with comprehensive knowledge retrieval.',
    category: 'AI & Automation',
    tags: [
      'N8N',
      'LangChain',
      'Ollama',
      'Supabase',
      'Amazon S3',
      'RAG',
      'Vector Database'
    ],
    highlights: [
      'Built end-to-end RAG pipelines with knowledge bases in Supabase',
      'Populated vector databases from documents stored in Amazon S3',
      'Deployed locally-hosted LLM using Ollama for HUB TECH Chiapas',
      'Created semantic search capabilities for document retrieval',
      'Implemented context-aware response generation'
    ]
  }
];
