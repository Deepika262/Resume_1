import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto" />
          </div>

          {/* Education Card */}
          <Card className="relative overflow-hidden border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bg" />
            
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center animate-pulse-glow">
                    <GraduationCap className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-xl text-muted-foreground mb-4">BCA</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Final Year Student</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Expected Graduation: 2026</span>
                    </div>
                  </div>

                  {/* Coursework highlights */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {["Web Development", "Database Management", "Data Structures", "Python Programming", "Software Engineering"].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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
