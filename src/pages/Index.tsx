
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LearningSection from "@/components/sections/LearningSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import CommandTerminal from "@/components/features/CommandTerminal";


import { useEffect } from "react";

const Index = () => {
  // Initialize animations on component mount
  useEffect(() => {
    // Register Easter egg - pressing 'M' key shows music modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'm') {
        const modal = document.getElementById('music-modal');
        if (modal && modal.classList.contains('hidden')) {
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 5000); // Hide after 5 seconds
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
       
        <ProjectsSection />
       
        <AboutSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
      <CommandTerminal />
      
      {/* Music Easter Egg Modal */}
      <div id="music-modal" className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 hidden animate-fade-in">
        <div className="bg-card border p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-xl font-bold mb-4">🎵 Currently Listening To:</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/20 rounded-md animate-pulse"></div>
            <div>
              <p className="font-medium">El Baile del Recuerdo</p>
              <p className="text-muted-foreground">Mexican Folk Classic</p>
            </div>
          </div>
          <p className="italic text-muted-foreground">Press any key to close this modal</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
