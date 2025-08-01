
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Lemon Herb Grilled Chicken",
      description: "Tender chicken breast marinated in lemon, herbs, and Mediterranean spices",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mediterranean Seafood Pasta",
      description: "Fresh seafood with cherry tomatoes, olives, and feta cheese in olive oil",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Greek-Style Lamb Chops",
      description: "Grilled lamb chops with rosemary, garlic, and lemon zest",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Featured Dishes</h2>
          <p className="text-lg text-gray-600">Discover our chef's signature creations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-800">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">{dish.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-3">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
