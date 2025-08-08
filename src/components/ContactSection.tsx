import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MessageCircle, Mail, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Instagram,
    title: "Instagram",
    description: "Follow us for daily learning tips and community highlights",
    link: "https://www.instagram.com/unitex.community?igsh=MWdueTIxYXMxMWw4cA==",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-50"
  },
  {
  icon: MessageCircle,
  title: "WhatsApp",
  description: "Join our WhatsApp group for instant community updates",
  link: "https://chat.whatsapp.com/INiaAXpF9F87QhgKSkbMq0?mode=ac_t", // Make sure this works
  color: "from-green-500 to-emerald-500",
  bgColor: "bg-green-50"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your questions and feedback directly",
    link: "mailto:hello@unitex.community",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  }
];

const ContactCard = ({ contact, index }: { contact: typeof contactMethods[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = contact.icon;

  return (
    <motion.a
      ref={ref}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      className="group block"
    >
      <div className="bg-white rounded-3xl p-8 border border-border shadow-card hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
          className={`w-20 h-20 ${contact.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon 
            size={40} 
            className={`bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`}
          />
        </motion.div>

        {/* Content */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
        >
          {contact.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          {contact.description}
        </motion.p>

        {/* Link indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: index * 0.2 + 0.6 }}
          className="inline-flex items-center space-x-2 text-primary font-medium group-hover:text-accent transition-colors duration-200"
        >
          <span>Connect</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.div>
      </div>
    </motion.a>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-muted/30">
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
            className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-6 py-3 mb-6"
          >
            <MessageCircle className="text-secondary-foreground" size={20} />
            <span className="text-secondary-foreground font-medium">Get in Touch</span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Let's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Want to join our community? We're here to help you 
            start your learning journey and connect with fellow learners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-border"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Join Our Community Today
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with thousands of learners, access exclusive content, and be part 
            of a movement that's revolutionizing education through community-driven learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>📚 Free Learning Resources</span>
            <span>👥 Active Community Support</span>
            <span>🎯 Personalized Learning Paths</span>
            <span>🚀 Career Growth Opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;