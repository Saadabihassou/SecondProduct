
import { motion } from "framer-motion";
import { Calendar, Clock, Star, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-fitness-primary" />,
    title: "Expert Trainers",
    description:
      "Our certified trainers provide personalized guidance to help you achieve your fitness goals efficiently and safely.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-fitness-primary" />,
    title: "Flexible Scheduling",
    description:
      "Choose from a wide range of class times to fit your busy schedule with 24/7 gym access for members.",
  },
  {
    icon: <Star className="h-8 w-8 text-fitness-primary" />,
    title: "Premium Equipment",
    description:
      "Train with state-of-the-art fitness equipment designed to enhance your workout experience and results.",
  },
  {
    icon: <Clock className="h-8 w-8 text-fitness-primary" />,
    title: "24/7 Access",
    description:
      "Enjoy unlimited access to our facilities any time of day or night, fitting workouts into your schedule.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-muted/50 dark:bg-fitness-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-4">
            Why Choose <span className="text-fitness-primary">FitPulse</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our gym offers premium amenities and services to help you achieve your fitness goals in a motivating environment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card dark:bg-card/30 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="mb-4 p-3 rounded-2xl bg-fitness-primary/10 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-8 bg-gradient-to-r from-fitness-primary/20 to-fitness-secondary/20 rounded-2xl backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-4">Ready to Start Your Fitness Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Join now and get your first week free with a personal training session included.
              </p>
              <Button className="btn-primary">
                Start Your Free Trial
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background dark:bg-fitness-dark/50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-fitness-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Fitness Classes</p>
              </div>
              <div className="bg-background dark:bg-fitness-dark/50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-fitness-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Expert Trainers</p>
              </div>
              <div className="bg-background dark:bg-fitness-dark/50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-fitness-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Gym Access</p>
              </div>
              <div className="bg-background dark:bg-fitness-dark/50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-fitness-primary mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Happy Members</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Button = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Features;
