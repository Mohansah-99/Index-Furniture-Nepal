export interface FurnitureCategory {
  id: string;
  title: string;
  description: string;
  itemCount: number;
  image: string;
  tag: string;
}

export interface FurnitureCollection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  featuredItems: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  descriptor: string;
  priceNote: string;
  estimatedPrice?: string;
  dimensions: string;
  materials: string[];
  finishes: string[];
  image: string;
  description: string;
  featured: boolean;
  leadTime: string;
}

export interface RoomScene {
  id: string;
  name: string;
  title: string;
  caption: string;
  image: string;
  highlights: {
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  residenceType: string;
  verified: boolean;
}

export interface ShowroomLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  hours: string;
  weekendHours: string;
  mapEmbedUrl: string;
  parking: string;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  lookingFor: string;
  preferredContact: 'whatsapp' | 'phone' | 'email';
  roomType: string;
  budgetRange: string;
  message: string;
}
