
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-fitness-dark/90 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#" className="text-2xl font-bold text-fitness-primary">
            FitPulse
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium hover:text-fitness-primary transition-colors">Features</a>
          <a href="#testimonials" className="font-medium hover:text-fitness-primary transition-colors">Testimonials</a>
          <a href="#pricing" className="font-medium hover:text-fitness-primary transition-colors">Pricing</a>
          <a href="#contact" className="font-medium hover:text-fitness-primary transition-colors">Contact</a>
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-full">
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button className="bg-fitness-primary hover:bg-fitness-secondary">Join Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="rounded-full">
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background dark:bg-fitness-dark border-t border-border"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#features" className="py-2 font-medium hover:text-fitness-primary transition-colors">Features</a>
            <a href="#testimonials" className="py-2 font-medium hover:text-fitness-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="py-2 font-medium hover:text-fitness-primary transition-colors">Pricing</a>
            <a href="#contact" className="py-2 font-medium hover:text-fitness-primary transition-colors">Contact</a>
            <Button className="bg-fitness-primary hover:bg-fitness-secondary w-full">Join Now</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
