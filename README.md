# Little Lemon Chicago


A modern restaurant website built with React, TypeScript, and Prisma.

## Features

- **Reservation System**: Book tables with real-time validation and database storage
- **Menu Display**: Browse our Mediterranean cuisine with beautiful imagery
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd little-lemon-chicago
```

2. Install dependencies:
```bash
npm install
```

3. Set up your database:
```bash
# Create a .env file with your database URL
echo 'VITE_DATABASE_URL="postgresql://username:password@localhost:5432/little_lemon"' > .env

# Generate Prisma client
npm run db:generate

# Push the schema to your database
npm run db:push

# Seed the database (optional)
npm run db:seed
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the frontend for production
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed the database with sample data
- `npm run db:studio` - Open Prisma Studio

## Reservation System

The reservation system includes:

- **Real-time validation**: Form validation with immediate feedback
- **Database storage**: Reservations are stored in PostgreSQL via Prisma
- **Customer management**: Automatic customer creation/lookup
- **Toast notifications**: Success and error feedback
- **Loading states**: Visual feedback during submission

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Animations**: Framer Motion
- **Database**: PostgreSQL with Prisma ORM (Edge Client)
- **Notifications**: Sonner toast library

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── api/           # Database operations
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
└── lib/           # Library configurations

prisma/
├── schema.prisma  # Database schema
└── seed.ts        # Database seeding
```