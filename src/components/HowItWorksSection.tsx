import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Trophy, Zap } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Define Your Path",
    description: "Discover your learning goals and create a personalized roadmap tailored to your ambitions and interests."
  },
  {
    icon: Users,
    title: "Join Communities",
    description: "Connect with like-minded learners and expert mentors in specialized communities that match your interests."
  },
  {
    icon: Trophy,
    title: "Achieve Dreams",
    description: "Turn your aspirations into reality with structured learning paths, practical projects, and real-world skills."
  },
  {
    icon: Zap,
    title: "Interactive Sessions",
    description: "Engage in live workshops, collaborative projects, and hands-on learning experiences with industry experts."
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      className="group"
    >
      <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
        {/* Step Number */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
            className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg"
          >
            {index + 1}
          </motion.div>
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="text-primary group-hover:text-accent transition-colors duration-300"
          >
            <Icon size={48} />
          </motion.div>
        </div>

        {/* Content */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
        >
          {step.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: index * 0.2 + 0.6 }}
          className="text-muted-foreground leading-relaxed"
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6"
          >
            <Zap className="text-primary" size={20} />
            <span className="text-primary font-medium">How It Works</span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Your Learning Journey{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Simplified
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your educational experience with our proven four-step approach 
            to personalized learning and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;