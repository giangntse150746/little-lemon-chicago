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

export const createReservation = async (data: ReservationData): Promise<ReservationResponse> => {
  try {
    console.log('Starting reservation creation with data:', data)

    const response = await fetch('http://localhost:3001/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to create reservation'
      }
    }

    return result
  } catch (error) {
    console.error('Error creating reservation:', error)

    if (error instanceof Error) {
      if (error.message.includes('fetch')) {
        return {
          success: false,
          message: 'Unable to connect to the server. Please check your internet connection and try again.'
        }
      }
    }

    return {
      success: false,
      message: 'An unexpected error occurred while submitting your reservation. Please try again.'
    }
  }
}
