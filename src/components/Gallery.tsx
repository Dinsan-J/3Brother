import React, { useState } from "react";
import { Filter, Heart, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import weddingImage from "@/assets/g2-mobile.jpg";
import fashionImage from "@/assets/g1.jpg";
import videoImage from "@/assets/g3-mobile.jpg";
import vimalImage from "@/assets/vimal.jpg"; // <-- Add this line

// import heroSlide1Mobile from "@/assets/g1-mobile.jpg";
// import heroSlide2Mobile from "@/assets/g2-mobile.jpg";
// import heroSlide3Mobile from "@/assets/g3-mobile.jpg";
// import heroSlide4Mobile from "@/assets/g4-mobile.jpg";
// import heroSlide5Mobile from "@/assets/g5-mobile.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Work", count: 12 },
    { id: "weddings", label: "Weddings", count: 6 },
    { id: "portraits", label: "Portraits", count: 3 },
    { id: "events", label: "Events", count: 2 },
    { id: "commercial", label: "Commercial", count: 1 },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "weddings",
      title: "Traditional Sri Lankan Wedding",
      client: "Amara & Kasun",
      image: weddingImage,
      type: "Photography",
      featured: true,
    },
    {
      id: 2,
      category: "portraits",
      title: "Fashion Portrait Session",
      client: "Model Showcase",
      image: fashionImage,
      type: "Photography",
      featured: false,
    },
    {
      id: 3,
      category: "commercial",
      title: "Corporate Video Production",
      client: "Tech Company",
      image: videoImage,
      type: "Videography",
      featured: false,
    },
    {
      id: 4,
      category: "weddings",
      title: "Beach Wedding Ceremony",
      client: "Nisha & Rajesh",
      image: weddingImage,
      type: "Photography & Video",
      featured: true,
    },
    {
      id: 5,
      category: "events",
      title: "Cultural Festival",
      client: "Heritage Foundation",
      image: fashionImage,
      type: "Photography",
      featured: false,
    },
    {
      id: 6,
      category: "portraits",
      title: "Family Portrait Session",
      client: "The Fernandos",
      image: videoImage,
      type: "Photography",
      featured: false,
    },
    {
      id: 7,
      category: "weddings",
      title: "Modern Church Wedding",
      client: "Sarah & Michael",
      image: weddingImage,
      type: "Photography & Video",
      featured: false,
    },
    {
      id: 8,
      category: "events",
      title: "Corporate Anniversary",
      client: "Diamond Bank",
      image: fashionImage,
      type: "Photography & Video",
      featured: false,
    },
    {
      id: 9,
      category: "portraits",
      title: "Professional Headshots",
      client: "Business Executive",
      image: videoImage,
      type: "Photography",
      featured: false,
    },
    // Add a new item using vimal.jpg
    {
      id: 10,
      category: "portraits",
      title: "Vimal's Portrait",
      client: "Vimal",
      image: vimalImage,
      type: "Photography",
      featured: false,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-gradient" style={{ display: "inline-block" }}>
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of beautiful moments captured across Sri
            Lanka. Each image tells a unique story of love, celebration, and
            artistry.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`group transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "hover:border-accent hover:text-accent"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
              <Badge
                variant="secondary"
                className={`ml-2 ${
                  activeFilter === filter.id
                    ? "bg-accent-foreground/10 text-accent-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer animate-stagger ${
                item.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      <Heart className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/10 backdrop-blur-sm text-white border-white/20"
                  >
                    {item.type}
                  </Badge>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / View All */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="btn-premium group"
            onClick={() => {
              /* Add your view all logic here */
            }}
          >
            View Complete Portfolio
            <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Portfolio Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-stagger">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Wedding Photos</div>
          </div>
          <div className="animate-stagger">
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Event Coverages</div>
          </div>
          <div className="animate-stagger">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">
              Portrait Sessions
            </div>
          </div>
          <div className="animate-stagger">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              Video Productions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
