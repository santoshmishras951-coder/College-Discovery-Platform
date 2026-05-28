export interface Course {
  id: string;
  name: string;
  duration: string;
  fees: number;
  type: 'Degree' | 'Diploma' | 'Certificate';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface PlacementStats {
  highestPackage: number; // in LPA
  averagePackage: number; // in LPA
  placementRate: number; // percentage
  topRecruiters: string[];
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  location: {
    city: string;
    state: string;
  };
  type: 'Public' | 'Private';
  established: number;
  rating: number;
  reviewCount: number;
  coverImage: string;
  logo: string;
  description: string;
  facilities: string[];
  courses: Course[];
  placementStats: PlacementStats;
  ranking: number;
  gallery: string[];
}
