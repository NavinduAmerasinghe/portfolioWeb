import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: string;
  image?: string; // ✅ added
};

const projects: Project[] = [
  {
    title: "Smart Road Weather Dashboard",
    description:
      "The Smart Road Weather Dashboard is a web-based application designed to provide real-time weather, road condition, and traffic information for users across Finland. By integrating data from the Finnish Meteorological Institute (FMI) and Digitraffic, the system helps users make safer travel decisions by presenting accurate, timely, and location-specific insights through an interactive dashboard.",
    technologies: ["React", "Redux", "Java(Spring Boot)", "FMI API", "Digitraffic"],
    image: "https://xxczmdfxqsyrcwauwakh.supabase.co/storage/v1/object/public/WebImages/Fn_weather.png",
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
    category: "AI/ML",
  },
  {
    title: "CertX360 IOT Project",
    description:
      "•	Developed an IoT smart farming platform that helps farmers to boost yields, ensure food quality and safety, and enable full process traceability.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "WebSocket"],
    image: "https://xxczmdfxqsyrcwauwakh.supabase.co/storage/v1/object/public/WebImages/certx360.png",
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
    category: "Web",
  },
  {
    title: "Final Year Research",
    description:
      "A Web and Mobile application with an IoT device for real-time road safety alerts to prevent animal–vehicle conflicts in Sri Lanka.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Bootstrap",
      "Firebase",
      "Docker",
      "React Native",
    ],
    image: "https://xxczmdfxqsyrcwauwakh.supabase.co/storage/v1/object/public/WebImages/Rp.png",
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
    category: "AI/ML",
  },
  {
    title: "Enhanced POS System",
    description:
      "OS (Point of Sale) system is designed to streamline retail or service-based transactions, integrating core functionalities such as inventory management, billing, payment processing, and customer data handling. With a user-friendly interface, it ensures seamless sales operations while incorporating features like cart management, product additions, and multiple payment options.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "https://xxczmdfxqsyrcwauwakh.supabase.co/storage/v1/object/public/WebImages/POSys.png",
    // github: "https://github.com",
    // live: "https://example.com",
    featured: false,
    category: "Web",
  },
  {
    title: "LLM Fine-Tuning & Deployment Project",
    description:
      "Developed a medical X-ray diagnosis web application by training a CNN model using PyTorch and integrating it into a Flask backend. Evaluated model performance and explored real-world deployment considerations.",
    technologies: ["Python", "PyTorch", "CNN", "Flask", "Machine Learning"],
    image: "https://xxczmdfxqsyrcwauwakh.supabase.co/storage/v1/object/public/WebImages/xray.png",
    // github: "https://github.com", 
    featured: false,
    category: "AI/ML",
  },

  {
    title: "Visa Approval Prediction – Machine Learning Project",
    description:
      "Designed and evaluated multiple machine learning classifiers, including a custom ANN, for structured data prediction. Containerized and deployed the full ML pipeline using Docker with CI/CD-oriented deployment considerations.",
    technologies: ["Python", "Machine Learning", "ANN", "Docker", "CI/CD"],
    image: "https://xxczmdfxqsyrcwauwakh.supabase.co/storage/v1/object/public/WebImages/visa.png",
    // github: "https://github.com", 
    featured: false,
    category: "AI/ML",
  },

];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="absolute left-10 top-20 code-decoration">
        {/* {"// featured work"} */}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 max-w-6xl mx-auto mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl border border-border shadow-card overflow-hidden hover:shadow-glow transition-all duration-300 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex-row`}
            >
              {/* ✅ Project Image Preview */}
              <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden group">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-mono text-sm">
                        {project.title}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Folder className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                      <span className="font-mono text-sm text-muted-foreground">
                        {project.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <span className="font-mono text-primary text-sm mb-2">
                  Featured Project
                </span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  {/* ✅ small thumbnail */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-10 h-10 rounded object-cover border border-border"
                      loading="lazy"
                    />
                  ) : (
                    <Folder className="w-10 h-10 text-primary" />
                  )}

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ note: put images in /public/projects/... */}
          {/* Example:
              public/projects/final-year-research.png
              public/projects/analytics-dashboard.png
          */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
