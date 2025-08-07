import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.reservation.deleteMany()
  await prisma.menuItem.deleteMany()
  await prisma.category.deleteMany()
  await prisma.customer.deleteMany()

  console.log('🗑️  Cleared existing data')

  // Create Categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Appetizers',
        description: 'Start your meal with our delicious Mediterranean appetizers'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Salads',
        description: 'Fresh and healthy Mediterranean salads'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Main Courses',
        description: 'Authentic Mediterranean main dishes'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Desserts',
        description: 'Sweet Mediterranean treats and pastries'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Beverages',
        description: 'Refreshing drinks and traditional beverages'
      }
    })
  ])

  console.log('📂 Created categories')

  // Create Menu Items
  const menuItems = await Promise.all([
    // Appetizers
    prisma.menuItem.create({
      data: {
        name: 'Hummus with Pita',
        description: 'Creamy chickpea spread with warm pita bread',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: true,
        categoryId: categories[0].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Mediterranean Olives',
        description: 'Mixed olives with herbs and olive oil',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[0].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Spanakopita',
        description: 'Crispy phyllo pastry with spinach and feta',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1544124094-6b7f1e6a7f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: true,
        categoryId: categories[0].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Dolmades',
        description: 'Grape leaves stuffed with rice and herbs',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[0].id
      }
    }),

    // Salads
    prisma.menuItem.create({
      data: {
        name: 'Greek Village Salad',
        description: 'Tomatoes, cucumbers, olives, feta with olive oil',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: true,
        categoryId: categories[1].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Tabbouleh',
        description: 'Fresh parsley, tomatoes, bulgur with lemon dressing',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[1].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Mediterranean Quinoa',
        description: 'Quinoa with roasted vegetables and herbs',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[1].id
      }
    }),

    // Main Courses
    prisma.menuItem.create({
      data: {
        name: 'Lemon Herb Grilled Chicken',
        description: 'Tender chicken with Mediterranean herbs',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: false,
        categoryId: categories[2].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Moussaka',
        description: 'Traditional Greek layered dish with eggplant',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d49a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: false,
        categoryId: categories[2].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Seafood Pasta',
        description: 'Fresh seafood with cherry tomatoes and feta',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: false,
        categoryId: categories[2].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Lamb Chops',
        description: 'Grilled lamb with rosemary and garlic',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: false,
        categoryId: categories[2].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Vegetarian Stuffed Peppers',
        description: 'Bell peppers stuffed with rice and vegetables',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1566336780623-01c2b1a52ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[2].id
      }
    }),

    // Desserts
    prisma.menuItem.create({
      data: {
        name: 'Baklava',
        description: 'Sweet phyllo pastry with nuts and honey',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: true,
        categoryId: categories[3].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Lemon Panna Cotta',
        description: 'Creamy lemon dessert with berry compote',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[3].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Greek Yogurt Parfait',
        description: 'With honey, nuts, and seasonal fruit',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[3].id
      }
    }),

    // Beverages
    prisma.menuItem.create({
      data: {
        name: 'Fresh Lemonade',
        description: 'Made with real lemons and mint',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1523371285671-4eeb8d2ebeb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: true,
        categoryId: categories[4].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Greek Coffee',
        description: 'Traditional strong coffee',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[4].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Mediterranean Iced Tea',
        description: 'Herbal blend with lemon',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: false,
        spicy: false,
        vegetarian: true,
        categoryId: categories[4].id
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'House Wine',
        description: 'Red or white wine selection',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true,
        spicy: false,
        vegetarian: true,
        categoryId: categories[4].id
      }
    })
  ])

  console.log('🍽️  Created menu items')

  // Create Sample Customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '(555) 123-4567',
        address: '123 Main St, Chicago, IL 60601'
      }
    }),
    prisma.customer.create({
      data: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '(555) 234-5678',
        address: '456 Oak Ave, Chicago, IL 60602'
      }
    }),
    prisma.customer.create({
      data: {
        name: 'Michael Brown',
        email: 'michael.brown@email.com',
        phone: '(555) 345-6789',
        address: '789 Pine St, Chicago, IL 60603'
      }
    }),
    prisma.customer.create({
      data: {
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        phone: '(555) 456-7890',
        address: '321 Elm St, Chicago, IL 60604'
      }
    }),
    prisma.customer.create({
      data: {
        name: 'David Wilson',
        email: 'david.wilson@email.com',
        phone: '(555) 567-8901',
        address: '654 Maple Dr, Chicago, IL 60605'
      }
    })
  ])

  console.log('👥 Created customers')

  // Create Sample Reservations
  const reservations = await Promise.all([
    prisma.reservation.create({
      data: {
        customerId: customers[0].id,
        date: new Date('2024-02-15'),
        time: '7:00 PM',
        guests: 4,
        occasion: 'Birthday',
        requests: 'Window seat preferred',
        status: 'CONFIRMED'
      }
    }),
    prisma.reservation.create({
      data: {
        customerId: customers[1].id,
        date: new Date('2024-02-16'),
        time: '6:30 PM',
        guests: 2,
        occasion: 'Date Night',
        requests: 'Quiet table if possible',
        status: 'PENDING'
      }
    }),
    prisma.reservation.create({
      data: {
        customerId: customers[2].id,
        date: new Date('2024-02-17'),
        time: '8:00 PM',
        guests: 6,
        occasion: 'Business Dinner',
        requests: 'Large table, near the back',
        status: 'CONFIRMED'
      }
    }),
    prisma.reservation.create({
      data: {
        customerId: customers[3].id,
        date: new Date('2024-02-18'),
        time: '5:30 PM',
        guests: 3,
        occasion: 'Family Gathering',
        requests: 'High chair needed',
        status: 'PENDING'
      }
    }),
    prisma.reservation.create({
      data: {
        customerId: customers[4].id,
        date: new Date('2024-02-19'),
        time: '7:30 PM',
        guests: 2,
        occasion: 'Anniversary',
        requests: 'Romantic table setup',
        status: 'CONFIRMED'
      }
    })
  ])

  console.log('📅 Created reservations')

  // Create Sample Orders
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        customerId: customers[0].id,
        orderType: 'PICKUP',
        status: 'CONFIRMED',
        totalAmount: 45.97,
        specialRequests: 'Extra napkins please'
      }
    }),
    prisma.order.create({
      data: {
        customerId: customers[1].id,
        orderType: 'DELIVERY',
        status: 'PREPARING',
        totalAmount: 67.95,
        deliveryAddress: '456 Oak Ave, Chicago, IL 60602',
        specialRequests: 'No onions in the salad'
      }
    }),
    prisma.order.create({
      data: {
        customerId: customers[2].id,
        orderType: 'PICKUP',
        status: 'READY',
        totalAmount: 89.96,
        specialRequests: 'Extra hot sauce'
      }
    }),
    prisma.order.create({
      data: {
        customerId: customers[3].id,
        orderType: 'DELIVERY',
        status: 'DELIVERED',
        totalAmount: 34.98,
        deliveryAddress: '321 Elm St, Chicago, IL 60604',
        specialRequests: 'Plastic utensils please'
      }
    }),
    prisma.order.create({
      data: {
        customerId: customers[4].id,
        orderType: 'PICKUP',
        status: 'PENDING',
        totalAmount: 52.97,
        specialRequests: 'Well done on the chicken'
      }
    })
  ])

  console.log('📦 Created orders')

  // Create Order Items
  const orderItems = await Promise.all([
    // Order 1 - John Smith
    prisma.orderItem.create({
      data: {
        orderId: orders[0].id,
        menuItemId: menuItems[0].id, // Hummus with Pita
        quantity: 2,
        price: 8.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[0].id,
        menuItemId: menuItems[4].id, // Greek Village Salad
        quantity: 1,
        price: 12.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[0].id,
        menuItemId: menuItems[6].id, // Lemon Herb Grilled Chicken
        quantity: 1,
        price: 24.99
      }
    }),

    // Order 2 - Sarah Johnson
    prisma.orderItem.create({
      data: {
        orderId: orders[1].id,
        menuItemId: menuItems[2].id, // Spanakopita
        quantity: 1,
        price: 9.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[1].id,
        menuItemId: menuItems[5].id, // Tabbouleh
        quantity: 1,
        price: 10.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[1].id,
        menuItemId: menuItems[7].id, // Moussaka
        quantity: 1,
        price: 22.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[1].id,
        menuItemId: menuItems[8].id, // Seafood Pasta
        quantity: 1,
        price: 28.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[1].id,
        menuItemId: menuItems[11].id, // Baklava
        quantity: 1,
        price: 6.99
      }
    }),

    // Order 3 - Michael Brown
    prisma.orderItem.create({
      data: {
        orderId: orders[2].id,
        menuItemId: menuItems[0].id, // Hummus with Pita
        quantity: 1,
        price: 8.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[2].id,
        menuItemId: menuItems[4].id, // Greek Village Salad
        quantity: 2,
        price: 12.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[2].id,
        menuItemId: menuItems[9].id, // Lamb Chops
        quantity: 2,
        price: 32.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[2].id,
        menuItemId: menuItems[11].id, // Baklava
        quantity: 2,
        price: 6.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[2].id,
        menuItemId: menuItems[12].id, // Lemon Panna Cotta
        quantity: 1,
        price: 7.99
      }
    }),

    // Order 4 - Emily Davis
    prisma.orderItem.create({
      data: {
        orderId: orders[3].id,
        menuItemId: menuItems[1].id, // Mediterranean Olives
        quantity: 1,
        price: 6.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[3].id,
        menuItemId: menuItems[4].id, // Greek Village Salad
        quantity: 1,
        price: 12.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[3].id,
        menuItemId: menuItems[10].id, // Vegetarian Stuffed Peppers
        quantity: 1,
        price: 18.99
      }
    }),

    // Order 5 - David Wilson
    prisma.orderItem.create({
      data: {
        orderId: orders[4].id,
        menuItemId: menuItems[2].id, // Spanakopita
        quantity: 1,
        price: 9.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[4].id,
        menuItemId: menuItems[6].id, // Lemon Herb Grilled Chicken
        quantity: 1,
        price: 24.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[4].id,
        menuItemId: menuItems[11].id, // Baklava
        quantity: 1,
        price: 6.99
      }
    }),
    prisma.orderItem.create({
      data: {
        orderId: orders[4].id,
        menuItemId: menuItems[13].id, // Fresh Lemonade
        quantity: 2,
        price: 3.99
      }
    })
  ])

  console.log('🛒 Created order items')

  console.log('✅ Database seeded successfully!')
  console.log(`📊 Summary:`)
  console.log(`   - ${categories.length} categories`)
  console.log(`   - ${menuItems.length} menu items`)
  console.log(`   - ${customers.length} customers`)
  console.log(`   - ${reservations.length} reservations`)
  console.log(`   - ${orders.length} orders`)
  console.log(`   - ${orderItems.length} order items`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 