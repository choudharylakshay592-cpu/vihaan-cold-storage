export interface StorageInquiry {
  id?: string;
  name: string;
  phone: string;
  cropType: string;
  quantity: string;
  duration: string;
  notes?: string;
  createdAt?: string;
  status?: string;
}

export interface CropSpecialty {
  id: string;
  title: string;
  subtitle: string;
  tempRange: string;
  humidity: string;
  shelfLife: string;
  description: string;
  varieties: string[];
  keyFeatures: string[];
  image: string;
}

export interface FacilityFeature {
  iconName: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  cropStored: string;
  rating: number;
}
