// Local image paths for menu items
export const menuImages = {
  // Appetizers
  'Hummus with Pita': '/images/hummus-with-pita.jpg',
  'Mediterranean Olives': '/images/mediterranean-olives.jpg',
  'Spanakopita': '/images/spanakopita.jpg', // Failed to download, will use placeholder
  'Dolmades': '/images/dolmades.jpg',
  
  // Salads
  'Greek Village Salad': '/images/greek-village-salad.jpg',
  'Tabbouleh': '/images/tabbouleh.jpg',
  'Mediterranean Quinoa': '/images/mediterranean-quinoa.jpg',
  
  // Main Courses
  'Lemon Herb Grilled Chicken': '/images/lemon-herb-grilled-chicken.jpg',
  'Moussaka': '/images/moussaka.jpg', // Failed to download, will use placeholder
  'Mediterranean Seafood Pasta': '/images/mediterranean-seafood-pasta.jpg',
  'Greek-Style Lamb Chops': '/images/greek-style-lamb-chops.jpg',
  'Vegetarian Stuffed Peppers': '/images/vegetarian-stuffed-peppers.jpg', // Failed to download, will use placeholder
  
  // Desserts
  'Baklava': '/images/baklava.jpg',
  'Lemon Panna Cotta': '/images/lemon-panna-cotta.jpg',
  'Greek Yogurt Parfait': '/images/greek-yogurt-parfait.jpg',
  
  // Beverages
  'Fresh Lemonade': '/images/fresh-lemonade.jpg', // Failed to download, will use placeholder
  'Greek Coffee': '/images/greek-coffee.jpg',
  'Mediterranean Iced Tea': '/images/mediterranean-iced-tea.jpg',
  'House Wine': '/images/house-wine.jpg',
  
  // Additional images
  'Chef Pick': '/images/chef-pick.jpg',
  'Mediterranean Ambiance': '/images/mediterranean-ambiance.jpg'
}

// Function to get image path with fallback to placeholder
export function getImagePath(itemName: string): string {
  const localPath = menuImages[itemName as keyof typeof menuImages]
  if (localPath) {
    return localPath
  }
  // Fallback to placeholder if local image doesn't exist
  return '/placeholder.svg'
} 