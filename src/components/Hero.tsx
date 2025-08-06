import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { motion, easeOut } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20"></div>

      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Little Lemon
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Authentic Mediterranean Cuisine in the Heart of Chicago
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/menu">
            <Button size="lg" className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 text-lg">
              View Menu
            </Button>
          </Link>
          <Link to="/reserve">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg"
            >
              Reserve Table
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative lemon shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-yellow-300 rounded-full opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 bg-yellow-300 rounded-full opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-12 h-12 bg-yellow-300 rounded-full opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5
        }}
      />
    </section>
  )
}

export default Hero
