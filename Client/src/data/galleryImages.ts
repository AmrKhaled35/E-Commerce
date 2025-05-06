export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  // Paris Landmarks
  {
    id: '1',
    url: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
    alt: 'Tour Eiffel',
    category: 'Paris',
    width: 4,
    height: 6
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/2412771/pexels-photo-2412771.jpeg',
    alt: 'Café parisien',
    category: 'Paris',
    width: 4,
    height: 3
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/8450844/pexels-photo-8450844.jpeg',
    alt: 'Arc de Triomphe',
    category: 'Paris',
    width: 4,
    height: 3
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg',
    alt: 'Notre Dame de Paris',
    category: 'Paris',
    width: 4,
    height: 3
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/54104/louvre-pyramid-paris-france-landmark-54104.jpeg',
    alt: 'Musée du Louvre',
    category: 'Paris',
    width: 3,
    height: 2
  },
  
  // French Culture & People
  {
    id: '6',
    url: 'https://images.pexels.com/photos/2162936/pexels-photo-2162936.jpeg',
    alt: 'Boulanger français',
    category: 'People',
    width: 3,
    height: 4
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg',
    alt: 'Pâtissier au travail',
    category: 'People',
    width: 3,
    height: 4
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg',
    alt: 'Couple à Paris',
    category: 'People',
    width: 4,
    height: 3
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg',
    alt: 'Artiste Montmartre',
    category: 'People',
    width: 3,
    height: 2
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg',
    alt: 'Mode parisienne',
    category: 'People',
    width: 3,
    height: 4
  },
  
  // Pastries & Bakery
  {
    id: '11',
    url: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    alt: 'Croissants frais',
    category: 'Pastries',
    width: 4,
    height: 3
  },
  {
    id: '12',
    url: 'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg',
    alt: 'Macarons colorés',
    category: 'Pastries',
    width: 3,
    height: 2
  },
  {
    id: '13',
    url: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg',
    alt: 'Étalage de pâtisseries',
    category: 'Pastries',
    width: 4,
    height: 3
  },
  {
    id: '14',
    url: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
    alt: 'Pain frais',
    category: 'Pastries',
    width: 3,
    height: 4
  },
  {
    id: '15',
    url: 'https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg',
    alt: 'Tarte aux fraises',
    category: 'Pastries',
    width: 4,
    height: 3
  },
  
  // French Countryside
  {
    id: '16',
    url: 'https://images.pexels.com/photos/2539407/pexels-photo-2539407.jpeg',
    alt: 'Champs de lavande en Provence',
    category: 'Countryside',
    width: 4,
    height: 3
  },
  {
    id: '17',
    url: 'https://images.pexels.com/photos/2110923/pexels-photo-2110923.jpeg',
    alt: 'Vignobles français',
    category: 'Countryside',
    width: 4,
    height: 3
  },
  {
    id: '18',
    url: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg',
    alt: 'Village de Provence',
    category: 'Countryside',
    width: 3,
    height: 2
  },
  {
    id: '19',
    url: 'https://images.pexels.com/photos/9811989/pexels-photo-9811989.jpeg',
    alt: 'Château de la Loire',
    category: 'Countryside',
    width: 3,
    height: 4
  },
  {
    id: '20',
    url: 'https://images.pexels.com/photos/7243326/pexels-photo-7243326.jpeg',
    alt: 'Marché provençal',
    category: 'Countryside',
    width: 4,
    height: 3
  },
  
  // Additional Pastries
  {
    id: '21',
    url: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg',
    alt: 'Pain au chocolat',
    category: 'Pastries',
    width: 3,
    height: 4
  },
  {
    id: '22',
    url: 'https://images.pexels.com/photos/3776946/pexels-photo-3776946.jpeg',
    alt: 'Éclair au café',
    category: 'Pastries',
    width: 3,
    height: 4
  },
  {
    id: '23',
    url: 'https://images.pexels.com/photos/4686833/pexels-photo-4686833.jpeg',
    alt: 'Madeleines traditionnelles',
    category: 'Pastries',
    width: 4,
    height: 3
  },
  {
    id: '24',
    url: 'https://images.pexels.com/photos/5816178/pexels-photo-5816178.jpeg',
    alt: 'Choux à la crème',
    category: 'Pastries',
    width: 3,
    height: 4
  },
  
  // Additional Paris Scenes
  {
    id: '25',
    url: 'https://images.pexels.com/photos/161901/paris-moulin-rouge-france-french-161901.jpeg',
    alt: 'Moulin Rouge',
    category: 'Paris',
    width: 4,
    height: 3
  },
  {
    id: '26',
    url: 'https://images.pexels.com/photos/5241036/pexels-photo-5241036.jpeg',
    alt: 'Rues de Paris',
    category: 'Paris',
    width: 3,
    height: 4
  },
  {
    id: '27',
    url: 'https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg',
    alt: 'Café parisien typique',
    category: 'Paris',
    width: 4,
    height: 3
  },
  {
    id: '28',
    url: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
    alt: 'Pont Alexandre III',
    category: 'Paris',
    width: 4,
    height: 3
  },
  {
    id: '29',
    url: 'https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg',
    alt: 'Montmartre',
    category: 'Paris',
    width: 3,
    height: 4
  },
  {
    id: '30',
    url: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
    alt: 'Seine River',
    category: 'Paris',
    width: 4,
    height: 3
  }
];