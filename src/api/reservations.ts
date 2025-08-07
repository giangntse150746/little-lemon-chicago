export interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  occasion?: string
  requests?: string
}

export interface ReservationResponse {
  success: boolean
  message: string
  reservationId?: string
}

import prisma from '@/utils/prisma'

export const createReservation = async (data: ReservationData): Promise<ReservationResponse> => {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.guests) {
      return {
        success: false,
        message: 'Missing required fields'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    // Validate date is not in the past
    const selectedDate = new Date(data.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      return {
        success: false,
        message: 'Date cannot be in the past'
      }
    }

    // Check if customer exists, if not create one
    let customer = await prisma.customer.findUnique({
      where: { email: data.email }
    })

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone
        }
      })
    }

    // Create the reservation
    const reservation = await prisma.reservation.create({
      data: {
        customerId: customer.id,
        date: new Date(data.date),
        time: data.time,
        guests: parseInt(data.guests),
        occasion: data.occasion || null,
        requests: data.requests || null
      }
    })

    return {
      success: true,
      message: 'Reservation submitted successfully! We will contact you to confirm your booking.',
      reservationId: reservation.id
    }
  } catch (error) {
    console.error('Error creating reservation:', error)
    
    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('Unique constraint')) {
        return {
          success: false,
          message: 'A customer with this email already exists'
        }
      }
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred while submitting your reservation. Please try again.'
    }
  }
} 