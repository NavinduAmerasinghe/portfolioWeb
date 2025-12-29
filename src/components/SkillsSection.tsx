import { Code2, Database, Cloud, Wrench, Layout, Brain, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages & Frameworks",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "Spring Boot",
      "React",
      "Node.js",
      "Express.js",
      "Angular",
      "Redux",
      "PHP (Laravel)",
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Neural Networks (ANN)",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Developer", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "Docker", "Kubernetes", "GitHub/GitLab", "CI/CD"],
  },
  {
    title: "Platforms & Other Areas",
    icon: Wrench,
    skills: ["Linux", "Arduino IDE", "Raspberry Pi", "IoT", "Agile", "SDLC"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30 relative">
      <div className="absolute right-0 top-10 code-decoration">
        {/* {"const skills = [...]"} */}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A focused set of skills across software engineering, AI, cloud, and embedded systems.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
