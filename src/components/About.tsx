import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Camera, Heart, Star, MapPin } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const achievements = [
    { icon: Award, label: 'Award-Winning Studio', value: '2023 Best Photography Studio' },
    { icon: Users, label: 'Happy Clients', value: '500+ Satisfied Couples' },
    { icon: Camera, label: 'Projects Completed', value: '1000+ Events Captured' },
    { icon: Heart, label: 'Years of Excellence', value: '5+ Years in Business' }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Fernando',
      role: 'Lead Photographer & Founder',
      specialty: 'Wedding & Portrait Photography',
      experience: '8 years'
    },
    {
      name: 'Priya Wickramasinghe',
      role: 'Creative Director',
      specialty: 'Event & Commercial Photography',
      experience: '6 years'
    },
    {
      name: 'Amal Perera',
      role: 'Videographer',
      specialty: 'Cinematic Wedding Films',
      experience: '5 years'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About 
            <span className="text-gradient"> 3Brother Studio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in the heart of Sri Lanka, we are passionate storytellers dedicated to 
            capturing life's most precious moments with artistry and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-medium">Based in Colombo, Sri Lanka</span>
            </div>
            
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Crafting Visual Stories That Last Forever
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                3Brother Studio was born from a passion for capturing the beauty and emotion 
                of life's most significant moments. Our team of talented photographers and videographers 
                brings together years of experience with cutting-edge technology to create stunning visual narratives.
              </p>
              <p>
                We specialize in wedding photography, event coverage, and commercial projects, 
                serving clients across Sri Lanka and beyond. Our approach combines traditional 
                storytelling with modern cinematic techniques to deliver images and videos that 
                truly reflect the essence of your special moments.
              </p>
              <p>
                From intimate ceremonies to grand celebrations, we believe every story deserves 
                to be told with artistry, authenticity, and attention to detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Heart className="h-5 w-5 mr-2" />
                Our Portfolio
              </Button>
              <Button variant="outline" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamPhoto} 
                alt="Lanka Visuals Team" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-elegant">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-primary mr-2" />
                <span className="font-semibold text-foreground">5-Star Rated</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by 500+ couples across Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.label}
              className="text-center bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover-lift"
            >
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <achievement.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{achievement.label}</h4>
              <p className="text-sm text-muted-foreground">{achievement.value}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Creative Team
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of professionals brings unique perspectives and expertise 
              to every project, ensuring exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="text-center bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover-lift"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-10 w-10 text-secondary" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-1">{member.specialty}</p>
                <p className="text-xs text-muted-foreground">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;