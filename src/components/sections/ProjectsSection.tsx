
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "eCommerce Platform",
    description: "A scalable eCommerce platform, secure payment processing, and real-time inventory management.",
    image: "./src/assets/images/ecommerce.png",
    tags: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Docker"],
    githubLink: "https://github.com/AntoSalazar"
  },
  {
    title: "AI WhatsApp Assistant",
    description: "An AI-powered personal assistant for customer service and sales on WhatsApp, featuring natural language processing and automated responses.",
    image: "./src/assets/images/aiWhats.png",
    tags: ["Node.js", "TypeScript", "NLP", "WhatsApp API", "Azure"],
    githubLink: "https://github.com/AntoSalazar/AI_Assistant"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've been working on recently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full card-hover">
              <div className="h-48 bg-secondary/50 dark:bg-secondary flex items-center justify-center rounded-t-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
                
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="gap-2">
              <Github className="w-4 h-4" /> See more on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
