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
    const response = await fetch(`http://localhost:3001/api/customers/${encodeURIComponent(email)}`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error('Error fetching customer:', error)
    return null
  }
}

// Get all customers
export const getAllCustomers = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/customers')
    if (!response.ok) return []
    return await response.json()
  } catch (error) {
    console.error('Error fetching customers:', error)
    return []
  }
}

// Create new customer
export const createCustomer = async (data: CustomerData): Promise<CustomerResponse> => {
  try {
    const response = await fetch('http://localhost:3001/api/customers', {
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
        message: result.message || 'Failed to create customer'
      }
    }

    return result
  } catch (error) {
    console.error('Error creating customer:', error)
    return {
      success: false,
      message: 'Failed to create customer'
    }
  }
} 