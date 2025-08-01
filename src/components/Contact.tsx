import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Send,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: ['123 Galle Road, Colombo 03', 'Sri Lanka'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['070 220 2620', '+94 70 220 2620'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['hello@3brotherstudio.lk', 'bookings@3brotherstudio.lk'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: By Appointment'],
      action: 'Book Appointment'
    }
  ];

  const services = [
    'Wedding Photography',
    'Event Videography',
    'Commercial Shoots',
    'Portrait Sessions',
    'Product Photography',
    'Other Services'
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create Something 
            <span className="text-gradient"> Beautiful</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to bring your vision to life? Get in touch with us to discuss your project 
            and receive a personalized quote tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        placeholder="+94 77 123 4567" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Event Date
                      </label>
                      <Input 
                        type="date" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In *
                    </label>
                    <select className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your event, vision, and any specific requirements..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" className="flex-1">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" size="lg">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                      <Button variant="link" size="sm" className="p-0 h-auto text-primary">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Follow Our Work</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="shadow-elegant">
          <CardContent className="p-0">
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              {/* Placeholder for Google Map */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
                <div className="text-center text-secondary">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Find Our Studio</h4>
                  <p>Interactive map will be integrated here</p>
                  <Button variant="cta" size="lg" className="mt-4">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;