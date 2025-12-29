import { Github, Linkedin, PenLine, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"<"}</span>
            Navindu Amerasinghe (Developer)
            <span className="text-primary">{" />"}</span>
            <span className="mx-2">•</span>
            {currentYear}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NavinduAmerasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
               href="https://www.linkedin.com/in/navindu-amerasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://navinduamerasinghe.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="PenLine"
            >
              <PenLine size={18} />
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
           Created By © Navindu Amerasinghe. 2022 All right reserved
            {/* <span className="font-mono text-primary ml-1">{"</>"}</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;