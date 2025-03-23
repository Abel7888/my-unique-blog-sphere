
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { posts, getCategories } from "@/utils/blogData";
import { cn } from "@/lib/utils";

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = getCategories();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get category from URL if it exists
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [location.search]);

  useEffect(() => {
    // Filter posts based on search term and active category
    let filtered = [...posts];
    
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (activeCategory) {
      filtered = filtered.filter(
        (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, activeCategory]);

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);
    
    // Update URL
    if (newCategory) {
      navigate(`/blog?category=${newCategory.toLowerCase()}`);
    } else {
      navigate("/blog");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory(null);
    navigate("/blog");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Exploring ideas at the intersection of design, technology, and personal growth.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                      "transition-all",
                      activeCategory === category
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : ""
                    )}
                  >
                    {category}
                  </Button>
                ))}
                
                {(activeCategory || searchTerm) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="ml-2"
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
            
            {/* Results */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-12">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} {...post} variant="horizontal" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <p className="text-xl font-medium">No articles found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
