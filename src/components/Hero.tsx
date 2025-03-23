
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  overlayOpacity?: string;
  centered?: boolean;
  minHeight?: string;
}

const Hero = ({
  title = "Welcome to My Blog",
  subtitle = "A collection of thoughts, experiences, and ideas.",
  showButton = true,
  buttonText = "Read Latest",
  buttonLink = "/blog",
  backgroundImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
  overlayOpacity = "bg-black/30",
  centered = true,
  minHeight = "min-h-[70vh]"
}: HeroProps) => {
  return (
    <div 
      className={`relative w-full ${minHeight} flex items-center`}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      </div>

      {/* Content */}
      <div 
        className={`container mx-auto px-4 relative z-10 ${
          centered ? "text-center" : "text-left"
        }`}
      >
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {showButton && (
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-all group"
              >
                <Link to={buttonLink}>
                  {buttonText}
                  <ArrowRight 
                    size={16} 
                    className="ml-2 transition-transform group-hover:translate-x-0.5" 
                  />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
