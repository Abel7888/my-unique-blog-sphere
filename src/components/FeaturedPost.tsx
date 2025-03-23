
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FeaturedPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const FeaturedPost = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  category,
  imageUrl,
}: FeaturedPostProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-muted">
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        <img
          src={imageUrl}
          alt={title}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="p-6 md:p-8 w-full max-w-3xl mx-auto text-white">
          <div className="space-y-4">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-transparent">
              {category}
            </Badge>
            
            <Link to={`/post/${id}`}>
              <h2 className="text-2xl md:text-4xl font-bold hover:underline decoration-1 underline-offset-4 leading-tight">
                {title}
              </h2>
            </Link>
            
            <p className="text-white/80 text-base md:text-lg line-clamp-2">
              {excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1.5" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1.5" />
                <span>{readTime}</span>
              </div>
            </div>
            
            <Button 
              asChild
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-black mt-2 group"
            >
              <Link to={`/post/${id}`}>
                Read article 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
