import { Card, CardContent } from "@/components/ui/card";
import { Database, Server, Layout, Code2, ContainerIcon, CloudIcon, Brain, Blocks } from "lucide-react";
import { skills } from "@/data";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: skills.languages
  },
  {
    name: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    skills: skills.frontend
  },
  {
    name: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    skills: skills.backend
  },
  {
    name: "Databases & Storage",
    icon: <Database className="w-5 h-5" />,
    skills: skills.databases
  },
  {
    name: "AI & Automation",
    icon: <Brain className="w-5 h-5" />,
    skills: skills.ai
  },
  {
    name: "DevOps & Infrastructure",
    icon: <ContainerIcon className="w-5 h-5" />,
    skills: skills.devops
  },
  {
    name: "Architecture & Patterns",
    icon: <Blocks className="w-5 h-5" />,
    skills: skills.architecture
  },
  {
    name: "Tools & Libraries",
    icon: <CloudIcon className="w-5 h-5" />,
    skills: skills.tools
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable full-stack applications, AI-powered solutions, and enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover overflow-hidden border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
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
