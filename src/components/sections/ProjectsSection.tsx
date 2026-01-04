import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Sparkles } from "lucide-react";
import { allProjects, categories, projectsByCategory, featuredProjects } from "@/data";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayProjects = selectedCategory === "All"
    ? allProjects
    : selectedCategory === "Featured"
    ? featuredProjects
    : projectsByCategory[selectedCategory as keyof typeof projectsByCategory] || [];

  return (
    <section id="projects" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of full-stack applications, mobile apps, AI automation solutions, and backend systems I've built.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="All" className="w-full mb-8" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2">
            <TabsTrigger value="All">All Projects</TabsTrigger>
            <TabsTrigger value="Featured" className="gap-1">
              <Sparkles className="w-3 h-3" /> Featured
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full card-hover group">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="shrink-0">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 6 && (
                    <Badge variant="outline">+{project.tags.length - 6}</Badge>
                  )}
                </div>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="line-clamp-2">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.metrics && (
                  <div className="pt-2 border-t text-xs text-muted-foreground space-y-1">
                    {project.metrics.linesOfCode && (
                      <div>Code: {project.metrics.linesOfCode}</div>
                    )}
                    {project.metrics.impact && (
                      <div>Impact: {project.metrics.impact}</div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.githubLink && (
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                )}
                <Badge variant="outline" className="ml-auto">
                  {project.category}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <a href="https://github.com/AntoSalazar" target="_blank" rel="noreferrer" className="gap-2">
              <Github className="w-4 h-4" /> See more on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
