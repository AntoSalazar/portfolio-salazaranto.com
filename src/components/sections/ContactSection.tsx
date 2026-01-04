import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MapPin, MessageSquare, Github, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data object for sending to PHP
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      // Send the form data to your PHP script
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      content: "github.com/AntoSalazar",
      link: personalInfo.github
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      content: "Carlos Antonio Salazar Trinidad",
      link: personalInfo.linkedin
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex flex-col space-y-3 h-full"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                  <p className="text-muted-foreground mt-4">
                    I'm open to remote opportunities and collaborations worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}