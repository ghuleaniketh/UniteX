import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GetStartedModal from "@/components/GetStartedModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetStarted={handleGetStarted} />
      <HeroSection onGetStarted={handleGetStarted} />
      <HowItWorksSection />
      <CommunitiesSection />
      <ContactSection />
      <Footer />
      <GetStartedModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Index;
