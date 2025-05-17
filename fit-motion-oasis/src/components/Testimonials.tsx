
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Member for 2 years",
    content:
      "FitPulse completely transformed my approach to fitness. The trainers create personalized plans that actually work, and the community keeps me motivated. I've lost 30 pounds and gained so much confidence!",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Member for 1 year",
    content:
      "The 24/7 access and variety of equipment make it easy to fit workouts into my busy schedule. The trainers are knowledgeable and supportive. Since joining, I've seen real improvements in my strength and endurance.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Member for 6 months",
    content:
      "As someone new to fitness, I was intimidated at first, but the staff made me feel welcome from day one. The beginner classes helped me build confidence, and now I'm tackling workouts I never thought possible!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background dark:bg-fitness-dark/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-4">
            Success Stories from our <span className="text-fitness-primary">Members</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our members have to say about their fitness journey and transformation with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
  };
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card dark:bg-card/30 p-8 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <blockquote className="text-muted-foreground mb-8">
        "{testimonial.content}"
      </blockquote>
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
