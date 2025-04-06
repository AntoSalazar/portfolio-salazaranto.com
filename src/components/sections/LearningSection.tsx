
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, BookOpen, BrainCircuit, HardDrive } from "lucide-react";

const learningTopics = [
  {
    title: "Kubernetes",
    description: "Learning container orchestration for managing microservices and scalable applications.",
    icon: <HardDrive className="w-5 h-5" />,
    resources: ["Official Kubernetes Docs", "Cloud Native Foundation", "Practical Courses"],
    category: "Infrastructure"
  },
  {
    title: "Microservices",
    description: "Exploring patterns for building, deploying, and scaling microservice architectures.",
    icon: <ArrowUpRight className="w-5 h-5" />,
    resources: ["Domain-Driven Design", "Service Mesh", "API Gateways"],
    category: "Architecture"
  },
  {
    title: "Event Sourcing",
    description: "Understanding event-based persistence and CQRS pattern for complex applications.",
    icon: <BrainCircuit className="w-5 h-5" />,
    resources: ["CQRS Pattern", "Event Stores", "Practical Examples"],
    category: "Architecture"
  },
  {
    title: "Repository Pattern",
    description: "Implementing clean architecture with the repository pattern for data access abstraction.",
    icon: <BookOpen className="w-5 h-5" />,
    resources: ["Clean Architecture", "DDD Principles", "TypeScript Implementations"],
    category: "Architecture"
  }
];

export default function LearningSection() {
  return (
    <section id="learning" className="py-20">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">What I'm Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly expanding my knowledge and skills. Here's what I'm currently focused on learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningTopics.map((topic, index) => (
            <Card key={index} className="card-hover h-full">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {topic.description}
                    </CardDescription>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {topic.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {topic.category}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Learning Resources:
                    </h4>
                    <ul className="list-disc list-inside text-sm pl-2 space-y-1">
                      {topic.resources.map((resource, resIndex) => (
                        <li key={resIndex}>{resource}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
