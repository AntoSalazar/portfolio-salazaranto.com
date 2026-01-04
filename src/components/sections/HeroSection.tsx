import { ArrowDown, Code, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="block">👋 Hi there! I'm</span>
                <span className="text-gradient">Carlos Antonio</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">
                  Get in touch <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#projects">
                  View Projects <Code className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="/cv.pdf" download="Carlos_Salazar_CV.pdf">
                  Download CV <FileDown className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-icon">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="relative bg-card border rounded-lg p-8 shadow-lg animate-fade-in z-10">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>
{`// about-me.ts
const carlos = {
  name: "${personalInfo.name}",
  title: "${personalInfo.title}",
  location: "${personalInfo.location}",
  specialties: [
    "Full-Stack Development",
    "AI & Automation",
    "Clean Architecture",
    "Microservices"
  ],
  education: "Computer Systems Engineering",
  languages: ["Spanish", "English"],
  currentFocus: [
    "AI-Powered SaaS",
    "RAG Systems",
    "Enterprise Solutions"
  ]
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button variant="ghost" size="icon" asChild>
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
