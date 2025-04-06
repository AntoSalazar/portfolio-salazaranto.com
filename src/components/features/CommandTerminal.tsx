
import { useState, useRef, useEffect } from "react";
import { Command, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommandTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to my interactive terminal! 🖥️",
    "Type 'help' to see available commands..."
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Available commands and their responses
  const commands: Record<string, string> = {
    help: "Available commands: about, skills, projects, contact, clear, exit",
    about: "🧑‍💻 Anto Salazar - Software Engineer & Backend Developer from Mexico. Passionate about building scalable, efficient systems.",
    skills: "🛠️ Node.js, TypeScript, Express, React.js, Flutter, PostgreSQL, Docker, Azure.",
    projects: "🚀 Currently working on an eCommerce platform and AI-powered WhatsApp assistant. Check the Projects section for more!",
    contact: "📬 Reach me at your-email@example.com or connect on GitHub and LinkedIn.",
    clear: "CLEAR_COMMAND",
    exit: "EXIT_COMMAND"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    let response = `Command not found: ${cmd}. Type 'help' for available commands.`;

    if (commands[cmd]) {
      if (cmd === "clear") {
        setOutput([]);
        setInput("");
        return;
      } else if (cmd === "exit") {
        setIsOpen(false);
        setInput("");
        return;
      } else {
        response = commands[cmd];
      }
    }

    setOutput(prev => [...prev, `> ${input}`, response]);
    setInput("");
    
    // Scroll to bottom after output update
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg"
        size="icon"
        aria-label="Open terminal"
      >
        <Command className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <div className="fixed inset-x-4 bottom-4 md:inset-auto md:right-6 md:bottom-6 md:w-96 h-80 bg-card border rounded-lg shadow-lg z-40 animate-slide-up">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Command className="w-4 h-4 text-primary" />
          <h3 className="font-mono text-sm font-medium">Terminal</h3>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-7 w-7" 
          onClick={() => setIsOpen(false)}
          aria-label="Close terminal"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div 
        ref={terminalRef}
        className="p-4 h-[calc(100%-40px)] overflow-y-auto font-mono text-sm"
      >
        {output.map((line, i) => (
          <div 
            key={i} 
            className={`mb-1 ${line.startsWith('>') ? 'text-primary' : ''}`}
          >
            {line}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-primary mr-2">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
};

export default CommandTerminal;
