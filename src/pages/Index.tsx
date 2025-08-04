
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <FeaturedDishes />
      
      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-green-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Amazing Mediterranean food! The lemon herb chicken is absolutely divine.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Mike Chen",
                rating: 5,
                review: "Best restaurant in Chicago! Fresh ingredients and incredible flavors.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Emma Davis",
                rating: 5,
                review: "The atmosphere is perfect for date nights. Highly recommend the seafood pasta!",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              }
            ].map((review, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-green-800">{review.name}</p>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">"{review.review}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 text-green-800">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-yellow-500 mr-3" />
                  <p>123 Michigan Avenue, Chicago, IL 60601</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-yellow-500 mr-3" />
                  <p>(312) 555-LEMON</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-yellow-500 mr-3" />
                  <div>
                    <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
                    <p>Fri-Sat: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gray-200 rounded-lg h-64 overflow-hidden"
              variants={itemVariants}
            >
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chicago Street View"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
