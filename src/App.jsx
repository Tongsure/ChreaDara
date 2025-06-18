
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Mail, 
  Instagram, 
  Linkedin, 
  Palette,
  Printer,
  Monitor,
  Share2,
  Star,
  ChevronLeft,
  ChevronRight,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "Branding",
      description: "Complete brand identity design for a tech startup"
    },
    {
      id: 2,
      title: "Event Poster Series",
      category: "Print Design",
      description: "Creative poster designs for music festival"
    },
    {
      id: 3,
      title: "Mobile App UI",
      category: "UI Design",
      description: "Clean and intuitive mobile app interface"
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Engaging social media graphics and templates"
    },
    {
      id: 5,
      title: "Corporate Logo Design",
      category: "Branding",
      description: "Professional logo design for consulting firm"
    },
    {
      id: 6,
      title: "Website Graphics",
      category: "Web Design",
      description: "Custom illustrations and graphics for website"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Alex delivered exceptional branding that perfectly captured our vision. The attention to detail and creativity exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Creative Agency",
      text: "Working with Alex was a pleasure. The designs were innovative, delivered on time, and helped elevate our client's brand significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Local Business",
      text: "The logo and brand materials Alex created have transformed how customers perceive our business. Highly recommended!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Complete brand identity design including logos, color palettes, and brand guidelines."
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "Professional print materials including brochures, posters, business cards, and packaging."
    },
    {
      icon: Monitor,
      title: "Web Graphics",
      description: "Custom web graphics, UI elements, and digital illustrations for online platforms."
    },
    {
      icon: Share2,
      title: "Social Media Design",
      description: "Engaging social media graphics, templates, and campaign visuals for all platforms."
    }
  ];

  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator", 
    "Adobe InDesign",
    "Figma",
    "Brand Strategy",
    "Typography",
    "Color Theory",
    "Layout Design"
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Download Started",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handlePortfolioClick = (item) => {
    toast({
      title: "Project Details",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 navbar-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-slate-800"
            >
              Chrea Dara
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Chrea <span className="text-gradient">Dara</span>
              </h1>
              <p className="text-2xl text-slate-600 mb-4 font-light">Graphic Designer</p>
              <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                Creating visually stunning designs that tell your story and connect with your audience. 
                Specializing in brand identity, print design, and digital graphics.
              </p>
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="float-animation">
                <img  
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl" 
                  alt="Creative workspace with design tools and sketches"
                 src="https://images.unsplash.com/photo-1561070791-2526d30994b5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <img  
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
                alt="Professional headshot of Chrea Dara, graphic designer"
               src="https://images.unsplash.com/photo-1550981386-254b2d7dc235" />
            </div>
            
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a passionate graphic designer with over 5 years of experience creating compelling 
                visual solutions for brands and businesses. My approach combines strategic thinking 
                with creative execution to deliver designs that not only look great but also achieve 
                your business goals.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I believe that great design is about more than just aesthetics—it's about 
                communication, emotion, and creating meaningful connections between brands and their audiences.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="skill-tag px-4 py-2 rounded-full text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadResume}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work across various design disciplines, 
              from brand identity to digital graphics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handlePortfolioClick(item)}
              >
                <img  
                  className="w-full h-64 object-cover" 
                  alt={`${item.title} - ${item.category} project`}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="p-6">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="flex items-center text-slate-700 hover:text-slate-900 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive design services to help your brand stand out and connect with your audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center fade-in"
              >
                <div className="service-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Clients Say</h2>
            <p className="text-lg text-slate-600">
              Don't just take my word for it—here's what my clients have to say about working with me.
            </p>
          </div>
          
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="testimonial-card rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-slate-600">{testimonials[currentTestimonial].company}</p>
              </div>
            </motion.div>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-slate-900' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-600">
              Ready to bring your vision to life? Get in touch and let's discuss your next project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-600 mr-3" />
                  <span className="text-slate-700">alex.morgan@email.com</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-semibold">Chrea Dara</span>
              <p className="text-slate-400 mt-1">Graphic Designer</p>
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-slate-400 text-sm">
              © 2024 Chrea Dara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
