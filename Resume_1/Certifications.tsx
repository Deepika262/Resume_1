import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Introduction to HTML5",
    issuer: "Coursera",
    date: "2025",
    credentialId: "C1WHYBSVJ7X2",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/C1WHYBSVJ7X2",
    skills: ["HTML5"],
  },
  {
    title: "Responsive Website Basics: Code with HTML, CSS, and JavaScript",
    issuer: "Coursera",
    date: "June 2025",
    credentialUrl: "https://coursera.org/verify/GPZHWREPWWJU",
    skills: ["JavaScript", "Front-End Development", "CSS"],
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    date: "August 2025",
    duration: "~18 hours",
    credentialUrl: "#",
    skills: ["SQL", "Python", "Data Science"],
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "December 2025",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/6e233213d5f4",
    skills: ["SQL"],
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Coursera",
    date: "November 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/7YZS19XCAG66",
    skills: ["Back-End Development"],
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "May 2025",
    duration: "~17 hours",
    credentialUrl: "#",
    skills: ["Python"],
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "May 2025",
    credentialUrl: "https://coursera.org/share/bc948b39064304b2beba8aa64da3f40c",
    skills: ["Python", "Data Structures"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-32 gradient-bg-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications demonstrating my commitment to continuous learning
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="group relative overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg gradient-bg-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Duration if available */}
                  {cert.duration && (
                    <p className="text-xs text-muted-foreground mb-3">
                      Duration: {cert.duration}
                    </p>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-muted/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    asChild
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Verify Credential
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
