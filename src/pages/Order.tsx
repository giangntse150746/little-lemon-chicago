
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Order = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");

  const menuItems = [
    { id: "hummus", name: "Hummus with Pita", price: 8.99, category: "Appetizers" },
    { id: "olives", name: "Mediterranean Olives", price: 6.99, category: "Appetizers" },
    { id: "greek-salad", name: "Greek Village Salad", price: 12.99, category: "Salads" },
    { id: "tabbouleh", name: "Tabbouleh", price: 10.99, category: "Salads" },
    { id: "lemon-chicken", name: "Lemon Herb Grilled Chicken", price: 24.99, category: "Mains" },
    { id: "moussaka", name: "Moussaka", price: 22.99, category: "Mains" },
    { id: "seafood-pasta", name: "Seafood Pasta", price: 28.99, category: "Mains" },
    { id: "lamb-chops", name: "Lamb Chops", price: 32.99, category: "Mains" },
    { id: "baklava", name: "Baklava", price: 6.99, category: "Desserts" },
    { id: "lemonade", name: "Fresh Lemonade", price: 3.99, category: "Beverages" }
  ];

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(cart).length === 0) {
      toast.error("Please add items to your cart before placing an order");
      return;
    }
    toast.success("Order placed successfully! We'll contact you with confirmation details.");
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as {[key: string]: typeof menuItems});

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Order Online</h1>
          <p className="text-xl text-white drop-shadow">Fresh Mediterranean food delivered to your door</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex space-x-4">
                <Button 
                  variant={orderType === "pickup" ? "default" : "outline"}
                  onClick={() => setOrderType("pickup")}
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-800"
                >
                  Pickup
                </Button>
                <Button 
                  variant={orderType === "delivery" ? "default" : "outline"}
                  onClick={() => setOrderType("delivery")}
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-800"
                >
                  Delivery
                </Button>
              </div>
            </div>

            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-yellow-400 pb-2">
                  {category}
                </h2>
                <div className="grid gap-4">
                  {items.map((item) => (
                    <Card key={item.id} className="border-none shadow-md">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="font-semibold text-green-800">{item.name}</h3>
                            <p className="text-lg font-bold text-yellow-600">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromCart(item.id)}
                              disabled={!cart[item.id]}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center">{cart[item.id] || 0}</span>
                            <Button
                              size="sm"
                              onClick={() => addToCart(item.id)}
                              className="bg-yellow-500 hover:bg-yellow-400 text-green-800"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cart & Checkout */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  Your Order
                </h2>
                
                {Object.keys(cart).length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {Object.entries(cart).map(([itemId, quantity]) => {
                        const item = menuItems.find(item => item.id === itemId);
                        return item ? (
                          <div key={itemId} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">×{quantity}</p>
                            </div>
                            <p className="font-semibold">${(item.price * quantity).toFixed(2)}</p>
                          </div>
                        ) : null;
                      })}
                    </div>
                    
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-yellow-600">${getCartTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}

                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  {orderType === "delivery" && (
                    <div>
                      <Label htmlFor="address">Delivery Address</Label>
                      <Textarea id="address" required />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="special">Special Instructions</Label>
                    <Textarea id="special" placeholder="Any special requests..." />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-800 hover:bg-green-700"
                    disabled={Object.keys(cart).length === 0}
                  >
                    Place Order - ${getCartTotal().toFixed(2)}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
