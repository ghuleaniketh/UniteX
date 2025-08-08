import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";
import logo from "@/assets/unitex-logo.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/unitex.community?igsh=MWdueTIxYXMxMWw4cA==",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: MessageCircle,
      href: "https://chat.whatsapp.com/INiaAXpF9F87QhgKSkbMq0?mode=ac_t",
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
    {
      icon: Mail,
      href: "mailto:hello@unitex.community",
      label: "Email",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Unitex" className="h-9 w-auto" />
              <span className="text-2xl font-display font-bold text-foreground">
                UNITEX
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Empowering learners through community-driven education and 
              personalized learning experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              {["Home", "About", "Communities", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const sectionId = link.toLowerCase().replace(/\s+/g, "-").replace("unitex-", "");
                    const targetId = sectionId === "home" ? "home" : 
                                   sectionId === "how-works" ? "how-it-works" :
                                   sectionId === "popular-communities" ? "communities" : "contact";
                    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-display font-semibold text-foreground">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Follow us for daily learning tips and community updates
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Unitex Community – All Rights Reserved</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#f97316", "#ef4444"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>for learners everywhere</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;