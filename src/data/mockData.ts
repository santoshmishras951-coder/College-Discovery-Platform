import { College } from '../types';

export const mockColleges: College[] = [
  {
    id: 'c1',
    name: 'Indian Institute of Technology, Bombay',
    shortName: 'IIT Bombay',
    location: { city: 'Mumbai', state: 'Maharashtra' },
    type: 'Public',
    established: 1958,
    rating: 4.9,
    reviewCount: 2450,
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'IIT Bombay is a premier public technical and research university located in Powai, Mumbai. It is globally recognized for its engineering and sciences programs.',
    facilities: ['Hostel', 'Library', 'Sports Complex', 'Gym', 'Cafeteria', 'Hospital', 'Wi-Fi Campus'],
    courses: [
      { id: 'c1-crs1', name: 'B.Tech Computer Science', duration: '4 Years', fees: 220000, type: 'Degree' },
      { id: 'c1-crs2', name: 'B.Tech Mechanical Engineering', duration: '4 Years', fees: 220000, type: 'Degree' },
      { id: 'c1-crs3', name: 'M.Tech Data Science', duration: '2 Years', fees: 150000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 150,
      averagePackage: 23,
      placementRate: 98,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys']
    },
    ranking: 1,
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80',
      'https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?w=500&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&q=80'
    ]
  },
  {
    id: 'c2',
    name: 'Delhi University',
    shortName: 'DU',
    location: { city: 'New Delhi', state: 'Delhi' },
    type: 'Public',
    established: 1922,
    rating: 4.5,
    reviewCount: 4200,
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'The University of Delhi is a premier collegiate public central university located in New Delhi, known for its high standards in teaching and research and attracts eminent scholars.',
    facilities: ['Library', 'Cafeteria', 'Auditorium', 'Wi-Fi Campus', 'Sports Complex'],
    courses: [
      { id: 'c2-crs1', name: 'B.Com (Hons.)', duration: '3 Years', fees: 30000, type: 'Degree' },
      { id: 'c2-crs2', name: 'B.A. (Hons.) Economics', duration: '3 Years', fees: 25000, type: 'Degree' },
      { id: 'c2-crs3', name: 'M.A. English', duration: '2 Years', fees: 20000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 35,
      averagePackage: 8,
      placementRate: 85,
      topRecruiters: ['KPMG', 'EY', 'Deloitte', 'PwC', 'McKinsey']
    },
    ranking: 5,
    gallery: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80'
    ]
  },
  {
    id: 'c3',
    name: 'Birla Institute of Technology and Science',
    shortName: 'BITS Pilani',
    location: { city: 'Pilani', state: 'Rajasthan' },
    type: 'Private',
    established: 1964,
    rating: 4.8,
    reviewCount: 1800,
    coverImage: 'https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'BITS Pilani is a private deemed university in Pilani, Rajasthan. It focuses primarily on higher education and research in engineering and sciences.',
    facilities: ['Hostel', 'Library', 'Sports Complex', 'Gym', 'Hospital', 'A/C Classrooms'],
    courses: [
      { id: 'c3-crs1', name: 'B.E. Computer Science', duration: '4 Years', fees: 550000, type: 'Degree' },
      { id: 'c3-crs2', name: 'B.E. Electronics', duration: '4 Years', fees: 550000, type: 'Degree' },
      { id: 'c3-crs3', name: 'M.Sc. Physics', duration: '2 Years', fees: 400000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 60,
      averagePackage: 18,
      placementRate: 95,
      topRecruiters: ['Cisco', 'Oracle', 'Goldman Sachs', 'Uber']
    },
    ranking: 3,
    gallery: [
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&q=80'
    ]
  },
  {
    id: 'c4',
    name: 'National Institute of Technology',
    shortName: 'NIT Trichy',
    location: { city: 'Tiruchirappalli', state: 'Tamil Nadu' },
    type: 'Public',
    established: 1964,
    rating: 4.7,
    reviewCount: 1550,
    coverImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'NIT Trichy is a public technical and research university known for its excellent academic standards and research facilities in coastal regions.',
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Cafeteria'],
    courses: [
      { id: 'c4-crs1', name: 'B.Tech Civil', duration: '4 Years', fees: 180000, type: 'Degree' },
      { id: 'c4-crs2', name: 'B.Tech IT', duration: '4 Years', fees: 180000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 42,
      averagePackage: 14,
      placementRate: 92,
      topRecruiters: ['L&T', 'TCS', 'Wipro', 'Texas Instruments']
    },
    ranking: 9,
    gallery: []
  },
  {
    id: 'c5',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    location: { city: 'Vellore', state: 'Tamil Nadu' },
    type: 'Private',
    established: 1984,
    rating: 4.4,
    reviewCount: 5600,
    coverImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'VIT is a private deemed university known for its large campus, diverse student body, and extensive engineering programs.',
    facilities: ['Smart Classrooms', 'Library', 'Hostel', 'Swimming Pool', 'Gym', 'Cafeteria'],
    courses: [
      { id: 'c5-crs1', name: 'B.Tech CSE', duration: '4 Years', fees: 490000, type: 'Degree' },
      { id: 'c5-crs2', name: 'B.Tech ECE', duration: '4 Years', fees: 490000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 75,
      averagePackage: 8.5,
      placementRate: 88,
      topRecruiters: ['Cognizant', 'TCS', 'Wipro', 'Infosys']
    },
    ranking: 15,
    gallery: []
  },
  {
    id: 'c6',
    name: 'Manipal Academy of Higher Education',
    shortName: 'MAHE',
    location: { city: 'Manipal', state: 'Karnataka' },
    type: 'Private',
    established: 1953,
    rating: 4.5,
    reviewCount: 3100,
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'MAHE is a private deemed university offering a wide range of programs in engineering, medicine, and management with global facilities.',
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Hospital', 'Labs'],
    courses: [
      { id: 'c6-crs1', name: 'B.Tech', duration: '4 Years', fees: 450000, type: 'Degree' },
      { id: 'c6-crs2', name: 'BBA', duration: '3 Years', fees: 300000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 45,
      averagePackage: 9,
      placementRate: 90,
      topRecruiters: ['IBM', 'Accenture', 'Cerner', 'Mercedes Benz']
    },
    ranking: 12,
    gallery: []
  },
  {
    id: 'c7',
    name: 'Indian Institute of Management, Ahmedabad',
    shortName: 'IIMA',
    location: { city: 'Ahmedabad', state: 'Gujarat' },
    type: 'Public',
    established: 1961,
    rating: 4.9,
    reviewCount: 1200,
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'IIM Ahmedabad is the premier management school in India, globally renowned for its rigorous academic programs and exceptional alumni.',
    facilities: ['Library', 'AC Hostels', 'Sports Complex', 'Auditorium'],
    courses: [
      { id: 'c7-crs1', name: 'MBA (PGP)', duration: '2 Years', fees: 2500000, type: 'Degree' },
      { id: 'c7-crs2', name: 'Executive MBA', duration: '1 Year', fees: 3000000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 115,
      averagePackage: 33,
      placementRate: 100,
      topRecruiters: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs']
    },
    ranking: 1, // Management
    gallery: []
  },
  {
    id: 'c8',
    name: 'Christ University',
    shortName: 'Christ',
    location: { city: 'Bangalore', state: 'Karnataka' },
    type: 'Private',
    established: 1969,
    rating: 4.3,
    reviewCount: 4500,
    coverImage: 'https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'Christ University is a deemed private university known for its arts, commerce, and science programs offering holistic education.',
    facilities: ['Library', 'Cafeteria', 'Auditorium', 'Wi-Fi Campus'],
    courses: [
      { id: 'c8-crs1', name: 'BBA', duration: '3 Years', fees: 200000, type: 'Degree' },
      { id: 'c8-crs2', name: 'BCA', duration: '3 Years', fees: 150000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 20,
      averagePackage: 6.5,
      placementRate: 85,
      topRecruiters: ['Deloitte', 'KPMG', 'EY', 'Amazon']
    },
    ranking: 20,
    gallery: []
  },
  {
    id: 'c9',
    name: 'Jawaharlal Nehru University',
    shortName: 'JNU',
    location: { city: 'New Delhi', state: 'Delhi' },
    type: 'Public',
    established: 1969,
    rating: 4.6,
    reviewCount: 2200,
    coverImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'JNU is a public major research university located in New Delhi, known for leading faculties in liberal arts, sciences, and international studies.',
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Healthcare'],
    courses: [
      { id: 'c9-crs1', name: 'M.A. International Relations', duration: '2 Years', fees: 5000, type: 'Degree' },
      { id: 'c9-crs2', name: 'M.Sc. Life Sciences', duration: '2 Years', fees: 6000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 16,
      averagePackage: 7,
      placementRate: 75,
      topRecruiters: ['Think Tanks', 'Research Institutes', 'NGOs']
    },
    ranking: 2, // University
    gallery: []
  },
  {
    id: 'c10',
    name: 'SRM Institute of Science and Technology',
    shortName: 'SRM',
    location: { city: 'Chennai', state: 'Tamil Nadu' },
    type: 'Private',
    established: 1985,
    rating: 4.2,
    reviewCount: 6100,
    coverImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'SRM is a top-ranking private university offering multidisciplinary programs with an emphasis on research, innovation, and industry ties.',
    facilities: ['Smart Classrooms', 'Library', 'Hostel', 'A/C Campus', 'Gym'],
    courses: [
      { id: 'c10-crs1', name: 'B.Tech CSE', duration: '4 Years', fees: 350000, type: 'Degree' },
      { id: 'c10-crs2', name: 'MBA', duration: '2 Years', fees: 400000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 50,
      averagePackage: 7.5,
      placementRate: 85,
      topRecruiters: ['TCS', 'Infosys', 'Cognizant', 'Google']
    },
    ranking: 18,
    gallery: []
  },
  {
    id: 'c11',
    name: 'Amity University, Noida',
    shortName: 'Amity',
    location: { city: 'Noida', state: 'Uttar Pradesh' },
    type: 'Private',
    established: 2005,
    rating: 4.1,
    reviewCount: 3800,
    coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'Amity University is known for its modern infrastructure, global exposure programs, and wide variety of courses.',
    facilities: ['A/C Hostels', 'Library', 'Sports Complex', 'Swimming Pool', 'Wi-Fi Campus'],
    courses: [
      { id: 'c11-crs1', name: 'B.Tech CSE', duration: '4 Years', fees: 350000, type: 'Degree' },
      { id: 'c11-crs2', name: 'B.A. LL.B', duration: '5 Years', fees: 280000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 30,
      averagePackage: 6,
      placementRate: 80,
      topRecruiters: ['Accenture', 'Capgemini', 'IBM']
    },
    ranking: 25,
    gallery: []
  },
  {
    id: 'c12',
    name: 'Symbiosis International University',
    shortName: 'Symbiosis',
    location: { city: 'Pune', state: 'Maharashtra' },
    type: 'Private',
    established: 1971,
    rating: 4.4,
    reviewCount: 2900,
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'Symbiosis is a reputed private university network known primarily for management, law, and arts.',
    facilities: ['Library', 'Hostel', 'Auditorium', 'Sports Complex'],
    courses: [
      { id: 'c12-crs1', name: 'BBA', duration: '3 Years', fees: 300000, type: 'Degree' },
      { id: 'c12-crs2', name: 'B.A. LL.B', duration: '5 Years', fees: 350000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 25,
      averagePackage: 8,
      placementRate: 88,
      topRecruiters: ['KPMG', 'HDFC Bank', 'ICICI', 'Deloitte']
    },
    ranking: 15, // Law/Management
    gallery: []
  },
  {
    id: 'c13',
    name: 'College of Engineering, Pune',
    shortName: 'COEP',
    location: { city: 'Pune', state: 'Maharashtra' },
    type: 'Public',
    established: 1854,
    rating: 4.6,
    reviewCount: 3300,
    coverImage: 'https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'COEP is one of the oldest engineering colleges in Asia, known for strong alumni network and core engineering branches.',
    facilities: ['Library', 'Hostel', 'Boat Club', 'Sports Complex'],
    courses: [
      { id: 'c13-crs1', name: 'B.Tech Mechanical', duration: '4 Years', fees: 110000, type: 'Degree' },
      { id: 'c13-crs2', name: 'B.Tech Computer', duration: '4 Years', fees: 110000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 45,
      averagePackage: 10,
      placementRate: 92,
      topRecruiters: ['Bajaj Auto', 'TATA Motors', 'Cognizant']
    },
    ranking: 11, // Engineering
    gallery: []
  },
  {
    id: 'c14',
    name: 'Anna University',
    shortName: 'Anna Univ',
    location: { city: 'Chennai', state: 'Tamil Nadu' },
    type: 'Public',
    established: 1978,
    rating: 4.5,
    reviewCount: 4100,
    coverImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'Anna University is a premier state technical university with robust research wings in aerospace, automobile, and IT.',
    facilities: ['Library', 'Hostel', 'Research Centers', 'Sports Complex'],
    courses: [
      { id: 'c14-crs1', name: 'B.E. Aerospace', duration: '4 Years', fees: 60000, type: 'Degree' },
      { id: 'c14-crs2', name: 'B.E. CSE', duration: '4 Years', fees: 60000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 36,
      averagePackage: 7.5,
      placementRate: 85,
      topRecruiters: ['Hyundai', 'TCS', 'Infosys', 'Ford']
    },
    ranking: 8, // Engineering
    gallery: []
  },
  {
    id: 'c15',
    name: 'Indian Institute of Technology, Madras',
    shortName: 'IIT Madras',
    location: { city: 'Chennai', state: 'Tamil Nadu' },
    type: 'Public',
    established: 1959,
    rating: 4.9,
    reviewCount: 2800,
    coverImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80',
    description: 'IIT Madras is renowned for its academic excellence, expansive green campus, and vibrant startup ecosystem.',
    facilities: ['Hostel', 'Library', 'Sports Complex', 'Research Park', 'Hospital'],
    courses: [
      { id: 'c15-crs1', name: 'B.Tech Aerospace', duration: '4 Years', fees: 200000, type: 'Degree' },
      { id: 'c15-crs2', name: 'B.Tech Electrical', duration: '4 Years', fees: 200000, type: 'Degree' }
    ],
    placementStats: {
      highestPackage: 130,
      averagePackage: 21,
      placementRate: 96,
      topRecruiters: ['Microsoft', 'Google', 'Apple', 'Texas Instruments']
    },
    ranking: 1, // Overall NIRF
    gallery: []
  }
];
