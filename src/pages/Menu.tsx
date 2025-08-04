
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  const menuCategories = [
    {
      category: "Appetizers",
      items: [
        { 
          name: "Hummus with Pita", 
          description: "Creamy chickpea spread with warm pita bread", 
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Mediterranean Olives", 
          description: "Mixed olives with herbs and olive oil", 
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Spanakopita", 
          description: "Crispy phyllo pastry with spinach and feta", 
          price: "$9.99",
          image: "https://images.unsplash.com/photo-1544124094-6b7f1e6a7f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Dolmades", 
          description: "Grape leaves stuffed with rice and herbs", 
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Salads",
      items: [
        { 
          name: "Greek Village Salad", 
          description: "Tomatoes, cucumbers, olives, feta with olive oil", 
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Tabbouleh", 
          description: "Fresh parsley, tomatoes, bulgur with lemon dressing", 
          price: "$10.99",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Mediterranean Quinoa", 
          description: "Quinoa with roasted vegetables and herbs", 
          price: "$13.99",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { 
          name: "Lemon Herb Grilled Chicken", 
          description: "Tender chicken with Mediterranean herbs", 
          price: "$24.99",
          image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Moussaka", 
          description: "Traditional Greek layered dish with eggplant", 
          price: "$22.99",
          image: "https://images.unsplash.com/photo-1563379091339-03246963d49a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Seafood Pasta", 
          description: "Fresh seafood with cherry tomatoes and feta", 
          price: "$28.99",
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Lamb Chops", 
          description: "Grilled lamb with rosemary and garlic", 
          price: "$32.99",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Vegetarian Stuffed Peppers", 
          description: "Bell peppers stuffed with rice and vegetables", 
          price: "$18.99",
          image: "https://images.unsplash.com/photo-1566336780623-01c2b1a52ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        { 
          name: "Baklava", 
          description: "Sweet phyllo pastry with nuts and honey", 
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Lemon Panna Cotta", 
          description: "Creamy lemon dessert with berry compote", 
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Greek Yogurt Parfait", 
          description: "With honey, nuts, and seasonal fruit", 
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      category: "Beverages",
      items: [
        { 
          name: "Fresh Lemonade", 
          description: "Made with real lemons and mint", 
          price: "$3.99",
          image: "https://images.unsplash.com/photo-1523371285671-4eeb8d2ebeb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Greek Coffee", 
          description: "Traditional strong coffee", 
          price: "$2.99",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "Mediterranean Iced Tea", 
          description: "Herbal blend with lemon", 
          price: "$3.49",
          image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        { 
          name: "House Wine", 
          description: "Red or white wine selection", 
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-xl text-white drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Authentic Mediterranean flavors crafted with love
          </motion.p>
        </div>
      </motion.section>

      <div className="flex max-w-7xl mx-auto px-4 gap-8">
        {/* Sidebar with promotional content */}
        <motion.aside 
          className="hidden lg:block w-80 py-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Special Offer Banner */}
          <motion.div 
            className="mb-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">20% OFF</h3>
              <p className="text-lg mb-3">Weekend Special</p>
              <p className="text-sm opacity-90 mb-4">Valid on all orders above $50</p>
              <div className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                Code: WEEKEND20
              </div>
            </div>
          </motion.div>

          {/* Chef's Recommendation */}
          <motion.div 
            className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-green-800 mb-3">Chef's Pick</h3>
            <div className="flex items-center mb-3">
              <img 
                src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Chef's Pick"
                className="w-16 h-16 rounded-lg object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-green-800">Lemon Herb Chicken</h4>
                <p className="text-yellow-600 font-bold">$24.99</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Our signature dish loved by customers!</p>
          </motion.div>

          {/* Decorative Image */}
          <motion.div 
            className="mb-8 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Mediterranean ambiance"
              className="w-full h-48 object-cover"
            />
          </motion.div>

          {/* Opening Hours */}
          <motion.div 
            className="bg-green-50 border border-green-200 rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-green-800 mb-3">Opening Hours</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>11AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>11AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12PM - 9PM</span>
              </div>
            </div>
          </motion.div>
        </motion.aside>

        {/* Main Menu Content */}
        <main className="flex-1 py-16">
          {/* Daily Special Banner */}
          <motion.div 
            className="mb-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow">Daily Special</h2>
            <p className="text-xl text-white drop-shadow mb-4">
              Mediterranean Seafood Platter - Fresh catch of the day with grilled vegetables
            </p>
            <div className="text-2xl font-bold text-green-800 bg-white px-6 py-2 rounded-full inline-block">
              $29.99 <span className="text-lg line-through text-gray-500 ml-2">$35.99</span>
            </div>
          </motion.div>

          {menuCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-8 border-b-2 border-yellow-400 pb-2">
                {category.category}
              </h2>
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              >
                {category.items.map((item, itemIndex) => (
                  <motion.div key={itemIndex} variants={itemVariants}>
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="flex">
                          <div className="w-32 h-32 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4 flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold text-green-800">{item.name}</h3>
                              <span className="text-xl font-bold text-yellow-600 ml-2">{item.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </main>
      </div>

      {/* Order Online CTA */}
      <motion.section 
        className="py-16 bg-green-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      <Footer />
    </div>
  );
};

export default Menu;
