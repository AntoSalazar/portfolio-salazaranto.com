import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MoodThemeToggle } from "./MoodThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");
      
      if (scrollPosition > 100) {
        if (scrollPosition > prevScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      
      setPrevScrollY(scrollPosition);
      
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 font-mono text-lg font-semibold">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="hidden sm:inline text-primary transition-all duration-300 group-hover:rotate-90">
                &lt;
              </span>
              <span className="relative">
                Anto Salazar
                <span className="absolute inset-0 bg-primary/10 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
              <span className="hidden sm:inline text-primary transition-all duration-300 group-hover:-rotate-90">
                /&gt;
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex md:space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground/80
                  before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-primary
                  before:transition-all before:duration-300 hover:before:w-full
                  ${activeSection === link.href.substring(1) ? "text-primary before:w-full" : ""}
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            {/* Only show MoodThemeToggle on desktop */}
            <div className="hidden md:block">
              <MoodThemeToggle />
            </div>
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b pb-4 animate-fade-in">
          <nav className="flex flex-col space-y-0 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  py-3 border-b border-border/30 last:border-0
                  ${activeSection === link.href.substring(1) ? "text-primary font-medium" : ""}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="py-3 border-t border-border/30">
              <div className="flex justify-center">
                <MoodThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}