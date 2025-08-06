import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/b39ca12f-4c13-4645-859a-87be54755c5f.png"
              alt="Little Lemon Logo"
              className="h-10"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-green-800 hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-green-800 hover:text-yellow-600 transition-colors">
              Menu
            </Link>
            <Link to="/order" className="text-green-800 hover:text-yellow-600 transition-colors">
              Order Online
            </Link>
            <Link to="/reserve" className="text-green-800 hover:text-yellow-600 transition-colors">
              Reserve Table
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-green-800 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-green-800 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/order"
                className="text-green-800 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Online
              </Link>
              <Link
                to="/reserve"
                className="text-green-800 hover:text-yellow-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve Table
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
