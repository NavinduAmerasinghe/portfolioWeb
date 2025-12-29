import { useState } from "react";
import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  link?: { label: string; url: string };
}

const educationData: TimelineItem[] = [
  {
    id: "msc",
    title:
      "M.Sc. in Software, Web & Cloud, Computing Sciences and Electrical Engineering",
    institution: "Tampere University, Finland",
    period: "2025 – Present",
    description:
      "Master’s studies focused on scalable software engineering, cloud-native systems, distributed architectures, DevOps, and modern web technologies, combining research-driven coursework with practical lab-based development.",
    highlights: [
      "Minor in Generative Artificial Intelligence (25 ECTS)",
      "Focus on scalable software engineering, cloud-native systems, distributed architectures, DevOps, and modern web technologies",
      "Experience designing complex software systems, big-data applications, IoT integrations, and secure software development",
      "Hands-on coursework with Software Engineering Research Center & GPTLab",
      "LLM fine-tuning, deep learning, AI fundamentals, and MLOps concepts",
      "Practical experience with neural networks, model training, evaluation, and LLM fine-tuning",
    ],
    link: {
      label: "Tampere University",
      url: "https://www.tuni.fi/en/study-with-us/software-web-cloud-computing-sciences-and-electrical-engineering",
    },
  },
  {
    id: "bsc",
    title:
      "B.Sc. (Hons) Information Technology — Specialization in Software Engineering",
    institution:
      "Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka",
    period: "2020 – 2023",
    description:
      "Undergraduate degree specializing in Software Engineering, building strong foundations in software development and modern engineering practices through team projects and applied learning.",
    highlights: [
      "Specialization in Software Engineering",
      "Graduated with Second Upper Class Honours",
      "Served as project lead for multiple team-based web and mobile development projects",
    ],
    link: { label: "SLIIT University", url: "https://www.sliit.lk/" },
  },
];

const certificationsData: TimelineItem[] = [
  {
    id: "google-it-automation",
    title: "Google IT Automation with Python Professional Certificate",
    institution: "Google (Coursera)",
    period: "Completed",
    description:
      "Professional certificate covering Python automation, scripting, Git, troubleshooting, and basic IT systems skills for real-world automation tasks.",
    highlights: [
      "Python scripting for automation and system tasks",
      "Version control with Git and GitHub",
      "Troubleshooting and debugging techniques",
      "Automation concepts for IT workflows",
    ],
    // link: { label: "View Certificate", url: "#" },
  },
  {
    id: "cs50-ai",
    title: "CS50’s Introduction to Artificial Intelligence with Python",
    institution: "HarvardX (edX)",
    period: "Completed",
    description:
      "Foundational AI course covering search, knowledge representation, machine learning, and reinforcement learning using Python.",
    highlights: [
      "AI fundamentals: search, optimization, and probabilistic reasoning",
      "Machine learning basics and model evaluation",
      "Hands-on Python assignments and problem solving",
    ],
    // link: { label: "View Certificate", url: "#" },
  },
  {
    id: "azure-path",
    title: "Microsoft Azure Certifications Path (In Progress)",
    institution: "Microsoft",
    period: "Currently Following",
    description:
      "Following the Microsoft certification path to strengthen cloud fundamentals, administration, security, and DevOps capabilities on Azure.",
    highlights: [
      "AZ-900 (Azure Fundamentals)",
      "AZ-104 (Azure Administrator)",
      "AZ-500 (Azure Security Engineer)",
      "MS-900 (Microsoft 365 Fundamentals)",
      "MS-102 (Microsoft 365 Administrator)",
    ],
    // link: { label: "Microsoft Learn", url: "#" },
  },
  {
    id: "docker-cka",
    title: "Docker & CKA (Kubernetes) Certification",
    institution: "Docker / CNCF (Kubernetes)",
    period: "Planned / In Progress",
    description:
      "Building containerization and Kubernetes administration skills for deploying scalable applications using Docker and Kubernetes tooling.",
    highlights: [
      "Container fundamentals with Docker",
      "Kubernetes workloads, networking, and storage basics",
      "Cluster operations and deployment workflows",
    ],
    // link: { label: "Learning Track", url: "#" },
  },
  {
    id: "ml-dl-python",
    title: "Machine Learning & Deep Learning with Python",
    institution: "Online Coursework",
    period: "Completed / Ongoing",
    description:
      "Coursework focused on ML and deep learning fundamentals with hands-on model building in Python using popular libraries.",
    highlights: [
      "Supervised/unsupervised learning basics",
      "Neural networks and training workflows",
      "Practical model experimentation in Python",
    ],
    // link: { label: "Course Link", url: "#" },
  },
];

const QualificationSection = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(
    educationData[0]
  );

  const currentData =
    activeTab === "education" ? educationData : certificationsData;

  const handleItemClick = (item: TimelineItem) => {
    setSelectedItem(item);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSelectedItem(value === "education" ? educationData[0] : certificationsData[0]);
  };

  return (
    <section id="qualification" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="absolute right-0 top-20 code-decoration">
        {/* {"// journey.timeline()"} */}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Qualification</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My personal journey through education and certifications
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-secondary/50">
            <TabsTrigger
              value="education"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>

            <TabsTrigger
              value="certifications"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Award className="w-4 h-4" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-8">
                  {currentData.map((item) => (
                    <div
                      key={item.id}
                      className={`relative pl-12 cursor-pointer group transition-all duration-300 ${
                        selectedItem?.id === item.id
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-100"
                      }`}
                      onClick={() => handleItemClick(item)}
                      onKeyDown={(e) => e.key === "Enter" && handleItemClick(item)}
                      tabIndex={0}
                      role="button"
                      aria-pressed={selectedItem?.id === item.id}
                    >
                      <div
                        className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedItem?.id === item.id
                            ? "bg-primary border-primary scale-110"
                            : "bg-background border-border group-hover:border-primary/50"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            selectedItem?.id === item.id
                              ? "bg-primary-foreground"
                              : "bg-primary"
                          }`}
                        />
                      </div>

                      <div
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          selectedItem?.id === item.id
                            ? "bg-card border-primary shadow-glow"
                            : "bg-card/50 border-border hover:border-primary/30"
                        }`}
                      >
                        <h3 className="font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-2">
                          {item.institution}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Panel */}
              <div className="lg:sticky lg:top-24 h-fit">
                {selectedItem && (
                  <div
                    key={selectedItem.id}
                    className="bg-card rounded-xl p-6 border border-border animate-fade-in"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {selectedItem.institution}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {selectedItem.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 text-sm"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {selectedItem.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={selectedItem.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {selectedItem.link.label}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default QualificationSection;
