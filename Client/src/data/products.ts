import { Product } from '../types/Product';

export const productsData: Product[] = [
  {
    id: '1',
    name: 'Croissant Classique',
    description: 'Notre croissant traditionnel au beurre français, croustillant à l\'extérieur et moelleux à l\'intérieur.',
    price: 2.50,
    category: 'Viennoiseries',
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    gallery: [
      'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
      'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg',
      'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg'
    ],
    ingredients: ['Farine de blé', 'Beurre AOP', 'Levure', 'Sel', 'Sucre'],
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    allergens: ['Gluten', 'Lactose'],
    weight: '60g',
    nutritionalInfo: {
      calories: 240,
      protein: 4.5,
      carbs: 26,
      fat: 12
    }
  },
  {
    id: '2',
    name: 'Pain au Chocolat',
    description: 'Délicieuse viennoiserie au beurre français avec deux barres de chocolat noir exquis.',
    price: 2.80,
    category: 'Viennoiseries',
    image: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg',
      'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg',
      'https://images.pexels.com/photos/5848613/pexels-photo-5848613.jpeg'
    ],
    ingredients: ['Farine de blé', 'Beurre AOP', 'Chocolat noir 70%', 'Levure', 'Sel', 'Sucre'],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    allergens: ['Gluten', 'Lactose', 'Soja'],
    weight: '70g',
    nutritionalInfo: {
      calories: 280,
      protein: 5,
      carbs: 30,
      fat: 15
    }
  },
  {
    id: '3',
    name: 'Tarte aux Fraises',
    description: 'Une tarte délicate garnie de crème pâtissière onctueuse et de fraises françaises fraîches.',
    price: 4.50,
    category: 'Tartes',
    image: 'https://images.pexels.com/photos/2693448/pexels-photo-2693448.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2693448/pexels-photo-2693448.jpeg',
      'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg',
      'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg'
    ],
    ingredients: ['Farine de blé', 'Beurre', 'Œufs', 'Sucre', 'Fraises', 'Crème'],
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    allergens: ['Gluten', 'Lactose', 'Œufs'],
    weight: '120g',
    nutritionalInfo: {
      calories: 320,
      protein: 6,
      carbs: 40,
      fat: 14
    }
  },
  {
    id: '4',
    name: 'Éclair au Café',
    description: 'Pâte à choux légère remplie de crème au café et nappée d\'un glaçage au café intense.',
    price: 3.80,
    category: 'Pâtisseries',
    image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg',
      'https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg',
      'https://images.pexels.com/photos/6941046/pexels-photo-6941046.jpeg'
    ],
    ingredients: ['Farine de blé', 'Beurre', 'Œufs', 'Café', 'Crème', 'Sucre'],
    isNew: true,
    isFeatured: false,
    rating: 4.6,
    allergens: ['Gluten', 'Lactose', 'Œufs'],
    weight: '85g',
    nutritionalInfo: {
      calories: 260,
      protein: 5.5,
      carbs: 28,
      fat: 15
    }
  },
  {
    id: '5',
    name: 'Macaron Framboise',
    description: 'Élégant macaron à la coque craquante garni d\'une ganache crémeuse à la framboise.',
    price: 1.90,
    category: 'Macarons',
    image: 'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg',
    gallery: [
      'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg',
      'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg',
      'https://images.pexels.com/photos/3014776/pexels-photo-3014776.jpeg'
    ],
    ingredients: ['Poudre d\'amande', 'Sucre glace', 'Blancs d\'œufs', 'Framboise', 'Crème'],
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    allergens: ['Œufs', 'Fruits à coque'],
    weight: '25g',
    nutritionalInfo: {
      calories: 120,
      protein: 2.5,
      carbs: 18,
      fat: 5
    }
  },
  {
    id: '6',
    name: 'Baguette Tradition',
    description: 'Baguette traditionnelle française à la croûte dorée et à la mie aérée, préparée selon la recette ancestrale.',
    price: 1.20,
    category: 'Pains',
    image: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg',
      'https://images.pexels.com/photos/2569315/pexels-photo-2569315.jpeg',
      'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg'
    ],
    ingredients: ['Farine de blé T65', 'Levain', 'Sel', 'Eau'],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    allergens: ['Gluten'],
    weight: '250g',
    nutritionalInfo: {
      calories: 260,
      protein: 9,
      carbs: 52,
      fat: 1
    }
  },
  {
    id: '7',
    name: 'Mille-feuille',
    description: 'Dessert classique composé de trois couches de pâte feuilletée et deux couches de crème pâtissière à la vanille.',
    price: 4.20,
    category: 'Pâtisseries',
    image: 'https://images.pexels.com/photos/6747/food-dessert-sweet-color.jpg',
    gallery: [
      'https://images.pexels.com/photos/6747/food-dessert-sweet-color.jpg',
      'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
      'https://images.pexels.com/photos/2245293/pexels-photo-2245293.jpeg'
    ],
    ingredients: ['Pâte feuilletée', 'Crème pâtissière', 'Vanille', 'Sucre glace'],
    isNew: false,
    isFeatured: false,
    rating: 4.6,
    allergens: ['Gluten', 'Lactose', 'Œufs'],
    weight: '110g',
    nutritionalInfo: {
      calories: 340,
      protein: 5,
      carbs: 42,
      fat: 17
    }
  },
  {
    id: '8',
    name: 'Tarte au Citron Meringuée',
    description: 'Une association parfaite entre l\'acidité du citron et la douceur de la meringue italienne.',
    price: 4.50,
    category: 'Tartes',
    image: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg',
    gallery: [
      'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg',
      'https://images.pexels.com/photos/8805368/pexels-photo-8805368.jpeg',
      'https://images.pexels.com/photos/9197108/pexels-photo-9197108.jpeg'
    ],
    ingredients: ['Pâte sucrée', 'Citrons', 'Œufs', 'Sucre', 'Blancs d\'œufs'],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    allergens: ['Gluten', 'Œufs'],
    weight: '130g',
    nutritionalInfo: {
      calories: 310,
      protein: 5.5,
      carbs: 45,
      fat: 12
    }
  },
  {
    id: '9',
    name: 'Financier aux Amandes',
    description: 'Petit gâteau moelleux aux amandes avec un subtil goût de beurre noisette.',
    price: 1.80,
    category: 'Petit Fours',
    image: 'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg',
      'https://images.pexels.com/photos/2067424/pexels-photo-2067424.jpeg',
      'https://images.pexels.com/photos/2067433/pexels-photo-2067433.jpeg'
    ],
    ingredients: ['Poudre d\'amande', 'Beurre noisette', 'Sucre', 'Blancs d\'œufs', 'Farine'],
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    allergens: ['Gluten', 'Œufs', 'Fruits à coque'],
    weight: '40g',
    nutritionalInfo: {
      calories: 180,
      protein: 4,
      carbs: 16,
      fat: 12
    }
  },
  {
    id: '10',
    name: 'Brioche Parisienne',
    description: 'Brioche moelleuse au beurre enrichie, parfaite pour le petit-déjeuner ou le goûter.',
    price: 3.50,
    category: 'Viennoiseries',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg',
      'https://images.pexels.com/photos/5419178/pexels-photo-5419178.jpeg'
    ],
    ingredients: ['Farine de blé', 'Beurre', 'Œufs', 'Sucre', 'Levure'],
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    allergens: ['Gluten', 'Lactose', 'Œufs'],
    weight: '200g',
    nutritionalInfo: {
      calories: 380,
      protein: 8,
      carbs: 48,
      fat: 18
    }
  },
  {
    id: '11',
    name: 'Paris-Brest',
    description: 'Pâtisserie en forme de roue de vélo garnie d\'une délicieuse crème pralinée aux noisettes.',
    price: 5.20,
    category: 'Pâtisseries',
    image: 'https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg',
    gallery: [
      'https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg',
      'https://images.pexels.com/photos/4877864/pexels-photo-4877864.jpeg',
      'https://images.pexels.com/photos/5836629/pexels-photo-5836629.jpeg'
    ],
    ingredients: ['Pâte à choux', 'Crème pralinée', 'Noisettes', 'Sucre', 'Beurre'],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    allergens: ['Gluten', 'Lactose', 'Œufs', 'Fruits à coque'],
    weight: '140g',
    nutritionalInfo: {
      calories: 420,
      protein: 9,
      carbs: 38,
      fat: 26
    }
  },
  {
    id: '12',
    name: 'Opéra',
    description: 'Gâteau multicouche au café et au chocolat, garni de ganache, de crème au beurre et d\'un glaçage au chocolat.',
    price: 4.80,
    category: 'Pâtisseries',
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
      'https://images.pexels.com/photos/5836561/pexels-photo-5836561.jpeg',
      'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg'
    ],
    ingredients: ['Biscuit Joconde', 'Ganache au chocolat', 'Crème au beurre', 'Café', 'Chocolat'],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    allergens: ['Gluten', 'Lactose', 'Œufs', 'Soja'],
    weight: '100g',
    nutritionalInfo: {
      calories: 390,
      protein: 6,
      carbs: 42,
      fat: 23
    }
  }
];