import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, User } from "lucide-react";
import Header from "@/components/Header";

// Import blog post images
import customerSuccessMindsetImage from "@/assets/blog-customer-success-mindset-wiift.jpg";
import waterfallToScrumImage from "@/assets/blog-waterfall-to-scrum-transition.jpg";
import customerSuccessStrategyImage from "@/assets/blog-customer-success-strategy.jpg";
import digitalTransformationImage from "@/assets/blog-digital-transformation-cx.jpg";
import highPerformanceTeamsImage from "@/assets/blog-high-performance-teams.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
  image: string;
  imageAlt: string;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "\"What's In It for Them?\" – A Crucial Mindset for Customer Success (and Beyond)",
    excerpt: "In the world of Customer Success, one truth stands out above the rest: Every interaction is an opportunity to deliver value, not just service. This simple phrase is more than a mindset. It's a principle that can elevate relationships, deepen engagement, and drive long-term growth.",
    date: "December 2024",
    readTime: "5 min read",
    category: "Customer Success",
    url: "https://www.linkedin.com/pulse/whats-them-crucial-mindset-customer-success-beyond-mrinal-mondal-sebcf/",
    image: customerSuccessMindsetImage,
    imageAlt: "Professional illustration showing customer-centric mindset with interconnected people and value-focused business strategy elements",
    content: `In the world of Customer Success, one truth stands out above the rest: Every interaction is an opportunity to deliver value, not just service.

Whether you're onboarding a customer, solving an issue, or conducting a strategic business review, there's a powerful question that should guide every word and action:

> "What's in it for them?"

This simple phrase is more than a mindset. It's a principle. One that, when practiced consistently, has the power to elevate relationships, deepen engagement, and drive long-term growth — not just for your customer, but for you and your organization as well.

### Why "What's In It for Them?" Matters

Too often, we approach conversations with an internal lens:
- What do I need to convey?
- What updates do I want to share?
- What product features do I want them to use?

While this may feel efficient, it often misses the mark. Because customers aren't looking for more information — they're looking for more value.

When you reframe every touchpoint around their perspective, you shift from being a service provider to a strategic partner.

## Here's how this mindset adds impact:

### 🎯 1. You Create Relevance
By tailoring your message to what matters most to the customer — their KPIs, challenges, or goals — you earn their attention. Relevance builds trust and signals empathy.

### 🤝 2. You Strengthen Relationships
Customers want to feel seen and understood. When they sense that you "get" them and their needs, it strengthens emotional connection — the cornerstone of loyalty.

### 🚀 3. You Drive Adoption and Outcomes
It's not about showing off features; it's about highlighting outcomes. What problem does this feature solve for them? What benefit does this process unlock?

### 💼 4. You Elevate Every Role You Play
This mindset isn't limited to Customer Success. Sales professionals, consultants, project managers, even team leads — anyone who interacts with people — benefits by focusing on the other side of the table.`
  },
  {
    id: "2",
    title: "Transitioning from Waterfall to Scrum: A Smooth Transformation",
    excerpt: "In today's rapidly evolving business landscape, agility is the name of the game. Many organizations are embracing Scrum methodology to enhance their project management capabilities and deliver value faster.",
    date: "October 2023",
    readTime: "4 min read",
    category: "Project Management",
    url: "https://www.linkedin.com/pulse/transitioning-from-waterfall-scrum-smooth-your-team-mrinal-mondal-87tqc/",
    image: waterfallToScrumImage,
    imageAlt: "Modern office environment showing agile transformation with sprint boards, team collaboration, and project management workflow diagrams"
  },
  {
    id: "3",
    title: "Customer Success Strategy and Implementation",
    excerpt: "Exploring advanced strategies for customer success teams to drive growth, improve retention, and create lasting value for clients in the modern business environment.",
    date: "November 2024",
    readTime: "6 min read",
    category: "Customer Success",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7341683724364779520/",
    image: customerSuccessStrategyImage,
    imageAlt: "Professional business setting with customer success analytics, growth charts, and strategic planning elements"
  },
  {
    id: "4",
    title: "Digital Transformation in Customer Experience",
    excerpt: "How digital transformation is reshaping customer experience strategies and what businesses need to know to stay competitive in the digital age.",
    date: "November 2024",
    readTime: "5 min read",
    category: "Digital Strategy",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7337319978171260928/",
    image: digitalTransformationImage,
    imageAlt: "Futuristic digital transformation concept with connected devices, cloud computing, and customer experience touchpoints"
  },
  {
    id: "5",
    title: "Why the Future of Farming Runs on Customer Success (Not Just Fertilizer)",
    excerpt: "The agricultural technology sector is evolving rapidly, and customer success is becoming the secret ingredient that separates thriving agtech companies from those that struggle to grow.",
    date: "November 2024",
    readTime: "6 min read",
    category: "AgTech & Customer Success",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7334753058561626113/",
    image: highPerformanceTeamsImage,
    imageAlt: "Modern agricultural technology integration with farming equipment, digital analytics, and customer success methodology in agricultural setting"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Insights & Thoughts
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Exploring customer success, project management, and digital transformation through real-world experiences and strategic insights.
          </p>
          <Badge variant="outline" className="mb-12">
            <User className="w-4 h-4 mr-2" />
            Latest from LinkedIn
          </Badge>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-border overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      asChild
                      className="group-hover:bg-primary/10 transition-colors"
                    >
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Read on LinkedIn
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">Featured Article</h2>
            <p className="text-muted-foreground">Deep dive into customer success methodology</p>
          </div>
          
          <Card className="border border-border/50 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="default">{blogPosts[0].category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <CardTitle className="text-2xl leading-tight mb-4">
                {blogPosts[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                  {blogPosts[0].content}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Button asChild className="w-full sm:w-auto">
                  <a 
                    href={blogPosts[0].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Read Full Article on LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-foreground mb-4">
            Connect on LinkedIn
          </h3>
          <p className="text-muted-foreground mb-8">
            Follow me on LinkedIn for more insights on customer success, project management, and digital transformation.
          </p>
          <Button asChild size="lg">
            <a 
              href="https://www.linkedin.com/in/mrinal-mondal-1906" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Follow on LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;