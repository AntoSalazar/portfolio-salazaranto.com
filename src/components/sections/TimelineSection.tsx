
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: "education" | "experience" | "project";
}

const timelineItems: TimelineItem[] = [
  {
    year: "2022",
    title: "Software Engineer",
    description: "Leading backend development for scalable web applications using Node.js, TypeScript, and cloud infrastructure.",
    category: "experience"
  },
  {
    year: "2021",
    title: "Backend Developer",
    description: "Built APIs and microservices using Express, Node.js, and PostgreSQL with a focus on performance optimization.",
    category: "experience"
  },
  {
    year: "2020",
    title: "Computer Science Degree",
    description: "Graduated with honors, focusing on algorithms, data structures, and backend systems.",
    category: "education"
  },
  {
    year: "2019",
    title: "Personal Assistant AI",
    description: "Created an open-source AI assistant for task automation and information retrieval.",
    category: "project"
  }
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience, education, and key projects.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative z-10 flex items-center justify-center ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center`}>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                    {item.year.slice(-2)}
                  </div>
                  <div className="text-sm font-mono mt-1">{item.year}</div>
                </div>
                
                <Card className={`w-full md:w-5/12 card-hover ${
                  index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.category === 'education' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                          item.category === 'experience' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
