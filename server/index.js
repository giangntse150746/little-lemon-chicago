const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Create reservation endpoint
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, occasion, requests } = req.body

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      })
    }

    // Validate date is not in the past
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message: 'Date cannot be in the past'
      })
    }

    // Check if customer exists, if not create one
    let customer = await prisma.customer.findUnique({
      where: { email }
    })

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name,
          email,
          phone
        }
      })
    }

    // Create the reservation
    const reservation = await prisma.reservation.create({
      data: {
        customerId: customer.id,
        date: new Date(date),
        time,
        guests: parseInt(guests),
        occasion: occasion || null,
        requests: requests || null
      }
    })

    res.json({
      success: true,
      message: 'Reservation submitted successfully! We will contact you to confirm your booking.',
      reservationId: reservation.id
    })
  } catch (error) {
    console.error('Error creating reservation:', error)
    
    if (error.message.includes('Unique constraint')) {
      return res.status(400).json({
        success: false,
        message: 'A customer with this email already exists'
      })
    }

    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while submitting your reservation. Please try again.'
    })
  }
})

// Get all reservations (for admin purposes)
app.get('/api/reservations', async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        customer: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    res.json(reservations)
  } catch (error) {
    console.error('Error fetching reservations:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reservations'
    })
  }
})

// Get customer by email
app.get('/api/customers/:email', async (req, res) => {
  try {
    const { email } = req.params
    const customer = await prisma.customer.findUnique({
      where: { email },
      include: {
        reservations: true,
        orders: true
      }
    })
    
    if (!customer) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      })
    }
    
    res.json(customer)
  } catch (error) {
    console.error('Error fetching customer:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch customer'
    })
  }
})

// Get all customers
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        reservations: {
          orderBy: { createdAt: 'desc' }
        },
        orders: {
          orderBy: { createdAt: 'desc' }
        }
      }
    })
    
    res.json(customers)
  } catch (error) {
    console.error('Error fetching customers:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch customers'
    })
  }
})

// Create new customer
app.post('/api/customers', async (req, res) => {
  try {
    const { name, email, phone } = req.body

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      })
    }

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone
      }
    })

    res.json({
      success: true,
      message: 'Customer created successfully',
      customerId: customer.id
    })
  } catch (error) {
    console.error('Error creating customer:', error)
    
    if (error.message.includes('Unique constraint')) {
      return res.status(400).json({
        success: false,
        message: 'A customer with this email already exists'
      })
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create customer'
    })
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 