import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Camera,
  Video,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- Add this import
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // <-- Add this line

  const slides = [
    {
      image: heroSlide1,
      title: "Wedding Photography",
      subtitle: "Capturing love stories with cinematic elegance",
    },
    {
      image: heroSlide2,
      title: "Professional Videography",
      subtitle: "Creating stunning visual narratives",
    },
    {
      image: heroSlide3,
      title: "Event Coverage",
      subtitle: "Documenting your special celebrations",
    },
    {
      image: heroSlide4,
      title: "Portrait Sessions",
      subtitle: "Professional studio photography",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-6 mt-20">
            <Star className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary font-medium">
              Sri Lanka's Premier Visual Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient block mb-2">3Brother Studio</span>
            Capturing Your Perfect Moments
          </h1>

          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle} - Creating cinematic memories that
            last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              className="animate-scale-in"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Camera className="h-5 w-5 mr-2" />
              Book Your Session
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="animate-scale-in border-white text-white hover:bg-white hover:text-secondary"
            >
              <Play className="h-5 w-5 mr-2" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-white/80">Happy Couples Trust Us</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                1000+
              </div>
              <div className="text-white/80">Events Captured</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5+
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-16  left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden sm:block">
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">Scroll to explore</span>
          <div className="w-4 h-6 border border-white/40 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
