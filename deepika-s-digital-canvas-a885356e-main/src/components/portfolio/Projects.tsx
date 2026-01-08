import { ExternalLink, MessageSquare, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Chatbot Web Application",
    description:
      "An interactive chatbot interface for real-time user interaction. Built with modern web technologies for seamless communication experience.",
    icon: MessageSquare,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://deepika262.github.io/Chatbot/",
    gradient: "from-primary to-secondary",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform with product listing, structured layout, and modern UI design for an engaging shopping experience.",
    icon: ShoppingCart,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://deepika262.github.io/E-Commerce/",
    gradient: "from-secondary to-accent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my recent work and see what I've been building
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-4 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full gradient-bg text-primary-foreground hover:opacity-90 gap-2"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
