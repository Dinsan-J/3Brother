import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube,
  Heart,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Wedding Photography',
    'Event Videography',
    'Portrait Sessions',
    'Commercial Photography',
    'Drone Cinematography',
    'Photo Editing Services'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
    { label: 'Book Session', href: '#contact' },
    { label: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="h-8 w-8 text-primary" />
              <span className="font-playfair text-2xl font-bold text-gradient">
                3Brother Studio
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Sri Lanka's premier photography and videography studio, dedicated to 
              capturing life's most precious moments with artistry and excellence.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-transparent border-primary/30 hover:bg-primary hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-primary/30 hover:bg-primary hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-primary/30 hover:bg-primary hover:text-secondary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-primary mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-primary mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">
                    123 Galle Road<br />
                    Colombo 03, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-secondary-foreground/80">
                  070 220 2620
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-secondary-foreground/80">
                  hello@3brotherstudio.lk
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button variant="hero" size="sm" className="w-full">
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-playfair text-2xl font-semibold text-primary mb-2">
              Stay Updated
            </h4>
            <p className="text-secondary-foreground/80 mb-6">
              Subscribe to our newsletter for photography tips, latest works, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-foreground/10 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button variant="hero" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} 3Brother Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-secondary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary" />
              <span>in Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;