import { Laptop, Brain, GraduationCap, MapPin, Code2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, education } from "@/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Full-Stack Engineer</h3>
                <p className="text-muted-foreground">
                  Specializing in building production-ready SaaS platforms with Clean Architecture, microservices, and modern web technologies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI & Automation</h3>
                <p className="text-muted-foreground">
                  Building intelligent workflows with N8N, OpenAI GPT-4, LangChain, and RAG systems for business automation.
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
                <h3 className="text-xl font-semibold">Based in Mexico</h3>
                <p className="text-muted-foreground">
                  {personalInfo.location.split(',')[0]}, bringing innovative solutions to local and international markets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Current Focus</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      AI-Powered SaaS Platforms
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      Building enterprise applications with GPT-4 lead scoring, RAG conversational AI, and multi-tenant architecture.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Clean Architecture
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      Implementing scalable systems with strict separation of concerns, dependency injection, and SOLID principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Education & Skills</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      {education.degree}
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      {education.institution} ({education.period})
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-medium">Languages</h4>
                    <p className="text-muted-foreground mt-2">
                      Spanish (Native) • English (Fluent)
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
