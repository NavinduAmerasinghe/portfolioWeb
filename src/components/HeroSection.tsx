import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, PenLine } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 left-10 code-decoration opacity-50 animate-pulse-slow">
        {/* {"{ code: 'life' }"} */}
      </div>
      <div className="absolute bottom-40 right-10 code-decoration opacity-50 animate-pulse-slow" style={{ animationDelay: "1s" }}>
        {/* {"<passion />"} */}
      </div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="inline-block font-mono text-primary text-sm mb-2 px-3 py-1 bg-primary/10 rounded-full">
                Hello, World! 👋
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl">I'm</span>{" "}
              <span className="text-gradient text-3xl md:text-4xl lg:text-5xl">
                Navindu Amerasinghe
              </span>
              <br />
              <span className="text-muted-foreground">Software Engineer</span>
            </h1>


            <p
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-justify animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
             Crafting elegant solutions through clean code. Passionate about building scalable applications and creating seamless user experiences.
            </p>


            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>

            <div
              className="flex gap-4 justify-center lg:justify-start pt-4 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <a
                href="https://github.com/NavinduAmerasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/navindu-amerasinghe/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:navinduamerasinghe@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://navinduamerasinghe.blogspot.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Blog"
              >
                <PenLine size={20} />
              </a>

            </div>
          </div>

          {/* Profile Image */}
          <div
            className="relative flex justify-center animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-slow" />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-float">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Code Elements */}
              <div className="absolute -top-4 -right-4 bg-card px-3 py-2 rounded-lg shadow-card border border-border font-mono text-xs text-primary">
                const dev = "awesome";
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card px-3 py-2 rounded-lg shadow-card border border-border font-mono text-xs text-accent">
                {"{ building: true }"}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-muted-foreground" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;