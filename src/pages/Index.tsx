import { Mail, Github, Linkedin, Download, Code, Database, Brain, Shield, Smartphone, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";
import dopamineApp from "@/assets/dopamine-app.jpg";
import steganographyTool from "@/assets/steganography-tool.jpg";

const Index = () => {
  const skills = {
    "Languages": ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    "Frameworks & Tools": ["jQuery", "Git", "Visual Studio Code", "Anaconda"],
    "Databases": ["MySQL"],
    "AI/ML": ["Neural Networks", "SVM", "Data Structures & Algorithms"]
  };

  const projects = [
    {
      title: "DOPAMINE",
      description: "Comprehensive Android application featuring music player, weather updates, and news feed. Built with Java and XML for seamless user experience.",
      image: dopamineApp,
      tags: ["Java", "XML", "Android", "API Integration"]
    },
    {
      title: "Steganography Tool",
      description: "Advanced cryptography application for image and text encryption. Implements sophisticated steganography techniques for secure data hiding.",
      image: steganographyTool,
      tags: ["Cryptography", "Security", "Image Processing", "Data Encryption"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-xl font-bold hover:text-primary transition-colors">
              Balaji R
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm text-primary font-medium">Available for Work</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Balaji R</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Full-Stack Developer
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Dedicated professional specializing in app development, cryptography, and web technologies. 
                Passionate about creating secure, innovative solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border hover:bg-secondary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Balaji R" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          
          <Card className="p-8 bg-card border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-primary">Web Developer (Full-time)</h3>
                <p className="text-lg text-foreground mt-1">Indegene TM</p>
              </div>
              <div className="text-muted-foreground mt-2 md:mt-0">
                <p className="font-medium">Aug 2023 – Dec 2024</p>
                <p className="text-sm">Duration: 1 year 4 months</p>
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground leading-relaxed">
                  Created static and responsive emailers and banners using manual methods as well as company-specific tools, 
                  ensuring effective marketing communications.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground leading-relaxed">
                  Trained and skilled in building responsive websites using media queries to optimize for various screen sizes.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground leading-relaxed">
                  Enhanced website interactivity and user experience by implementing animations and effects through jQuery plugins.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dedicated and motivated professional seeking to leverage my skills in full-stack development, 
                mobile applications, and cybersecurity. I specialize in creating robust applications with a 
                focus on user experience and data security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across multiple domains including app development, cryptography, 
                and modern web technologies. I'm passionate about solving complex problems and 
                building innovative solutions.
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Master of Computer Applications</h4>
                  <p className="text-muted-foreground">Reva University</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 9.07 | December 2024</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-xl font-semibold">Bachelor of Computer Applications</h4>
                  <p className="text-muted-foreground">Reva University</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 8.25 | September 2020 – September 2023</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in advanced software development, AI/ML technologies, and 
                    cybersecurity with a focus on practical application and innovation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  {category === "Languages" && <Code className="h-5 w-5 text-primary" />}
                  {category === "Frameworks & Tools" && <Globe className="h-5 w-5 text-primary" />}
                  {category === "Databases" && <Database className="h-5 w-5 text-primary" />}
                  {category === "AI/ML" && <Brain className="h-5 w-5 text-primary" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications" },
              { icon: Smartphone, title: "App Development", desc: "Native Android applications" },
              { icon: Shield, title: "Cryptography", desc: "Secure encryption solutions" },
              { icon: Database, title: "Data Security", desc: "Robust data protection systems" }
            ].map((service) => (
              <Card key={service.title} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center group">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <Card className="p-8 bg-card border-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="mailto:balajidumbu224@gmail.com"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>balajidumbu224@gmail.com</span>
              </a>
            </div>
            
            <div className="flex justify-center gap-4 pt-6 border-t border-border">
              <Button 
                size="icon" 
                variant="outline" 
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                asChild
              >
                <a href="https://github.com/Balaji0422" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/22balaji" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Balaji R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
