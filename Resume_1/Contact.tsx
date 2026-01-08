import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Deepika262",
    username: "@deepika262",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "linkedin.com/in/deepika-m-42a074341",
    username: "Deepika",
    color: "hover:text-[hsl(200,90%,55%)]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:mmdeepikabcashift@gmail.com",
    username: "mmdeepikabcashift@gmail.com",
    color: "hover:text-secondary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 gradient-bg-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about web development!
            </p>
          </div>

          {/* Social Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${social.color}`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <social.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Name & Username */}
                <h3 className="font-semibold text-foreground mb-1 flex items-center justify-center gap-1">
                  {social.name}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground">{social.username}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="inline-flex flex-col items-center">
            <p className="text-muted-foreground mb-4">Prefer email?</p>
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 gap-2 px-8"
              asChild
            >
              <a href="mailto:mmdeepikabcashift@gmail.com">
                <Mail className="h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
