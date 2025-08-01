import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Camera, Video, Users, Eye, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work', icon: Camera },
    { id: 'weddings', label: 'Weddings', icon: Heart },
    { id: 'events', label: 'Events', icon: Users },
    { id: 'videos', label: 'Videos', icon: Video }
  ];

  // Using placeholder images with appropriate aspect ratios
  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      type: 'photo',
      title: 'Romantic Beach Wedding',
      client: 'Sarah & Michael',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      category: 'events',
      type: 'photo',
      title: 'Corporate Gala Night',
      client: 'Hilton Colombo',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 3,
      category: 'weddings',
      type: 'video',
      title: 'Garden Wedding Film',
      client: 'Priya & Rajesh',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 4,
      category: 'events',
      type: 'photo',
      title: 'Fashion Show Coverage',
      client: 'Colombo Fashion Week',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 5,
      category: 'weddings',
      type: 'photo',
      title: 'Traditional Kandyan Wedding',
      client: 'Amara & Kasun',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 6,
      category: 'videos',
      type: 'video',
      title: 'Brand Commercial',
      client: 'Local Business',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 7,
      category: 'events',
      type: 'photo',
      title: 'Birthday Celebration',
      client: 'Private Client',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 8,
      category: 'weddings',
      type: 'video',
      title: 'Engagement Film',
      client: 'Nina & David',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
      featured: true
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Creative 
            <span className="text-gradient"> Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our collection of beautiful moments captured across weddings, events, 
            and commercial projects that showcase our artistic vision and technical excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "hero" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              <filter.icon className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${item.featured ? 'h-96 md:h-full' : 'h-64'}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.featured && (
                    <Badge variant="default" className="bg-primary">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-background/80">
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </Badge>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-4">{item.client}</p>
                  
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Button size="sm" variant="hero">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Love What You See?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Let's create something beautiful together. Browse our complete portfolio 
            or get in touch to discuss your upcoming project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Camera className="h-5 w-5 mr-2" />
              View Full Portfolio
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;