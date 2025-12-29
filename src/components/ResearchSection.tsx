import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title:
      "Real-Time Road Safety: A Web and Mobile Application Approach to Mitigating Animal-Vehicle Conflicts in Sri Lanka",
    authors:
      "Amerasinghe, N.D.K.; Jayakody, Anuradha (Professor); Pradeep Kumara, P.K.P.M.",
    journal:
      "International Journal of Innovative Science and Research Technology (IJISRT)",
    year: "2024",
    abstract:
      "This study presents a real-time road safety system combining web and mobile applications to mitigate animal-vehicle conflicts in Sri Lanka. The solution integrates geofencing, live alerts, and intelligent monitoring to improve driver awareness and reduce wildlife collisions in high-risk areas.",
    doi: "https://www.scribd.com/document/785090682/Real-Time-Road-Safety-A-Web-and-Mobile-Application-Approach-to-Mitigating-Animal-Vehicle-Conflicts-in-Sri-Lanka",
    pdf: "#", 
    tags: [
      "Road Safety",
      "Animal-Vehicle Collision",
      "Web & Mobile Applications",
      "Geofencing",
      "IoT",
    ],
  },
  {
    title:
      "IoT-Enhanced Smart Surveillance System for Wildlife Collision Prevention on Sri Lankan Roads",
    authors:
      "Amerasinghe, N.D.K.; Udara, I.W.A.S.; Somabandu, B.P.S.; Jayakody, J.A.B.U.; Amaraseena, N.; De Zoysa, R.",
    journal:
      "International Journal of Innovative Science and Research Technology (IJISRT)",
    year: "2023",
    abstract:
      "This paper proposes an IoT-enhanced smart surveillance system designed to prevent wildlife-vehicle collisions on Sri Lankan roads. The system integrates sensors, real-time monitoring, and alert mechanisms to detect animal presence and proactively warn drivers in wildlife-prone regions.",
    doi: "https://www.scribd.com/document/681505017/IoT-Enhanced-Smart-Surveillance-System-for-Wildlife-Collision-Prevention-on-Sri-Lankan-Roads", 
    pdf: "#",
    tags: [
      "IoT",
      "Smart Surveillance",
      "Wildlife Protection",
      "Embedded Systems",
      "Road Safety",
    ],
  },
  {
    title:
      "Problems Faced by the Agricultural Sector and Solutions for the Impending Food Crisis in Sri Lanka",
    authors:
      "Amerasinghe, N.D.K.; Udara, S.; Somabandu, B.P.S.; Jayakody, B.; ",
    journal:
      "International Journal of Engineering and Management Research (IJEMR)",
    year: "2022",
    abstract:
      "This research analyzes key challenges faced by Sri Lanka’s agricultural sector, including resource limitations, policy gaps, and technological constraints. It proposes strategic and technology-driven solutions to mitigate the impending food crisis and improve agricultural sustainability.",
    doi: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248740",
    pdf: "#",
    tags: [
      "Agriculture",
      "Food Security",
      "Sustainability",
      "Policy Analysis",
      "Sri Lanka",
    ],
  },
];


const ResearchSection = () => {
  return (
    <section id="research" className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="absolute right-0 top-20 code-decoration">
        {/* {"// research.publications[]"} */}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Research Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic contributions and research work in software engineering and AI
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {pub.journal} • {pub.year}
                    </p>
                    <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        asChild
                      >
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          DOI
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        asChild
                      >
                        <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-3 h-3 mr-1" />
                          PDF
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
