
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import FeaturedPost from "@/components/FeaturedPost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedPosts, getRecentPosts, getCategories } from "@/utils/blogData";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(3);
  const categories = getCategories();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="w-full mt-16">
        <Hero 
          title="Thoughts, Ideas & Reflections"
          subtitle="Welcome to my personal blog where I share insights on design, technology, and productivity."
          buttonText="Browse Articles"
          minHeight="min-h-[80vh]"
        />
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div 
            className={`transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">Featured Story</h2>
            </div>
            <FeaturedPost {...featuredPosts[0]} />
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="container mx-auto px-4 py-16">
        <div 
          className={`transition-opacity duration-700 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Recent Articles</h2>
            <Button 
              asChild
              variant="ghost"
              className="group"
            >
              <Link to="/blog">
                View all
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-secondary/50 py-16">
        <div 
          className="container mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-10 text-center">Explore Topics</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/blog?category=${category.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white rounded-lg px-6 py-8 text-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:translate-y-[-5px]">
                  <h3 className="text-xl font-medium mb-2">{category}</h3>
                  <p className="text-sm text-muted-foreground">Articles about {category.toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">Stay updated with my latest thoughts</h2>
          <p className="text-muted-foreground">Subscribe to get notified when I publish new content.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-input rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button>Subscribe</Button>
          </div>
          
          <p className="text-xs text-muted-foreground">No spam, unsubscribe at any time.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
