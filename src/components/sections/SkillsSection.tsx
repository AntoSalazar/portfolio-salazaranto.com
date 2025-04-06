
import { Card, CardContent } from "@/components/ui/card";
import { Database, Server, Layout, Code2, ContainerIcon, CloudIcon } from "lucide-react";

const skillCategories = [
  {
    name: "Languages & Frameworks",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Node.js", "TypeScript", "Express", "React.js", "Flutter", "Java", "Spring Boot","Python","Django","PHP"]
  },
  {
    name: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "MySQL", "MariaDB"]
  },
  {
    name: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    skills: ["API Design", "Authentication", "Security", "Performance Optimization", "Testing"]
  },
  {
    name: "Frontend Technologies",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React.js", "HTML/CSS", "TailwindCSS", "Flutter", "Responsive Design"]
  },
  {
    name: "DevOps & Infrastructure",
    icon: <ContainerIcon className="w-5 h-5" />,
    skills: ["Docker", "Git", "CI/CD", "Linux", "Bash Scripting"]
  },
  {
    name: "Cloud Services",
    icon: <CloudIcon className="w-5 h-5" />,
    skills: ["Microsoft Azure","VPS", "Cloud Databases", "Monitoring"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I use to build robust, scalable, and efficient applications.
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
