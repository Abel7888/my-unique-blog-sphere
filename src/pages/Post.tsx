
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostById, getRecentPosts } from "@/utils/blogData";
import PostCard from "@/components/PostCard";
import { toast } from "@/components/ui/use-toast";

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(id ? getPostById(id) : null);
  const [isLoaded, setIsLoaded] = useState(false);
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, [id]);

  useEffect(() => {
    setPost(id ? getPostById(id) : null);
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <p className="text-muted-foreground">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <article>
          {/* Hero */}
          <div className="w-full h-[50vh] md:h-[60vh] relative">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto -mt-20 relative">
              {/* Post Header */}
              <div className="bg-white rounded-t-xl shadow-md p-8 space-y-6 animate-fade-up">
                <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft size={14} className="mr-2" />
                  Back to blog
                </Link>
                
                <div className="space-y-4">
                  <Badge>{post.category}</Badge>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={handleShare}
                      aria-label="Share"
                    >
                      <Share2 size={18} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      aria-label="Bookmark"
                    >
                      <Bookmark size={18} />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Post Content */}
              <div 
                className={`bg-white shadow-md px-8 py-12 prose prose-lg max-w-none prose-headings:font-serif prose-a:text-primary transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="bg-white shadow-md rounded-b-xl px-8 py-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag.toLowerCase()}`}
                      className="text-sm bg-secondary px-3 py-1 rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="bg-white shadow-md rounded-xl px-8 py-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">About {post.author.name}</h3>
                    <p className="text-muted-foreground mt-2">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="container mx-auto px-4 mt-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">You might also like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Post;
