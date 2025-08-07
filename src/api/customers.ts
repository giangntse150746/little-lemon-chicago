import prisma from '@/utils/prisma'

export interface CustomerData {
  name: string
  email: string
  phone: string
}

export interface CustomerResponse {
  success: boolean
  message: string
  customerId?: string
}

// Get customer by email
export const getCustomerByEmail = async (email: string) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { email },
      include: {
        reservations: true,
        orders: true
      }
    })
    return customer
  } catch (error) {
    console.error('Error fetching customer:', error)
    return null
  }
}

// Get all customers
export const getAllCustomers = async () => {
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
    return customers
  } catch (error) {
    console.error('Error fetching customers:', error)
    return []
  }
}

// Create new customer
export const createCustomer = async (data: CustomerData): Promise<CustomerResponse> => {
  try {
    const customer = await prisma.customer.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone
      }
    })

    return {
      success: true,
      message: 'Customer created successfully',
      customerId: customer.id
    }
  } catch (error) {
    console.error('Error creating customer:', error)
    
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return {
        success: false,
        message: 'A customer with this email already exists'
      }
    }
    
    return {
      success: false,
      message: 'Failed to create customer'
    }
  }
} 