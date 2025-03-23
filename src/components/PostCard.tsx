
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  variant?: "default" | "horizontal" | "minimal";
  featured?: boolean;
}

const PostCard = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  category,
  imageUrl,
  variant = "default",
  featured = false,
}: PostCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const current = cardRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  if (variant === "horizontal") {
    return (
      <div
        ref={cardRef}
        className={cn(
          "relative group overflow-hidden border border-border rounded-lg flex flex-col md:flex-row transition-all duration-300",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          featured ? "md:shadow-lg" : "hover:shadow-md"
        )}
      >
        {/* Image container */}
        <div className="md:w-2/5 relative overflow-hidden">
          <Link to={`/post/${id}`}>
            <div className="aspect-video md:aspect-square w-full bg-muted overflow-hidden">
              {!isLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse"></div>
              )}
              <img
                src={imageUrl}
                alt={title}
                onLoad={handleImageLoad}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                  isLoaded ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
          </Link>
          <Badge className="absolute top-4 left-4 z-10 bg-white/90 text-primary hover:bg-white">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{readTime}</span>
            </div>
          </div>

          <Link to={`/post/${id}`} className="group-hover:underline mb-3">
            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
              {title}
            </h3>
          </Link>

          <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>

          <Link
            to={`/post/${id}`}
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div
        ref={cardRef}
        className={cn(
          "group overflow-hidden transition-all duration-300",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <Link to={`/post/${id}`} className="flex items-start space-x-4">
          <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted">
            {!isLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse"></div>
            )}
            <img
              src={imageUrl}
              alt={title}
              onLoad={handleImageLoad}
              className={cn(
                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Calendar size={12} className="mr-1" />
              <span>{date}</span>
              <span className="mx-2">•</span>
              <Clock size={12} className="mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Default card layout
  return (
    <div
      ref={cardRef}
      className={cn(
        "group overflow-hidden border border-border rounded-lg transition-all duration-300",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        featured ? "shadow-lg" : "hover:shadow-md"
      )}
    >
      {/* Image container */}
      <div className="relative overflow-hidden">
        <Link to={`/post/${id}`}>
          <div className="aspect-video w-full bg-muted overflow-hidden">
            {!isLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse"></div>
            )}
            <img
              src={imageUrl}
              alt={title}
              onLoad={handleImageLoad}
              className={cn(
                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </Link>
        <Badge className="absolute top-4 left-4 z-10 bg-white/90 text-primary hover:bg-white">
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link to={`/post/${id}`} className="group-hover:underline">
          <h3 className="text-xl font-semibold leading-tight mb-3">{title}</h3>
        </Link>

        <p className="text-muted-foreground mb-4">{excerpt}</p>

        <Link
          to={`/post/${id}`}
          className="text-primary font-medium hover:underline inline-flex items-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
