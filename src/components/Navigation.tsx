import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-4 duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Little Lemon Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10 brightness-100' : 'h-12 brightness-0 invert'
              }`}
            />
          </Link>

                     <div
             className={`hidden md:flex space-x-8 text-lg font-semibold ${isScrolled ? 'text-green-800' : 'text-white'}`}
           >
             <Link 
               to="/" 
               className={`hover:text-secondary hover:scale-105 transition-all duration-300 ${
                 location.pathname === '/' ? 'text-secondary' : ''
               }`}
             >
               Home
             </Link>
             <Link 
               to="/menu" 
               className={`hover:text-secondary hover:scale-105 transition-all duration-300 ${
                 location.pathname === '/menu' ? 'text-secondary' : ''
               }`}
             >
               Menu
             </Link>
             <Link 
               to="/order" 
               className={`hover:text-secondary hover:scale-105 transition-all duration-300 ${
                 location.pathname === '/order' ? 'text-secondary' : ''
               }`}
             >
               Order Online
             </Link>
             <Link 
               to="/reserve" 
               className={`hover:text-secondary hover:scale-105 transition-all duration-300 ${
                 location.pathname === '/reserve' ? 'text-secondary' : ''
               }`}
             >
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
                 className={`hover:text-secondary transition-colors ${
                   location.pathname === '/' ? 'text-secondary' : 'text-green-800'
                 }`}
                 onClick={() => setIsMenuOpen(false)}
               >
                 Home
               </Link>
               <Link
                 to="/menu"
                 className={`hover:text-secondary transition-colors ${
                   location.pathname === '/menu' ? 'text-secondary' : 'text-green-800'
                 }`}
                 onClick={() => setIsMenuOpen(false)}
               >
                 Menu
               </Link>
               <Link
                 to="/order"
                 className={`hover:text-secondary transition-colors ${
                   location.pathname === '/order' ? 'text-secondary' : 'text-green-800'
                 }`}
                 onClick={() => setIsMenuOpen(false)}
               >
                 Order Online
               </Link>
               <Link
                 to="/reserve"
                 className={`hover:text-secondary transition-colors ${
                   location.pathname === '/reserve' ? 'text-secondary' : 'text-green-800'
                 }`}
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
