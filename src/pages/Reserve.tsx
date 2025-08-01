
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users } from "lucide-react";
import { toast } from "sonner";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: ""
  });

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
  ];

  const occasions = [
    "Birthday", "Anniversary", "Date Night", "Business Dinner", 
    "Family Gathering", "Special Celebration", "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Table reservation submitted! We'll contact you to confirm your booking.");
    setFormData({
      name: "", email: "", phone: "", date: "", time: "", guests: "", occasion: "", requests: ""
    });
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Reserve a Table</h1>
          <p className="text-xl text-white drop-shadow">Join us for an unforgettable dining experience</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Make a Reservation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input 
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label>Time *</Label>
                    <Select onValueChange={(value) => handleSelectChange("time", value)} value={formData.time}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Guests *</Label>
                    <Select onValueChange={(value) => handleSelectChange("guests", value)} value={formData.guests}>
                      <SelectTrigger>
                        <SelectValue placeholder="# of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Occasion</Label>
                  <Select onValueChange={(value) => handleSelectChange("occasion", value)} value={formData.occasion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select occasion (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requests">Special Requests</Label>
                  <Textarea 
                    id="requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleInputChange}
                    placeholder="Any dietary restrictions, seating preferences, or special requests..."
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-800 py-3 text-lg"
                >
                  Request Reservation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-yellow-500" />
                  Restaurant Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM</p>
                  <p><strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM</p>
                  <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-yellow-500" />
                  Reservation Policy
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Reservations are recommended for parties of 4 or more</p>
                  <p>• We hold tables for 15 minutes past reservation time</p>
                  <p>• For parties of 6+, please call directly at (312) 555-LEMON</p>
                  <p>• 48-hour notice appreciated for cancellations</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-yellow-500" />
                  Special Events
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>We host private events, birthday parties, and corporate dinners.</p>
                  <p>Contact us for custom menus and event planning services.</p>
                  <p><strong>Phone:</strong> (312) 555-LEMON</p>
                  <p><strong>Email:</strong> events@littlelemon.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reserve;
