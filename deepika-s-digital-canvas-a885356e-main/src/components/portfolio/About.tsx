import { Code2, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive and interactive web applications",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Strong analytical and debugging skills",
  },
  {
    icon: Sparkles,
    title: "Continuous Learner",
    description: "Always upskilling through projects and certifications",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Avatar placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative gradient ring */}
                <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-2xl" />
                <div className="absolute inset-4 bg-muted rounded-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">D</span>
                    </div>
                    <p className="text-lg font-semibold gradient-text">Deepika</p>
                    <p className="text-sm text-muted-foreground">BCA Final Year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My name is <span className="text-foreground font-semibold">Deepika</span>, a final-year BCA student passionate about web development. I have hands-on experience in HTML, CSS, JavaScript, and backend basics using Django and SQL.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy building interactive, user-friendly web applications and continuously upskill through projects and industry-recognized certifications. My goal is to become a proficient full-stack developer and contribute to innovative web solutions.
              </p>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <Card
                    key={item.title}
                    className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-lg gradient-bg-subtle flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
