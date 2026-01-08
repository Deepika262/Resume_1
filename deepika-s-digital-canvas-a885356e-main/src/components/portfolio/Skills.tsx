import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "Responsive Design", icon: "📱", category: "Frontend" },
  { name: "Django", icon: "🐍", category: "Backend" },
  { name: "SQL & Databases", icon: "🗄️", category: "Backend" },
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "Data Structures", icon: "🔗", category: "Programming" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 gradient-bg-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group relative overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity" />
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-foreground mb-1">
                    {skill.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                    {skill.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
