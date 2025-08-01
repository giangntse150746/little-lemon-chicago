
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Lemon Herb Grilled Chicken",
      description: "Tender chicken breast marinated in lemon, herbs, and Mediterranean spices",
      price: "$24.99",
      image: "🍗"
    },
    {
      name: "Mediterranean Seafood Pasta",
      description: "Fresh seafood with cherry tomatoes, olives, and feta cheese in olive oil",
      price: "$28.99",
      image: "🍝"
    },
    {
      name: "Greek-Style Lamb Chops",
      description: "Grilled lamb chops with rosemary, garlic, and lemon zest",
      price: "$32.99",
      image: "🥩"
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
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center text-6xl">
                  {dish.image}
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
