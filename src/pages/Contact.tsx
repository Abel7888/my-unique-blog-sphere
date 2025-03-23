
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-up">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Contact Me</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a question, suggestion, or just want to say hello? I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-secondary/30 p-6 rounded-lg text-center flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">hello@yourdomain.com</p>
                <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg text-center flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
                <p className="text-sm text-muted-foreground">Available for local meetups</p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg text-center flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">Available upon request</p>
                <p className="text-sm text-muted-foreground">For urgent matters only</p>
              </div>
            </div>
            
            <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-semibold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your message..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
                
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-semibold">Let's Connect</h3>
                    <p className="text-muted-foreground">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider">Follow Me</h4>
                      <div className="flex space-x-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          GitHub
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Office Hours</h4>
                      <p className="text-muted-foreground">Monday – Friday: 9:00am – 5:00pm</p>
                      <p className="text-muted-foreground">Weekend: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
