
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-500 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Little Lemon
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
          Authentic Mediterranean Cuisine in the Heart of Chicago
        </p>
        <div className="space-x-4">
          <Link to="/menu">
            <Button size="lg" className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 text-lg">
              View Menu
            </Button>
          </Link>
          <Link to="/reserve">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg"
            >
              Reserve Table
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative lemon shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-yellow-300 rounded-full opacity-30 animate-bounce delay-500"></div>
    </section>
  );
};

export default Hero;
