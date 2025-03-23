
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 animate-fade-up">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">About Me</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Hello, I'm [Your Name]</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a writer, thinker, and creator passionate about sharing ideas that matter. 
                  This blog is my digital garden—a place where I cultivate thoughts on design, 
                  technology, productivity, and personal growth.
                </p>
              </div>
            </div>
            
            <div className="mt-12 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="mt-12 space-y-8 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">My Story</h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p>
                  For over a decade, I've been exploring the intersection of technology and creativity. 
                  My background spans design, development, and strategic thinking—but my true passion is 
                  communicating complex ideas in accessible ways.
                </p>
                
                <p>
                  I started this blog as a way to organize my thoughts and share what I'm learning. 
                  Writing has always been my preferred method for processing information and refining ideas. 
                  By making these reflections public, I hope to connect with others who share similar interests 
                  and spark meaningful conversations.
                </p>
                
                <p>
                  When I'm not writing, you might find me experimenting with new technologies, 
                  reading widely across disciplines, or exploring the outdoors. I believe in continuous 
                  learning and finding inspiration in unexpected places.
                </p>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">What I Write About</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Design & Technology</h3>
                  <p className="text-muted-foreground">
                    Exploring user experience, minimalism, and the tools that shape our digital world.
                  </p>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Productivity & Growth</h3>
                  <p className="text-muted-foreground">
                    Systems for thinking better, working smarter, and developing valuable skills.
                  </p>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Creative Process</h3>
                  <p className="text-muted-foreground">
                    Insights into how I approach projects, solve problems, and generate ideas.
                  </p>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Future Trends</h3>
                  <p className="text-muted-foreground">
                    Exploring emerging technologies and how they might shape our lives.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">Connect With Me</h2>
              <p className="text-muted-foreground">
                I love hearing from readers. Whether you want to discuss an article, suggest a topic, 
                or explore a collaboration, don't hesitate to reach out.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">
                    <Mail size={18} className="mr-2" />
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter size={18} className="mr-2" />
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
