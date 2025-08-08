import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Shield, Briefcase, Users, ArrowRight } from "lucide-react";

const communities = [
  {
    icon: Palette,
    title: "UI & UX",
    description: "Master the art of user experience design, interface creation, and design thinking methodology.",
    members: "2.5K+ Members",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Build end-to-end applications with modern frameworks, databases, and deployment strategies.",
    members: "3.2K+ Members", 
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect digital assets and learn ethical hacking, penetration testing, and security protocols.",
    members: "1.8K+ Members",
    color: "from-red-500 to-orange-500", 
    bgColor: "bg-red-50"
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    description: "Launch your startup, develop business strategies, and connect with fellow entrepreneurs.",
    members: "2.1K+ Members",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  }
];

const CommunityCard = ({ community, index }: { community: typeof communities[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = community.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100 
      }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-3xl p-8 border border-border shadow-card hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20 h-full">
        {/* Icon Header */}
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
            transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
            className={`w-16 h-16 ${community.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
           
             <Icon size={32} className={`bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent`} />

          </motion.div>
          
          {/* Floating indicator */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.15 + 0.6 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div> */}
        </div>

        {/* Content */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: index * 0.15 + 0.4 }}
          className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
        >
          {community.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: index * 0.15 + 0.5 }}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          {community.description}
        </motion.p>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.15 + 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Users size={16} />
            <span>{community.members}</span>
          </div>
          
          <motion.div
            className="text-primary group-hover:translate-x-1 transition-transform duration-200"
            whileHover={{ x: 4 }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CommunitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="communities" className="py-24 bg-background">
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
            className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6"
          >
            <Users className="text-accent" size={20} />
            <span className="text-accent font-medium">Popular Communities</span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Find Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learning Tribe
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join vibrant communities of passionate learners and industry experts. 
            Collaborate, share knowledge, and grow together in your field of interest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communities.map((community, index) => (
            <CommunityCard key={index} community={community} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your field? We're always adding new communities!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all"

          >
            <span>Suggest a Community</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitiesSection;