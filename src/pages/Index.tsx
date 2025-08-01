
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <FeaturedDishes />
      
      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Amazing Mediterranean food! The lemon herb chicken is absolutely divine.",
              },
              {
                name: "Mike Chen",
                rating: 5,
                review: "Best restaurant in Chicago! Fresh ingredients and incredible flavors.",
              },
              {
                name: "Emma Davis",
                rating: 5,
                review: "The atmosphere is perfect for date nights. Highly recommend the seafood pasta!",
              }
            ].map((review, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.review}"</p>
                  <p className="font-semibold text-green-800">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Map placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
