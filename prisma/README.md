# Database Setup for Little Lemon Chicago

This directory contains the Prisma schema and seed data for the Little Lemon Chicago restaurant application.

## Database Schema

The database includes the following models:

### Core Models
- **Category** - Menu categories (Appetizers, Salads, Main Courses, etc.)
- **MenuItem** - Individual menu items with pricing, dietary info, and popularity flags
- **Customer** - Customer information for orders and reservations
- **Reservation** - Table reservations with date, time, and special requests
- **Order** - Food orders (pickup/delivery) with status tracking
- **OrderItem** - Individual items within an order (many-to-many relationship)

### Enums
- **ReservationStatus** - PENDING, CONFIRMED, CANCELLED, COMPLETED
- **OrderStatus** - PENDING, CONFIRMED, PREPARING, READY, DELIVERED, CANCELLED
- **OrderType** - PICKUP, DELIVERY

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
```

### 3. Generate Prisma Client
```bash
npm run db:generate
```

### 4. Push Schema to Database
```bash
npm run db:push
```

### 5. Seed the Database
```bash
npm run db:seed
```

### 6. (Optional) View Database in Studio
```bash
npm run db:studio
```

## Available Scripts

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and apply migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio to view/edit data

## Seed Data

The seed file includes:

### Categories (5)
- Appetizers
- Salads  
- Main Courses
- Desserts
- Beverages

### Menu Items (17)
All menu items from the Menu page including:
- Hummus with Pita
- Greek Village Salad
- Lemon Herb Grilled Chicken
- Moussaka
- Baklava
- Fresh Lemonade
- And more...

### Sample Data
- **5 Customers** with contact information
- **5 Reservations** with various occasions and statuses
- **5 Orders** with different types and statuses
- **Order Items** linking orders to menu items

## Database Relationships

```
Category (1) ←→ (Many) MenuItem
Customer (1) ←→ (Many) Reservation
Customer (1) ←→ (Many) Order
Order (1) ←→ (Many) OrderItem
MenuItem (1) ←→ (Many) OrderItem
```

## Features

- **Menu Management** - Full menu with categories, pricing, and dietary information
- **Reservation System** - Table reservations with date/time and special requests
- **Order Tracking** - Complete order management with status tracking
- **Customer Management** - Customer profiles for orders and reservations
- **Dietary Information** - Vegetarian, spicy, and popular item flags
- **Flexible Pricing** - Decimal precision for accurate pricing

## Data Structure

### Menu Items Include:
- Name and description
- Price (decimal precision)
- Image URLs
- Category association
- Dietary flags (vegetarian, spicy)
- Popularity flag
- Availability status

### Reservations Include:
- Customer association
- Date and time
- Number of guests
- Occasion type
- Special requests
- Status tracking

### Orders Include:
- Customer association
- Order type (pickup/delivery)
- Status tracking
- Total amount
- Special requests
- Delivery address (for delivery orders)

## Usage in Application

The database schema supports all the features shown in the application pages:

- **Menu Page** - All menu items with filtering and search
- **Reserve Page** - Reservation form and booking system
- **Order Page** - Online ordering with cart functionality

## Development Notes

- Uses SQLite for development (can be changed to PostgreSQL/MySQL for production)
- Includes comprehensive seed data for testing
- Supports all application features
- Follows Prisma best practices
- Includes proper relationships and constraints 