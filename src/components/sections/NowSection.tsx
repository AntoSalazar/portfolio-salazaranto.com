
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BrainCircuit, BookOpen } from "lucide-react";

const nowItems = [
  {
    title: "Current Focus",
    description: "Working on backend architecture for an eCommerce platform.",
    icon: <Code className="w-5 h-5" />,
    tags: ["Node.js", "TypeScript", "Microservices"],
    progress: 65
  },
  {
    title: "AI Assistant Project",
    description: "Developing a WhatsApp chatbot with natural language processing capabilities.",
    icon: <BrainCircuit className="w-5 h-5" />,
    tags: ["NLP", "Chatbots", "Node.js"],
    progress: 40
  },
  {
    title: "Learning",
    description: "Deep-diving into Kubernetes and container orchestration.",
    icon: <BookOpen className="w-5 h-5" />,
    tags: ["Kubernetes", "Docker", "DevOps"],
    progress: 30
  }
];

export default function NowSection() {
  return (
    <section id="now" className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Mexican-inspired decorative elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="space-y-6 text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Now</span>
          <h2 className="text-3xl sm:text-4xl font-bold">What I'm Up To</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My current focus areas and projects I'm actively working on right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nowItems.map((item, index) => (
            <Card 
              key={index} 
              className="card-hover border-t-4 border-t-primary h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Last updated: April 2025</p>
        </div>
      </div>
    </section>
  );
}
