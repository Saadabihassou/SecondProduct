
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "FitPulse | Premium Fitness Experience";
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-fitness-dark text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
