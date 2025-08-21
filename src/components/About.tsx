import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award } from 'lucide-react'
import { motion, easeOut } from 'framer-motion'

const About = () => {
  const defaultTransition = { duration: 0.6, ease: easeOut }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: defaultTransition
    }
  }
  const itemDelayVariants = {
    ...itemVariants,
    visible: {
      ...itemVariants.visible,
      transition: { ...defaultTransition, delay: 0.2 }
    }
  }
  const itemDelay2Variants = {
    ...itemVariants,
    visible: {
      ...itemVariants.visible,
      transition: { ...defaultTransition, delay: 0.4 }
    }
  }

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary text-center md:text-start">
              About Little Lemon
            </h2>
            <motion.div variants={itemDelayVariants} className="text-center md:text-start">
              <p className="text-base md:text-lg text-primary opacity-75 mb-2 md:mb-6">
                Since 1995, <b>Little Lemon</b> has been serving Chicago's finest Mediterranean cuisine. We combine
                traditional recipes with fresh, locally-sourced ingredients to create an unforgettable dining
                experience.
              </p>
            </motion.div>
            <motion.div variants={itemDelay2Variants}>
              <p className="text-base md:text-lg text-primary opacity-75 text-center md:text-start">
                Our family-owned restaurant brings the authentic flavors of the Mediterranean to your table, using
                time-honored recipes passed down through generations.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="h-80 bg-gray-200 rounded-lg overflow-hidden" variants={itemVariants}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Little Lemon Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-tertiary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-800">Fresh Ingredients</h3>
                <p className="text-gray-600">
                  We source the finest ingredients from local farms and Mediterranean suppliers.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-tertiary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-800">Family Owned</h3>
                <p className="text-gray-600">
                  A family business passed down through generations, maintaining authentic traditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-tertiary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-800">Award Winning</h3>
                <p className="text-gray-600">
                  Recognized as Chicago's Best Mediterranean Restaurant three years running.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
