
import { Laptop, Music, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Software Engineer and Backend Developer specialized in building robust and scalable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-muted-foreground">
                  Specializing in backend development, I build scalable applications with a focus on clean architecture and best practices.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Music & Coding</h3>
                <p className="text-muted-foreground">
                  When I'm not solving complex problems, you'll find me coding while listening to music — my perfect productivity combo.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">From Mexico</h3>
                <p className="text-muted-foreground">
                  Based in Mexico, bringing a global perspective to software development and collaboration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">What I'm Doing</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium">eCommerce Platform</h4>
                    <p className="text-muted-foreground mt-2">
                      Currently working on a scalable eCommerce platform with modern architecture and performance optimization.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium">AI-powered Assistant</h4>
                    <p className="text-muted-foreground mt-2">
                      Building an AI personal assistant for customer service and sales automation on WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Goals</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium">Collaboration</h4>
                    <p className="text-muted-foreground mt-2">
                      Looking to collaborate on backend projects and scalable systems with other passionate developers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium">Mentorship</h4>
                    <p className="text-muted-foreground mt-2">
                      Seeking mentorship in cloud infrastructure and DevOps best practices to enhance my skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
