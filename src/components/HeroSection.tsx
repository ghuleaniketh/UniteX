import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Target, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const FloatingIcon = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    className={`absolute text-primary/20 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.2, 0.6, 0.2],
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    {children}
  </motion.div>
);

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcon delay={0} className="top-20 left-10">
        <GraduationCap size={48} />
      </FloatingIcon>
      <FloatingIcon delay={1} className="top-32 right-16">
        <Users size={40} />
      </FloatingIcon>
      <FloatingIcon delay={2} className="bottom-32 left-20">
        <Target size={44} />
      </FloatingIcon>
      <FloatingIcon delay={1.5} className="bottom-20 right-10">
        <Sparkles size={36} />
      </FloatingIcon>
      <FloatingIcon delay={0.5} className="top-1/3 left-1/4">
        <GraduationCap size={32} />
      </FloatingIcon>
      <FloatingIcon delay={2.5} className="top-1/2 right-1/4">
        <Users size={38} />
      </FloatingIcon>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Welcome Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-border shadow-sm"
          >
            <Sparkles className="text-primary" size={20} />
            <span className="text-foreground font-medium">Welcome to the Future of Learning</span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              UNITEX
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join a vibrant community of learners, creators, and innovators. 
            Discover your path, build skills, and achieve your dreams with 
            personalized learning experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={onGetStarted}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200 font-semibold px-8 py-4 text-lg glow-primary"
              >
                Get Started 
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-semibold px-8 py-4 text-lg"
              >
                Watch More
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-muted-foreground">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-muted-foreground">Courses</div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;