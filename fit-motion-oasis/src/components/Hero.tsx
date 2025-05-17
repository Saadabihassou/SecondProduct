
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-muted dark:from-fitness-dark dark:to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fitness-primary/10 to-transparent"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-fitness-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-fitness-secondary/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-fitness-primary/10 dark:bg-fitness-primary/20 rounded-full">
              <span className="text-sm font-semibold text-fitness-primary">
                Transform Your Body Today
              </span>
            </div>
            <h1 className="heading-1 text-foreground">
              Unleash Your <span className="text-fitness-primary">Potential</span> With Our Premium Fitness Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our state-of-the-art fitness center and transform your body with expert trainers, premium equipment, and customized workout plans tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Get Started</Button>
              <Button variant="outline" className="btn-secondary">
                View Membership Plans
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-fitness-dark bg-gray-300`}></div>
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="text-fitness-primary font-bold">500+</span> happy members joined this month
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden md:block"
          >
            <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-br from-fitness-primary/30 to-fitness-secondary/30 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
