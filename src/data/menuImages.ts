// Local image paths for menu items
export const menuImages = {
  // Appetizers
  'Hummus with Pita': '/images/menu/hummus-with-pita.jpg',
  'Mediterranean Olives': '/images/menu/mediterranean-olives.jpg',
  Spanakopita: '/images/menu/spanakopita.jpg', // Failed to download, will use placeholder
  Dolmades: '/images/menu/dolmades.jpg',

  // Salads
  'Greek Village Salad': '/images/menu/greek-village-salad.jpg',
  Tabbouleh: '/images/menu/tabbouleh.jpg',
  'Mediterranean Quinoa': '/images/menu/mediterranean-quinoa.jpg',

  // Main Courses
  'Lemon Herb Grilled Chicken': '/images/menu/lemon-herb-grilled-chicken.jpg',
  Moussaka: '/images/menu/moussaka.jpg', // Failed to download, will use placeholder
  'Mediterranean Seafood Pasta': '/images/menu/mediterranean-seafood-pasta.jpg',
  'Greek-Style Lamb Chops': '/images/menu/greek-style-lamb-chops.jpg',
  'Vegetarian Stuffed Peppers': '/images/menu/vegetarian-stuffed-peppers.jpg', // Failed to download, will use placeholder

  // Desserts
  Baklava: '/images/menu/baklava.jpg',
  'Lemon Panna Cotta': '/images/menu/lemon-panna-cotta.jpg',
  'Greek Yogurt Parfait': '/images/menu/greek-yogurt-parfait.jpg',

  // Beverages
  'Fresh Lemonade': '/images/menu/fresh-lemonade.jpg', // Failed to download, will use placeholder
  'Greek Coffee': '/images/menu/greek-coffee.jpg',
  'Mediterranean Iced Tea': '/images/menu/mediterranean-iced-tea.jpg',
  'House Wine': '/images/menu/house-wine.jpg',

  // Additional images
  'Chef Pick': '/images/menu/chef-pick.jpg',
  'Mediterranean Ambiance': '/images/menu/mediterranean-ambiance.jpg'
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
