
import { Card, CardContent } from "@/components/ui/card";

export default function WhyIBuildSection() {
  return (
    <section id="why-i-build" className="py-20 relative overflow-hidden">
      {/* Mexican-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iNDIuNDIiIGhlaWdodD0iNDIuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLDApIHJvdGF0ZSg0NSkiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Why I Build Things</h2>
                
                <div className="relative py-6">
                  <div className="absolute inset-y-0 left-0 w-1 bg-primary rounded-full"></div>
                  <blockquote className="pl-6 italic text-xl md:text-2xl font-medium leading-relaxed">
                    "I build to solve real problems, to make people's lives easier, and to create something that makes a difference. 
                    Technology is just a tool - what matters is the impact it can have."
                  </blockquote>
                </div>
                
                <div className="space-y-6 text-left">
                  <p className="text-lg">
                    My passion for backend development stems from a deep desire to create systems that work seamlessly behind the scenes. 
                    Like the foundation of a building, good backend architecture may not be immediately visible, but it's what allows 
                    everything else to function properly.
                  </p>
                  
                  <p className="text-lg">
                    Growing up in Mexico, I was surrounded by a culture that values resourcefulness and creativity. 
                    This has shaped my approach to problem-solving and design - finding elegant solutions 
                    that work well even with constraints.
                  </p>
                  
                  <p className="text-lg">
                    Every project I undertake is driven by three core values:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {[
                      { title: "Reliability", desc: "Systems that work consistently and predictably." },
                      { title: "Innovation", desc: "Finding creative solutions to complex problems." },
                      { title: "User Focus", desc: "Building with the end user's needs in mind." }
                    ].map((value, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg">
                        <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
