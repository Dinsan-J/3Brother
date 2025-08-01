import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Video, Users, Calendar, Heart, Sparkles } from 'lucide-react';
import photographerAction from '@/assets/photographer-action.jpg';
import videoProduction from '@/assets/video-production.jpg';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with our cinematic wedding photography that tells your love story beautifully.',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'High-resolution gallery'],
      image: photographerAction,
      price: 'Starting from LKR 50,000'
    },
    {
      icon: Video,
      title: 'Videography Services',
      description: 'Professional video production for weddings, events, and commercial projects with cinematic quality.',
      features: ['4K video recording', 'Drone cinematography', 'Professional editing', 'Same-day highlights'],
      image: videoProduction,
      price: 'Starting from LKR 75,000'
    },
    {
      icon: Users,
      title: 'Event Coverage',
      description: 'Complete event documentation for corporate events, parties, and special celebrations.',
      features: ['Full event coverage', 'Live streaming', 'Social media content', 'Quick turnaround'],
      image: photographerAction,
      price: 'Starting from LKR 40,000'
    },
    {
      icon: Camera,
      title: 'Studio Sessions',
      description: 'Professional portrait and commercial photography in our state-of-the-art studio facility.',
      features: ['Portrait photography', 'Product shoots', 'Fashion photography', 'Professional lighting'],
      image: videoProduction,
      price: 'Starting from LKR 25,000'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium 
            <span className="text-gradient"> Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intimate moments to grand celebrations, we offer comprehensive visual storytelling 
            services tailored to capture your most precious memories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover-lift"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" size="default">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your vision and create a personalized package that perfectly captures your story.
          </p>
          <Button variant="hero" size="lg" className="hover:shadow-glow">
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;