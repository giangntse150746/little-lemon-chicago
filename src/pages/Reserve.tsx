import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, Users } from 'lucide-react'
import { motion, easeOut } from 'framer-motion'

const Reserve = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-600 to-green-700 py-24"
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
            Reserve a Table
          </motion.h1>
          <motion.p
            className="text-xl text-white drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join us for an unforgettable dining experience
          </motion.p>
        </div>
      </motion.section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <BookingForm />

          {/* Info Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-tertiary" />
                    Restaurant Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM
                    </p>
                    <p>
                      <strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> 12:00 PM - 9:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-tertiary" />
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
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-tertiary" />
                    Special Events
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>We host private events, birthday parties, and corporate dinners.</p>
                    <p>Contact us for custom menus and event planning services.</p>
                    <p>
                      <strong>Phone:</strong> (312) 555-LEMON
                    </p>
                    <p>
                      <strong>Email:</strong> events@littlelemon.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Reserve
