import { useState } from "react";
import { Palette, Server, Code, X, Check, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const services = [
{
  icon: Palette,
  title: "Website Design & Development",
  shortDesc: "Designing and deploying modern, high-quality websites",
  services: [
    "Modern UI design for personal and business websites",
    "Responsive web design for desktop and mobile",
    "Wireframing and basic prototyping",
    "Email integration (contact forms, notifications)",
    "Website deployment and hosting setup",
    "Domain configuration and basic SEO setup",
  ],
},

{
  icon: Code,
  title: "Frontend Software Engineer",
  shortDesc: "Building scalable and responsive frontend applications",
  services: [
    "Build scalable web applications using React.js and Next.js",
    "Create responsive user interfaces using HTML, Tailwind CSS, and JavaScript",
    "Integrate RESTful APIs and handle dynamic routing with Next.js",
    "Use Git and GitHub for version control and collaborative development",
    "Containerize frontend applications using Docker for consistent builds and deployment",
  ],
},

{
  icon: Server,
  title: "Backend Developer",
  shortDesc: "Building secure and scalable backend systems",
  services: [
    "Build scalable backend services using Node.js and Express.js",
    "Work with MongoDB and Mongoose for database design and integration",
    "Implement RESTful APIs and handle authentication (JWT, OAuth)",
    "Manage asynchronous tasks, cron jobs, and background workers",
    "Handle file uploads, validations, and server-side logic",
    "Design clean, maintainable backend architectures",
  ],
},

{
  icon: Server,
  title: "Mobile Application Development",
  shortDesc: "Building simple and scalable mobile applications",
  services: [
    "Develop cross-platform mobile applications using React Native and Flutter",
    "Build reusable UI components and responsive mobile layouts",
    "Integrate RESTful APIs and backend services",
    "Ensure smooth performance and basic state management",
  ],
},

];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="absolute left-0 top-20 code-decoration">
        {/* {"// services.offer()"} */}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services I offer to help bring your ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300"
                  >
                    View More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Glassmorphism Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-card/80 backdrop-blur-xl border-border/50 max-w-md animate-scale-in">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {selectedService && (
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6 text-primary" />
                </div>
              )}
              <DialogTitle className="text-xl font-bold">
                {selectedService?.title}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            {selectedService?.services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
