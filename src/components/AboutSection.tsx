import React, { useMemo } from "react";

const AboutSection = () => {
  const stats = useMemo(
    () => [
      {
        id: "exp",
        value: "04+",
        labelTop: "Year",
        labelBottom: "Experience",
      },
      {
        id: "projects",
        value: "25+",
        labelTop: "Completed",
        labelBottom: "Projects",
      },
      {
        id: "companies",
        value: "03",
        labelTop: "Companies",
        labelBottom: "Worked",
      },
    ],
    []
  );

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="absolute left-0 top-0 code-decoration">
        {/* {"// about me"} */}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT: text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m a Software Engineer and Master’s student with a strong
                background in full-stack development, AI-driven systems, and
                embedded technologies. I enjoy building scalable, reliable
                software that solves real-world problems and delivers meaningful
                impact.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience spans web applications, machine learning
                workflows, IoT systems, and cloud-based platforms, combining
                clean code with thoughtful system design. I value collaboration,
                continuous learning, and translating complex ideas into
                practical solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my MSc in Software, Web & Cloud Technologies
                in Finland, I’m actively exploring opportunities to grow as an
                engineer while contributing to innovative and impactful
                projects.
              </p>
            </div>

            {/* RIGHT: quick facts + stats underneath */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="font-mono text-sm space-y-2">
                  {/* <div className="text-muted-foreground">{"// quick facts"}</div> */}

                  <div className="flex justify-between py-2 border-b border-border gap-6">
                    <span className="text-primary">location</span>
                    <span className="text-foreground whitespace-nowrap">
                      "Tampere, Finland"
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-border gap-6">
                    <span className="text-primary">education</span>
                    <span className="text-foreground whitespace-nowrap">
                      "MSc Software, Web & Cloud (TAU)"
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-border gap-6">
                    <span className="text-primary">focus</span>
                    <span className="text-foreground whitespace-nowrap">
                      "AI · Full-Stack · Cloud"
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-border gap-6">
                    <span className="text-primary">experience</span>
                    <span className="text-foreground whitespace-nowrap">
                      "Industry & Academic Projects"
                    </span>
                  </div>

                  <div className="flex justify-between py-2 gap-6">
                    <span className="text-primary">status</span>
                    <span className="text-accent whitespace-nowrap">
                      "Open to Opportunities"
                    </span>
                  </div>
                </div>
              </div>

              {/* ✅ Stats under the quick facts box (no “More”) */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.id}
                    className="bg-card border border-border rounded-xl p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="text-2xl font-bold text-foreground">
                      {s.value}
                    </div>

                    <div className="text-sm text-muted-foreground leading-tight mt-1">
                      <div>{s.labelTop}</div>
                      <div className="font-medium text-foreground/80">
                        {s.labelBottom}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional tiny note (remove if you want) */}
              {/* <p className="text-xs text-muted-foreground">
                Snapshot of experience and delivery.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
