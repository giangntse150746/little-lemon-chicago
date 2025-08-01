
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/b39ca12f-4c13-4645-859a-87be54755c5f.png" 
              alt="Little Lemon Logo" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-green-100">
              Serving Chicago's finest Mediterranean cuisine since 1995. 
              Experience the authentic flavors of the Mediterranean.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-green-100">123 Michigan Ave, Chicago, IL</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-green-100">(312) 555-LEMON</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-green-100">info@littlemon.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-green-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <div>
                  <p>Mon-Thu: 11AM - 10PM</p>
                  <p>Fri-Sat: 11AM - 11PM</p>
                  <p>Sunday: 12PM - 9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © 2024 Little Lemon Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
