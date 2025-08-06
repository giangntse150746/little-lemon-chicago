import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, cubicBezier } from 'framer-motion'
import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { Search, Star, Clock, MapPin, Phone, Heart, Loader2 } from 'lucide-react'
import { getImagePath } from '@/data/menuImages'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [favorites, setFavorites] = useState<string[]>([])
  const [displayedItems, setDisplayedItems] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadingRef = useRef<HTMLDivElement>(null)

  const menuCategories = [
    {
      category: 'Appetizers',
      items: [
        {
          name: 'Hummus with Pita',
          description: 'Creamy chickpea spread with warm pita bread',
          price: '$8.99',
          image: getImagePath('Hummus with Pita'),
          popular: true,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Mediterranean Olives',
          description: 'Mixed olives with herbs and olive oil',
          price: '$6.99',
          image: getImagePath('Mediterranean Olives'),
          popular: false,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Spanakopita',
          description: 'Crispy phyllo pastry with spinach and feta',
          price: '$9.99',
          image: getImagePath('Spanakopita'),
          popular: true,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Dolmades',
          description: 'Grape leaves stuffed with rice and herbs',
          price: '$7.99',
          image: getImagePath('Dolmades'),
          popular: false,
          spicy: false,
          vegetarian: true
        }
      ]
    },
    {
      category: 'Salads',
      items: [
        {
          name: 'Greek Village Salad',
          description: 'Tomatoes, cucumbers, olives, feta with olive oil',
          price: '$12.99',
          image: getImagePath('Greek Village Salad'),
          popular: true,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Tabbouleh',
          description: 'Fresh parsley, tomatoes, bulgur with lemon dressing',
          price: '$10.99',
          image: getImagePath('Tabbouleh'),
          popular: false,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Mediterranean Quinoa',
          description: 'Quinoa with roasted vegetables and herbs',
          price: '$13.99',
          image: getImagePath('Mediterranean Quinoa'),
          popular: false,
          spicy: false,
          vegetarian: true
        }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        {
          name: 'Lemon Herb Grilled Chicken',
          description: 'Tender chicken with Mediterranean herbs',
          price: '$24.99',
          image: getImagePath('Lemon Herb Grilled Chicken'),
          popular: true,
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Moussaka',
          description: 'Traditional Greek layered dish with eggplant',
          price: '$22.99',
          image: getImagePath('Moussaka'),
          popular: true,
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Seafood Pasta',
          description: 'Fresh seafood with cherry tomatoes and feta',
          price: '$28.99',
          image: getImagePath('Mediterranean Seafood Pasta'),
          popular: false,
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Lamb Chops',
          description: 'Grilled lamb with rosemary and garlic',
          price: '$32.99',
          image: getImagePath('Lamb Chops'),
          popular: true,
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Vegetarian Stuffed Peppers',
          description: 'Bell peppers stuffed with rice and vegetables',
          price: '$18.99',
          image: getImagePath('Vegetarian Stuffed Peppers'),
          popular: false,
          spicy: false,
          vegetarian: true
        }
      ]
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Baklava',
          description: 'Sweet phyllo pastry with nuts and honey',
          price: '$6.99',
          image: getImagePath('Baklava'),
          popular: true,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Lemon Panna Cotta',
          description: 'Creamy lemon dessert with berry compote',
          price: '$7.99',
          image: getImagePath('Lemon Panna Cotta'),
          popular: false,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Greek Yogurt Parfait',
          description: 'With honey, nuts, and seasonal fruit',
          price: '$5.99',
          image: getImagePath('Greek Yogurt Parfait'),
          popular: false,
          spicy: false,
          vegetarian: true
        }
      ]
    },
    {
      category: 'Beverages',
      items: [
        {
          name: 'Fresh Lemonade',
          description: 'Made with real lemons and mint',
          price: '$3.99',
          image: getImagePath('Fresh Lemonade'),
          popular: true,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Greek Coffee',
          description: 'Traditional strong coffee',
          price: '$2.99',
          image: getImagePath('Greek Coffee'),
          popular: false,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Mediterranean Iced Tea',
          description: 'Herbal blend with lemon',
          price: '$3.49',
          image: getImagePath('Mediterranean Iced Tea'),
          popular: false,
          spicy: false,
          vegetarian: true
        },
        {
          name: 'House Wine',
          description: 'Red or white wine selection',
          price: '$6.99',
          image: getImagePath('House Wine'),
          popular: true,
          spicy: false,
          vegetarian: true
        }
      ]
    }
  ]

  const categories = ['All', ...menuCategories.map((cat) => cat.category)]

  const filteredItems = useMemo(() => {
    return menuCategories.flatMap((category) =>
      category.items
        .filter(
          (item) =>
            (selectedCategory === 'All' || category.category === selectedCategory) &&
            (searchTerm === '' ||
              item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .map((item) => ({ ...item, category: category.category }))
    )
  }, [searchTerm, selectedCategory, menuCategories])

  // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItems(10)
    setHasMore(filteredItems.length > 10)
  }, [filteredItems.length])

  // Lazy load function
  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMore) return

    setIsLoading(true)

    // Simulate loading delay
    setTimeout(() => {
      const newDisplayedItems = Math.min(displayedItems + 10, filteredItems.length)
      setDisplayedItems(newDisplayedItems)
      setHasMore(newDisplayedItems < filteredItems.length)
      setIsLoading(false)
    }, 500)
  }, [isLoading, hasMore, displayedItems, filteredItems.length])

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreItems()
        }
      },
      {
        rootMargin: '100px'
      }
    )

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loadMoreItems, hasMore, isLoading])

  const toggleFavorite = (itemName: string) => {
    setFavorites((prev) => (prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName]))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezier(0.23, 1, 0.32, 1) }
    }
  }

  const displayedFilteredItems = filteredItems.slice(0, displayedItems)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navigation />

      {/* Enhanced Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-green-600 via-green-500 to-tertiary py-20 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-green-300 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-6xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="text-xl text-white drop-shadow-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover authentic Mediterranean flavors crafted with love and tradition
          </motion.p>

          {/* Search and Filter Bar */}
          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-full shadow-2xl p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-green-700 focus:!ring-0 text-lg rounded-3xl"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full ${
                      selectedCategory === category ? 'bg-green-600 hover:bg-green-700' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="flex max-w-7xl mx-auto px-4 gap-8">
        {/* Enhanced Sidebar */}
        <motion.aside
          className="hidden lg:block w-80 py-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Special Offer Banner */}
          <motion.div
            className="mb-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold mb-2">🔥 25% OFF</div>
              <p className="text-lg mb-3">Weekend Special</p>
              <p className="text-sm opacity-90 mb-4">Valid on all orders above $50</p>
              <div className="bg-yellow-400 text-red-800 px-6 py-3 rounded-full font-bold text-lg">Code: WEEKEND25</div>
            </div>
          </motion.div>

          {/* Chef's Recommendation */}
          <motion.div
            className="mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-tertiary mr-2" />
              <h3 className="text-xl font-bold text-green-800">Chef's Pick</h3>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={getImagePath('Chef Pick')}
                alt="Chef's Pick"
                className="w-20 h-20 rounded-xl object-cover mr-4 shadow-lg"
              />
              <div>
                <h4 className="font-bold text-green-800 text-lg">Lemon Herb Chicken</h4>
                <p className="text-secondary font-bold text-xl">$24.99</p>
                <Badge className="bg-green-100 text-green-800 mt-1">Most Popular</Badge>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">"Our signature dish that customers can't stop raving about!"</p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-green-800 mb-4">Restaurant Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Open Now</p>
                  <p className="text-sm text-gray-600">11AM - 10PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-sm text-gray-600">Downtown Chicago</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Call Us</p>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Image */}
          <motion.div
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={getImagePath('Mediterranean Ambiance')}
              alt="Mediterranean ambiance"
              className="w-full h-56 object-cover"
            />
            <div className="bg-gradient-to-t from-black/60 to-transparent p-4 -mt-16 relative">
              <p className="text-white font-semibold">Authentic Mediterranean Atmosphere</p>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                <span className="font-semibold text-gray-800">Mon - Thu</span>
                <span className="text-green-600 font-bold">11AM - 10PM</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                <span className="font-semibold text-gray-800">Fri - Sat</span>
                <span className="text-green-600 font-bold">11AM - 11PM</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                <span className="font-semibold text-gray-800">Sunday</span>
                <span className="text-green-600 font-bold">12PM - 9PM</span>
              </div>
            </div>
          </motion.div>
        </motion.aside>

        {/* Enhanced Main Menu Content */}
        <main className="flex-1 py-16">
          {/* Daily Special Banner */}
          <motion.div
            className="mb-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <Badge className="bg-red-600 text-white mb-4 text-lg px-4 py-2">🔥 Limited Time</Badge>
              <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">Daily Special</h2>
              <p className="text-xl text-white drop-shadow mb-6 max-w-2xl mx-auto">
                Mediterranean Seafood Platter - Fresh catch of the day with grilled vegetables and our signature lemon
                herb sauce
              </p>
              <div className="bg-white text-green-800 px-8 py-4 rounded-full inline-block shadow-lg">
                <span className="text-3xl font-bold">$29.99</span>
                <span className="text-lg line-through text-gray-500 ml-3">$35.99</span>
              </div>
            </div>
          </motion.div>

          {/* Results Counter */}
          <motion.div
            className="mb-8 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600">
              Showing {displayedFilteredItems.length} of {filteredItems.length} items
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
            {favorites.length > 0 && <Badge className="bg-pink-100 text-pink-800">{favorites.length} favorites</Badge>}
          </motion.div>

          {/* Menu Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${searchTerm}-${selectedCategory}`}
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {displayedFilteredItems.map((item, itemIndex) => (
                <motion.div key={`${item.name}-${itemIndex}`} variants={itemVariants}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white">
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col h-full">
                        <div className="h-60 flex-shrink-0 relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 flex gap-1">
                            {item.popular && (
                              <Badge className="bg-tertiary text-white text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                            {item.vegetarian && <Badge className="bg-green-500 text-white text-xs">Veg</Badge>}
                          </div>
                          <button
                            onClick={() => toggleFavorite(item.name)}
                            className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                favorites.includes(item.name) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                              }`}
                            />
                          </button>
                        </div>
                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
                              {item.name}
                            </h3>
                            <span className="text-2xl font-bold text-secondary ml-4">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Add to Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Loading Indicator */}
          {hasMore && (
            <motion.div
              ref={loadingRef}
              className="flex justify-center items-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 text-green-600">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="text-lg font-medium">
                  {isLoading ? 'Loading more dishes...' : 'Scroll to load more'}
                </span>
              </div>
            </motion.div>
          )}

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No dishes found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* End of Results Message */}
          {!hasMore && displayedFilteredItems.length > 0 && (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">You've seen all our dishes!</h3>
              <p className="text-gray-600">Thanks for exploring our menu</p>
            </motion.div>
          )}
        </main>
      </div>

      {/* Enhanced Order Online CTA */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Experience Mediterranean Magic?
          </motion.h2>
          <motion.p
            className="text-xl text-primary opacity-50 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Order online for quick pickup or delivery and enjoy our authentic flavors at home
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/order">
              <Button
                size="lg"
                className="bg-primary hover:bg-yellow-400 hover:text-primary px-8 py-4 text-lg font-bold shadow-lg"
              >
                Order Online Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

export default Menu
