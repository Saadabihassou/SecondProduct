
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/50 dark:bg-fitness-dark pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-fitness-primary">FitPulse</h3>
            <p className="text-muted-foreground">
              Elevate your fitness journey with state-of-the-art equipment, expert trainers, and a motivating community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-fitness-primary/10 flex items-center justify-center hover:bg-fitness-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-fitness-primary/10 flex items-center justify-center hover:bg-fitness-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-fitness-primary/10 flex items-center justify-center hover:bg-fitness-primary hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-fitness-primary transition-colors">
                  Schedule
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-muted-foreground">
                <span>Monday - Friday</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Saturday</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sunday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="mt-4 font-medium text-fitness-primary">
                24/7 Access for Premium Members
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-fitness-primary shrink-0 mt-0.5" />
                <span>123 Fitness Way, Muscle City, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-fitness-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-fitness-primary" />
                <span>info@fitpulse.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FitPulse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-fitness-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-fitness-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
