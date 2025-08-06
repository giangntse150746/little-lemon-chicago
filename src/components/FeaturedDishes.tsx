import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { motion, easeOut } from 'framer-motion'
import { getImagePath } from '@/data/menuImages'

const FeaturedDishes = () => {
  const dishes = [
    {
      name: 'Lemon Herb Grilled Chicken',
      description: 'Tender chicken breast marinated in lemon, herbs, and Mediterranean spices',
      price: '$24.99',
      image: getImagePath('Lemon Herb Grilled Chicken')
    },
    {
      name: 'Mediterranean Seafood Pasta',
      description: 'Fresh seafood with cherry tomatoes, olives, and feta cheese in olive oil',
      price: '$28.99',
      image: getImagePath('Mediterranean Seafood Pasta')
    },
    {
      name: 'Greek-Style Lamb Chops',
      description: 'Grilled lamb chops with rosemary, garlic, and lemon zest',
      price: '$32.99',
      image: getImagePath('Greek-Style Lamb Chops')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-800">Featured Dishes</h2>
          <p className="text-lg text-gray-600">Discover our chef's signature creations</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {dishes.map((dish, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
                <CardContent className="p-0">
                  <motion.div
                    className="h-48 bg-gray-200 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-green-800">{dish.name}</h3>
                    <p className="text-gray-600 mb-4">{dish.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-secondary">{dish.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/menu">
            <Button size="lg" className="bg-green-800 hover:bg-green-700 text-md px-8 py-3">
              View Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedDishes
