
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  imageUrl: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "The Art of Minimalist Design",
    excerpt: "Exploring how less becomes more in modern digital interfaces and why minimalism continues to dominate design trends.",
    content: `
      <p>Minimalism in design is more than just a visual aesthetic—it's a philosophy that embraces simplicity, functionality, and thoughtful restraint. In today's digital landscape, where user attention is increasingly fragmented, minimalist design offers a clear path to effective communication.</p>
      
      <h2>The Core Principles</h2>
      <p>At its heart, minimalist design is guided by the mantra "less is more." This approach focuses on:</p>
      <ul>
        <li>Removing unnecessary elements</li>
        <li>Using negative space strategically</li>
        <li>Employing limited color palettes</li>
        <li>Prioritizing typography and hierarchy</li>
        <li>Creating intuitive, frictionless experiences</li>
      </ul>
      
      <p>These principles combine to create interfaces that not only look beautiful but also function with remarkable efficiency. Users are guided naturally through content without the cognitive load that comes with more complex designs.</p>
      
      <h2>Beyond Aesthetics</h2>
      <p>While minimalism is often recognized by its visual characteristics, its true power lies in how it shapes the entire user experience. Minimalist designs typically load faster, adapt better to different screen sizes, and allow users to focus on what truly matters.</p>
      
      <p>As we move forward in the digital age, the minimalist approach continues to evolve while staying true to its core values. The most successful implementations don't just strip away elements arbitrarily—they thoughtfully consider each component's purpose and value.</p>
      
      <h2>Implementing Minimalism</h2>
      <p>For designers looking to embrace minimalism, the journey begins not with subtraction but with purpose. Start by clearly defining what your interface needs to accomplish, then build upward from there, adding only what serves your users and your goals.</p>
      
      <p>Remember that minimalism isn't about making something empty—it's about making space for what matters most.</p>
    `,
    date: "April 15, 2023",
    readTime: "5 min read",
    category: "Design",
    tags: ["Design", "Minimalism", "UX", "Trends"],
    author: {
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=11",
      bio: "Senior UX Designer with a passion for creating clean, functional interfaces."
    },
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "2",
    title: "The Future of Remote Work",
    excerpt: "How distributed teams are reshaping corporate culture and what it means for the future of work.",
    content: `
      <p>The global shift to remote work, accelerated by recent world events, has fundamentally changed how we think about the workplace. What began as a temporary measure has evolved into a permanent transformation for many organizations, revealing both new challenges and unexpected opportunities.</p>
      
      <h2>The New Normal</h2>
      <p>Remote work is no longer the exception—for many industries, it's becoming the rule. Companies that have embraced this change are discovering:</p>
      
      <ul>
        <li>Expanded talent pools no longer limited by geography</li>
        <li>Reduced overhead costs for physical office space</li>
        <li>Increased employee satisfaction and retention</li>
        <li>Improved work-life balance possibilities</li>
      </ul>
      
      <p>However, this shift doesn't come without its challenges. Organizations must navigate issues of connection, collaboration, and company culture in digital environments.</p>
      
      <h2>Building Digital-First Culture</h2>
      <p>As we move forward, the most successful companies won't just permit remote work—they'll design their entire operational model around it. This means rethinking everything from communication practices to performance metrics.</p>
      
      <p>Digital-first cultures prioritize asynchronous communication, documentation, and results over presence. They invest in tools and processes that enable seamless collaboration across time zones and create intentional opportunities for human connection in virtual settings.</p>
      
      <h2>The Hybrid Future</h2>
      <p>While fully remote models work for some organizations, many are finding value in hybrid approaches that combine the flexibility of remote work with the collaborative benefits of in-person interaction. These models require thoughtful design to ensure they don't create two-tiered systems where remote employees have different experiences and opportunities than their in-office counterparts.</p>
      
      <p>As we navigate this evolving landscape, one thing is clear: there's no going back to the old normal. The future of work will be more flexible, more digital, and potentially more human than ever before—if we design it that way.</p>
    `,
    date: "May 22, 2023",
    readTime: "6 min read",
    category: "Productivity",
    tags: ["Remote Work", "Productivity", "Culture", "Future"],
    author: {
      name: "Samantha Wu",
      avatar: "https://i.pravatar.cc/150?img=5",
      bio: "Researcher and writer focusing on workplace transformation and organizational psychology."
    },
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    title: "Understanding Modern JavaScript Frameworks",
    excerpt: "A comprehensive comparison of React, Vue, and Angular to help you choose the right tool for your next project.",
    content: `
      <p>The JavaScript ecosystem continues to evolve at a rapid pace, with frameworks like React, Vue, and Angular dominating frontend development. Each offers a unique approach to building web applications, with distinct philosophies and trade-offs.</p>
      
      <h2>React: The Flexible Library</h2>
      <p>React, developed and maintained by Facebook, isn't technically a full framework—it's a library focused on building user interfaces through composable components. Its key characteristics include:</p>
      
      <ul>
        <li>A virtual DOM for optimized rendering</li>
        <li>Component-based architecture</li>
        <li>Unidirectional data flow</li>
        <li>A vast ecosystem of supporting libraries</li>
      </ul>
      
      <p>React excels in flexibility, allowing developers to choose their own tools for routing, state management, and more. This freedom comes with the cost of additional decision-making and potentially more complex project setup.</p>
      
      <h2>Vue: The Progressive Framework</h2>
      <p>Vue positions itself as a progressive framework, meaning you can adopt it incrementally. It offers:</p>
      
      <ul>
        <li>Gentle learning curve</li>
        <li>Intuitive template syntax</li>
        <li>Built-in state management and routing options</li>
        <li>Strong performance</li>
      </ul>
      
      <p>Vue's approach strikes a balance between structure and flexibility, making it popular for both small projects and larger applications.</p>
      
      <h2>Angular: The Complete Platform</h2>
      <p>Angular, backed by Google, provides a complete development platform with:</p>
      
      <ul>
        <li>Comprehensive tooling</li>
        <li>Built-in solutions for common challenges</li>
        <li>TypeScript integration</li>
        <li>Dependency injection system</li>
      </ul>
      
      <p>Angular's opinionated structure offers benefits for larger teams and enterprise applications, though it comes with a steeper learning curve.</p>
      
      <h2>Making the Right Choice</h2>
      <p>There's no universally "best" framework—each excels in different scenarios. Consider your team's experience, project requirements, and long-term maintenance needs when making your selection.</p>
      
      <p>Remember that these frameworks are tools, not silver bullets. The most important factor in your project's success will be how well you use the tool you choose, not which tool you select.</p>
    `,
    date: "June 10, 2023",
    readTime: "8 min read",
    category: "Technology",
    tags: ["JavaScript", "Frameworks", "Frontend", "Development"],
    author: {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/150?img=8",
      bio: "Full-stack developer with 10+ years of experience building modern web applications."
    },
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
  },
  {
    id: "4",
    title: "The Psychology of User Experience",
    excerpt: "How understanding human psychology can help create more intuitive and engaging digital products.",
    content: `
      <p>At the intersection of design and psychology lies the secret to creating truly compelling user experiences. By understanding how the human mind works, designers can craft interfaces that feel intuitive, reduce cognitive load, and create positive emotional responses.</p>
      
      <h2>Cognitive Principles in Design</h2>
      <p>Several key psychological principles inform effective UX design:</p>
      
      <h3>Mental Models</h3>
      <p>Users come to your product with preexisting expectations based on their past experiences. Aligning your design with these mental models reduces learning curves and makes interactions feel natural.</p>
      
      <h3>Cognitive Load</h3>
      <p>The human mind has limited processing capacity. Good design minimizes unnecessary cognitive burden by:</p>
      <ul>
        <li>Breaking complex tasks into manageable steps</li>
        <li>Using familiar patterns and conventions</li>
        <li>Providing clear visual hierarchies</li>
        <li>Hiding complexity until needed</li>
      </ul>
      
      <h3>Gestalt Principles</h3>
      <p>These principles explain how we perceive and organize visual information, including:</p>
      <ul>
        <li>Proximity: Elements close together appear related</li>
        <li>Similarity: Similar elements appear grouped</li>
        <li>Continuity: We perceive continuous patterns</li>
        <li>Closure: We automatically complete incomplete forms</li>
      </ul>
      
      <h2>Emotional Design</h2>
      <p>Beyond usability, great experiences connect emotionally with users. Don Norman's three levels of emotional design provide a useful framework:</p>
      
      <ul>
        <li>Visceral: Immediate emotional response to appearance</li>
        <li>Behavioral: Feelings related to use and functionality</li>
        <li>Reflective: Long-term relationship and personal satisfaction</li>
      </ul>
      
      <p>By designing for all three levels, you create products that not only work well but also forge emotional connections with users.</p>
      
      <h2>The Psychology of Engagement</h2>
      <p>Understanding motivation and behavior helps create engaging experiences. Concepts like variable rewards, progress indication, and appropriate challenge levels can significantly impact user engagement and retention.</p>
      
      <p>The most successful digital products don't just meet functional needs—they understand and respond to deeply human psychological needs for competence, autonomy, and relatedness.</p>
    `,
    date: "July 5, 2023",
    readTime: "7 min read",
    category: "UX",
    tags: ["Psychology", "UX", "Design", "User Research"],
    author: {
      name: "Maya Johnson",
      avatar: "https://i.pravatar.cc/150?img=9",
      bio: "Cognitive psychologist turned UX researcher, specializing in behavior-driven design."
    },
    imageUrl: "https://images.unsplash.com/photo-1581091016370-32243a7688c8?auto=format&fit=crop&q=80"
  },
  {
    id: "5",
    title: "Sustainable Web Design Practices",
    excerpt: "How digital designers can reduce environmental impact while creating beautiful, functional web experiences.",
    content: `
      <p>The environmental impact of digital products is often overlooked, but the reality is that websites and applications consume energy, contribute to carbon emissions, and have a measurable ecological footprint. Sustainable web design seeks to address these issues while maintaining exceptional user experiences.</p>
      
      <h2>The Carbon Footprint of the Web</h2>
      <p>Every byte transferred, every server running, and every device rendering a webpage consumes energy. While individual impacts might seem small, the cumulative effect is significant:</p>
      
      <ul>
        <li>The internet produces approximately 3.7% of global carbon emissions</li>
        <li>This is comparable to the aviation industry</li>
        <li>These emissions are projected to double by 2025</li>
      </ul>
      
      <h2>Principles of Sustainable Web Design</h2>
      
      <h3>Efficiency</h3>
      <p>Creating lean, efficient digital products that consume less energy:</p>
      <ul>
        <li>Optimizing image and media files</li>
        <li>Minimizing HTTP requests</li>
        <li>Using efficient coding practices</li>
        <li>Implementing proper caching strategies</li>
      </ul>
      
      <h3>Renewable Energy</h3>
      <p>Supporting the transition to cleaner energy sources:</p>
      <ul>
        <li>Selecting hosting providers powered by renewable energy</li>
        <li>Considering server locations and their energy sources</li>
      </ul>
      
      <h3>User Experience</h3>
      <p>Designing for efficiency and purpose:</p>
      <ul>
        <li>Creating intuitive navigation that helps users find information quickly</li>
        <li>Removing unnecessary features and content</li>
        <li>Designing for inclusivity to reduce the need for alternative resources</li>
      </ul>
      
      <h2>Measuring Impact</h2>
      <p>Several tools can help assess and improve the sustainability of web projects:</p>
      <ul>
        <li>Website Carbon Calculator</li>
        <li>Lighthouse performance audits</li>
        <li>Sustainable Web Design resources</li>
      </ul>
      
      <p>The good news is that sustainable web design principles often align with other best practices: faster websites provide better user experiences, require less bandwidth, and consume less energy. By embracing these principles, designers can create work that's not only beautiful and functional but also environmentally responsible.</p>
    `,
    date: "August 18, 2023",
    readTime: "6 min read",
    category: "Design",
    tags: ["Sustainability", "Web Design", "Environment", "Performance"],
    author: {
      name: "Thomas Green",
      avatar: "https://i.pravatar.cc/150?img=7",
      bio: "Sustainable design advocate and front-end developer with a background in environmental science."
    },
    imageUrl: "https://images.unsplash.com/photo-1587613864321-834a96a608b2?auto=format&fit=crop&q=80"
  },
  {
    id: "6",
    title: "The Rise of No-Code Development",
    excerpt: "How no-code platforms are democratizing software development and what it means for professional developers.",
    content: `
      <p>The no-code movement represents one of the most significant shifts in software development in recent years, empowering non-technical users to create applications without writing traditional code. This democratization of development is reshaping how businesses approach digital transformation.</p>
      
      <h2>What Is No-Code?</h2>
      <p>No-code platforms provide visual interfaces for building applications through techniques like:</p>
      <ul>
        <li>Drag-and-drop interfaces</li>
        <li>Pre-built templates and components</li>
        <li>Visual workflow builders</li>
        <li>Intuitive data modeling tools</li>
      </ul>
      
      <p>These tools abstract away the complexity of traditional programming, making software development accessible to business analysts, marketers, entrepreneurs, and other non-technical users.</p>
      
      <h2>Benefits and Limitations</h2>
      
      <h3>Benefits</h3>
      <ul>
        <li>Dramatically reduced development time</li>
        <li>Lower costs compared to traditional development</li>
        <li>Empowerment of domain experts to build their own solutions</li>
        <li>Reduced dependency on technical resources</li>
        <li>Rapid prototyping and iteration</li>
      </ul>
      
      <h3>Limitations</h3>
      <ul>
        <li>Constraints on customization and flexibility</li>
        <li>Potential scalability challenges</li>
        <li>Vendor lock-in concerns</li>
        <li>Performance limitations for complex applications</li>
      </ul>
      
      <h2>The Future of Development</h2>
      <p>Rather than replacing professional developers, no-code tools are changing their role. Developers are increasingly focusing on:</p>
      <ul>
        <li>Building complex systems that exceed no-code capabilities</li>
        <li>Creating integrations and extensions for no-code platforms</li>
        <li>Addressing performance optimization and security concerns</li>
        <li>Collaborating with business users in no-code environments</li>
      </ul>
      
      <p>This shift represents not an elimination of development skills but a transformation in how they're applied—with increased focus on higher-value problems and deeper technical challenges.</p>
      
      <h2>Finding the Right Balance</h2>
      <p>The most successful organizations don't view the choice as binary between traditional development and no-code. Instead, they're adopting hybrid approaches that leverage the strengths of each approach for different use cases, creating a continuum from no-code to low-code to traditional development.</p>
      
      <p>As these tools continue to evolve, the line between "developer" and "user" will continue to blur, potentially leading to more collaborative, efficient, and innovative software development ecosystems.</p>
    `,
    date: "September 3, 2023",
    readTime: "7 min read",
    category: "Technology",
    tags: ["No-Code", "Development", "Digital Transformation", "Future"],
    author: {
      name: "Elena Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=6",
      bio: "Product strategist and no-code expert helping organizations leverage visual development."
    },
    imageUrl: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80"
  }
];

export function getFeaturedPosts() {
  return posts.filter(post => post.featured);
}

export function getRecentPosts(count = 3) {
  return [...posts].slice(0, count);
}

export function getPostById(id: string) {
  return posts.find(post => post.id === id);
}

export function getPostsByCategory(category: string) {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export function getCategories() {
  return Array.from(new Set(posts.map(post => post.category)));
}
