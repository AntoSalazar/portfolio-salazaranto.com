import { Project } from './types';

export const mobileProjects: Project[] = [
  {
    id: 'finsur',
    title: 'Finsur - Android E-commerce',
    description: 'Native Android e-commerce app with Jetpack Compose, Clean Architecture, and integrated payment processing.',
    longDescription: 'Modern native Android application for seamless mobile shopping with reactive UI, Google Sign-In, and Stripe payments.',
    category: 'Mobile',
    featured: true,
    tags: [
      'Kotlin',
      'Jetpack Compose',
      'Clean Architecture',
      'Hilt',
      'Retrofit',
      'Coroutines',
      'Stripe SDK',
      'Google Sign-In',
      'Coil'
    ],
    highlights: [
      'Built 100% Jetpack Compose UI with modern reactive design',
      'Implemented Clean Architecture with Domain, Data, and Presentation layers',
      'Integrated Hilt for dependency injection across the application',
      'Developed dynamic start destination based on authentication state',
      'Created shared ViewModels for cart consistency across screens',
      'Integrated Google Sign-In and Stripe Android SDK for payments',
      'Built comprehensive profile section with orders and address management',
      'Organized codebase by feature for scalability'
    ],
    metrics: {
      linesOfCode: '15,000+',
      duration: '6 weeks',
      impact: 'Full-featured mobile shopping experience'
    },
    githubLink: 'https://github.com/AntoSalazar/FinsurAndroid'
  },
  {
    id: '300-lugares',
    title: '300 Lugares - Business Directory',
    description: 'Flutter mobile app for discovering and rating establishments with maps integration and offline support.',
    longDescription: 'Directory application for discovering restaurants and bars with user authentication, ratings, and geolocation features.',
    category: 'Mobile',
    tags: [
      'Flutter',
      'Dart',
      'Provider',
      'Google Maps',
      'Geolocator',
      'REST API',
      'JWT Auth',
      'SharedPreferences',
      'Offline-First'
    ],
    highlights: [
      'Developed feature-driven architecture for modularity and maintainability',
      'Implemented service layer pattern for API communication separation',
      'Created token-based authentication with JWT storage in SharedPreferences',
      'Built offline caching strategy for displaying data during network outages',
      'Integrated Google Maps and geolocation for location-based features',
      'Designed role-based UI (admin vs regular user capabilities)',
      'Implemented light/dark theme support',
      'Created categorized home screen (Top Rated, Recommended, Recently Viewed)'
    ],
    metrics: {
      linesOfCode: '10,000+',
      duration: '4 weeks',
      impact: 'Location-based business discovery'
    }
  }
];
