import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. in Software, Web & Cloud",
    field: "Computing Sciences and Electrical Engineering",
    institution: "Tampere University",
    location: "Finland",
    period: "2025 – Present",
    minor: "Generative Artificial Intelligence (25 ECTS)",
    current: true,
  },
  {
    degree: "B.Sc. (Hons) Information Technology",
    field: "Specialization in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Sri Lanka",
    period: "Completed",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 lg:py-32 relative">
      <div className="absolute left-0 top-20 code-decoration">
        {/* {"// education.map()"} */}
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background in software engineering and emerging technologies
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 md:p-8 border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              {edu.current && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Current
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.field}</p>
                  <p className="text-lg text-foreground/90 mb-3">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  {edu.minor && (
                    <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                      <span className="text-sm font-medium text-foreground">Minor: </span>
                      <span className="text-sm text-muted-foreground">{edu.minor}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
