
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuCategories = [
    {
      category: "Appetizers",
      items: [
        { name: "Hummus with Pita", description: "Creamy chickpea spread with warm pita bread", price: "$8.99" },
        { name: "Mediterranean Olives", description: "Mixed olives with herbs and olive oil", price: "$6.99" },
        { name: "Spanakopita", description: "Crispy phyllo pastry with spinach and feta", price: "$9.99" },
        { name: "Dolmades", description: "Grape leaves stuffed with rice and herbs", price: "$7.99" }
      ]
    },
    {
      category: "Salads",
      items: [
        { name: "Greek Village Salad", description: "Tomatoes, cucumbers, olives, feta with olive oil", price: "$12.99" },
        { name: "Tabbouleh", description: "Fresh parsley, tomatoes, bulgur with lemon dressing", price: "$10.99" },
        { name: "Mediterranean Quinoa", description: "Quinoa with roasted vegetables and herbs", price: "$13.99" }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Lemon Herb Grilled Chicken", description: "Tender chicken with Mediterranean herbs", price: "$24.99" },
        { name: "Moussaka", description: "Traditional Greek layered dish with eggplant", price: "$22.99" },
        { name: "Seafood Pasta", description: "Fresh seafood with cherry tomatoes and feta", price: "$28.99" },
        { name: "Lamb Chops", description: "Grilled lamb with rosemary and garlic", price: "$32.99" },
        { name: "Vegetarian Stuffed Peppers", description: "Bell peppers stuffed with rice and vegetables", price: "$18.99" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Baklava", description: "Sweet phyllo pastry with nuts and honey", price: "$6.99" },
        { name: "Lemon Panna Cotta", description: "Creamy lemon dessert with berry compote", price: "$7.99" },
        { name: "Greek Yogurt Parfait", description: "With honey, nuts, and seasonal fruit", price: "$5.99" }
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "Fresh Lemonade", description: "Made with real lemons and mint", price: "$3.99" },
        { name: "Greek Coffee", description: "Traditional strong coffee", price: "$2.99" },
        { name: "Mediterranean Iced Tea", description: "Herbal blend with lemon", price: "$3.49" },
        { name: "House Wine", description: "Red or white wine selection", price: "$6.99" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Menu</h1>
          <p className="text-xl text-white drop-shadow">Authentic Mediterranean flavors crafted with love</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-8 border-b-2 border-yellow-400 pb-2">
                {category.category}
              </h2>
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-green-800 mb-2">{item.name}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-2xl font-bold text-yellow-600 ml-4">{item.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Order?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Place your order online for pickup or delivery
          </p>
          <Link to="/order">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-8 py-4 text-lg">
              Order Online Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
