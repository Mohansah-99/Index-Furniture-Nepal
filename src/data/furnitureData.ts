import {
  FurnitureCategory,
  FurnitureCollection,
  ProductItem,
  RoomScene,
  Testimonial,
  ShowroomLocation
} from '../types';

// Brand Information
export const BRAND_INFO = {
  name: 'Index Furniture Nepal',
  tagline: 'Furniture That Makes Home Feel Like Yours.',
  subheadline: 'Thoughtfully designed furniture for beautiful, comfortable homes across Nepal.',
  eyebrow: 'DESIGNED FOR THE WAY YOU LIVE',
  phone: '+977-1-4438920',
  phoneDisplay: '+977 1 443 8920',
  mobileWhatsapp: '+9779801234567',
  mobileWhatsappDisplay: '+977 980 123 4567',
  email: 'concierge@indexfurniture.com.np',
  hours: 'Sunday – Friday: 10:00 AM – 7:30 PM | Saturday: 11:00 AM – 6:00 PM',
};

// Trust / Value Strip Items
export const TRUST_BENEFITS = [
  {
    title: 'Quality Materials',
    description: 'Sustainably sourced teak, oak, natural linens & high-density comfort foams',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Designed for Everyday Living',
    description: 'Generous proportions, durable finishes & family-ready practicality',
    iconName: 'Sparkles'
  },
  {
    title: 'Custom Options Available',
    description: 'Bespoke dimensions, 40+ upholstery textiles & wood stain selections',
    iconName: 'Layers'
  },
  {
    title: 'Reliable Delivery & Support',
    description: 'White-glove assembly across Kathmandu Valley and scheduled Nepal-wide dispatch',
    iconName: 'Truck'
  }
];

// Featured Categories
export const CATEGORIES: FurnitureCategory[] = [
  {
    id: 'living',
    title: 'Living Room',
    description: 'Deep modular sectionals, lounge chairs, and warm timber coffee tables designed for gathering.',
    itemCount: 42,
    image: '/src/assets/images/hero_living_room_1789797916437.jpg',
    tag: 'Flagship Collection'
  },
  {
    id: 'dining',
    title: 'Dining Room',
    description: 'Handcrafted solid wood dining tables and sculpted chairs crafted for shared meals and conversations.',
    itemCount: 28,
    image: '/src/assets/images/dining_collection_1789797931065.jpg',
    tag: 'Architectural Craft'
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Serene low-profile wooden bed frames, soft padded headboards, and restful storage solutions.',
    itemCount: 34,
    image: '/src/assets/images/bedroom_collection_1789797944730.jpg',
    tag: 'Restful Sanctuaries'
  },
  {
    id: 'office',
    title: 'Home Office',
    description: 'Ergonomic writing desks, cable-integrated workstations, and tailored study chairs.',
    itemCount: 19,
    image: '/src/assets/images/home_office_study_1789797969908.jpg',
    tag: 'Focused Spaces'
  },
  {
    id: 'storage',
    title: 'Storage & Credenzas',
    description: 'Fluted wood sideboards, media consoles, and minimalist shelving units that bring calm order.',
    itemCount: 25,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    tag: 'Smart Storage'
  },
  {
    id: 'decor',
    title: 'Décor & Accessories',
    description: 'Artisanal ceramic vessels, warm parchment lamps, and natural wool rugs.',
    itemCount: 56,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
    tag: 'Finishing Touches'
  }
];

// Featured Collections (Asymmetric magazine grid)
export const FEATURED_COLLECTIONS: FurnitureCollection[] = [
  {
    id: 'contemporary-living',
    title: 'Contemporary Living',
    subtitle: 'Editorial Softness Meets Solid Timber',
    description: 'Generously proportioned sofas in textured oat weaves anchored by solid oak timber details and rounded profiles.',
    image: '/src/assets/images/hero_living_room_1789797916437.jpg',
    accent: 'Lounge & Hospitality',
    featuredItems: ['Modular Sectional', 'Nest Tables', 'Oat Lounge Pouf']
  },
  {
    id: 'warm-minimalism',
    title: 'Warm Minimalism',
    subtitle: 'Quiet Forms & Tactile Materials',
    description: 'A curated dialogue between warm walnut, bouclé accents, and unlacquered brass hardware.',
    image: '/src/assets/images/chair_product_1789797956792.jpg',
    accent: 'Architectural Quietude',
    featuredItems: ['Haven Armchair', 'Curved Pedestal', 'Linen Floor Lamp']
  },
  {
    id: 'modern-bedroom',
    title: 'Modern Bedroom',
    subtitle: 'Sanctuaries of Natural Calm',
    description: 'Understated wooden platform beds engineered with Japanese joinery and breathable natural linens.',
    image: '/src/assets/images/bedroom_collection_1789797944730.jpg',
    accent: 'Rest & Restoration',
    featuredItems: ['Aria Bedstead', 'Floating Nightstand', 'Bed-end Bench']
  },
  {
    id: 'family-dining',
    title: 'Family Dining',
    subtitle: 'Centering Everyday Gatherings',
    description: 'Solid teak and oak tables designed to endure decades of family dinners, festive celebrations, and morning tea.',
    image: '/src/assets/images/dining_collection_1789797931065.jpg',
    accent: 'Heirloom Craft',
    featuredItems: ['Noma Extension Table', 'Cove Dining Chairs', 'Buffet Server']
  },
  {
    id: 'work-from-home',
    title: 'Work From Home',
    subtitle: 'Calm Productivity for Urban Life',
    description: 'Clean workstations with concealed wire management and tactile wood veneers for creative focus.',
    image: '/src/assets/images/home_office_study_1789797969908.jpg',
    accent: 'Modern Workspace',
    featuredItems: ['Atelier Desk', 'Studio Swivel Chair', 'Wall Ledger Shelf']
  }
];

// 6 Required Products
export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'oslo-lounge-sofa',
    name: 'Oslo Lounge Sofa',
    category: 'living',
    descriptor: 'Deep 3-seater sofa with feather-blend cushions & solid oak plinth',
    priceNote: 'Price on Request / Custom Sizing Available',
    estimatedPrice: 'From NPR 145,000',
    dimensions: 'W 240cm × D 102cm × H 78cm',
    materials: ['Kiln-Dried Solid Hardwood Frame', 'Belgian Linen-Blend Upholstery', 'High-Resilience Latex & Down Fill'],
    finishes: ['Warm Ivory Oatmeal', 'Natural Sand', 'Earthy Terracotta', 'Charcoal Slate'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    description: 'The Oslo Lounge Sofa redefines generous comfort. Built with a solid internal hardwood frame and upholstered in a stain-resistant natural linen blend, it offers deep, welcoming seating tailored for family living.',
    featured: true,
    leadTime: 'In Stock (Kathmandu) or 2-3 weeks custom'
  },
  {
    id: 'haven-accent-chair',
    name: 'Haven Accent Chair',
    category: 'living',
    descriptor: 'Sculptural reading chair in tactile cream bouclé with dark walnut legs',
    priceNote: 'Price on Request',
    estimatedPrice: 'From NPR 48,000',
    dimensions: 'W 86cm × D 84cm × H 76cm',
    materials: ['Sculpted Solid Walnut Frame', 'High-Density Ergonomic Core', 'Textured Bouclé Wool Blend'],
    finishes: ['Warm Cream Bouclé', 'Toasted Tan Velvet', 'Smoked Olive'],
    image: '/src/assets/images/chair_product_1789797956792.jpg',
    description: 'An inviting organic silhouette that hugs the body. The Haven Accent Chair serves as a focal point in any living room or master bedroom corner.',
    featured: true,
    leadTime: 'Immediate Showroom Pickup Available'
  },
  {
    id: 'noma-dining-table',
    name: 'Noma Dining Table',
    category: 'dining',
    descriptor: 'Solid oak 8-seater dining table with soft radiused pill edges',
    priceNote: 'Price on Request / Custom Lengths up to 3m',
    estimatedPrice: 'From NPR 118,000',
    dimensions: 'L 220cm × W 100cm × H 75cm',
    materials: ['100% Solid European Oak', 'Eco-Friendly Matte Polyurethane Sealant', 'Concealed Steel Reinforcement'],
    finishes: ['Natural White Oak', 'Warm Honey Teak', 'Smoked Dark Walnut'],
    image: '/src/assets/images/dining_collection_1789797931065.jpg',
    description: 'Crafted with continuous solid oak planks, the Noma Table celebrates natural grain patterns. Its soft organic edge makes it comfortable for lingering over dinner with family and friends.',
    featured: true,
    leadTime: 'Handmade to order: 14 business days'
  },
  {
    id: 'aria-bed-frame',
    name: 'Aria Bed Frame',
    category: 'bedroom',
    descriptor: 'Low-profile wooden platform bed with integrated floating nightstands',
    priceNote: 'Price on Request / King & Queen Sizes',
    estimatedPrice: 'From NPR 135,000',
    dimensions: 'King: L 218cm × W 196cm × H 90cm',
    materials: ['Solid Teak Hardwood', 'Padded Linen Inset Headboard', 'Solid Birch Slats with Center Spine'],
    finishes: ['Warm Teak & Ecru Linen', 'Walnut & Oatmeal', 'Bleached Oak & White Linen'],
    image: '/src/assets/images/bedroom_collection_1789797944730.jpg',
    description: 'The Aria Bed Frame evokes a peaceful Japanese ryokan sensibility. Its cantilevered base appears to float lightly, while an upholstered headboard provides ergonomic back support for reading.',
    featured: true,
    leadTime: 'Available in King & Queen dimensions'
  },
  {
    id: 'form-side-table',
    name: 'Form Side Table',
    category: 'living',
    descriptor: 'Monolithic cylindrical side table with fluted relief and natural travertine top',
    priceNote: 'Price on Request',
    estimatedPrice: 'From NPR 29,500',
    dimensions: 'Diameter 48cm × H 52cm',
    materials: ['Hand-Carved Fluted Solid Ash', 'Honed Natural Italian Travertine Disc'],
    finishes: ['Natural Ash & Cream Travertine', 'Walnut & Warm Beige Stone'],
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=1000&q=80',
    description: 'An architectural statement piece. The Form Side Table pairs the tactile warmth of fluted solid wood with the cool elegance of natural vein-cut travertine stone.',
    featured: true,
    leadTime: 'Ready for immediate dispatch'
  },
  {
    id: 'terra-storage-console',
    name: 'Terra Storage Console',
    category: 'storage',
    descriptor: 'Slatted 4-door media and dining sideboard with push-touch soft hinges',
    priceNote: 'Price on Request',
    estimatedPrice: 'From NPR 92,000',
    dimensions: 'L 190cm × D 45cm × H 74cm',
    materials: ['Solid Walnut Slats', 'Natural Oak Interior Shelving', 'Soft-Close German Hardware'],
    finishes: ['Deep Walnut Finish', 'Natural Oak Finish'],
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    description: 'Designed to hide media devices and tableware in style. Acoustic-friendly vertical slatted doors allow remote signals to pass through while keeping living spaces neat and clutter-free.',
    featured: true,
    leadTime: 'Limited quantity in stock'
  }
];

// Why Index Pillars
export const WHY_INDEX_PILLARS = [
  {
    number: '01',
    title: 'Thoughtful Design',
    description: 'Furniture designed around modern lifestyles, balancing clean architectural lines with real family comfort.',
    icon: 'Compass'
  },
  {
    number: '02',
    title: 'Quality Materials',
    description: 'Carefully selected kiln-dried hardwoods, durable high-rub textiles, and non-toxic architectural finishes built to endure.',
    icon: 'Gem'
  },
  {
    number: '03',
    title: 'Comfort First',
    description: 'Ergonomically tested proportions and multilayered cushion densities engineered for everyday family relaxation.',
    icon: 'HeartHandshake'
  },
  {
    number: '04',
    title: 'Personal Guidance',
    description: 'Complimentary interior layout consultations with our design consultants to curate furniture that harmonizes with your home.',
    icon: 'Users'
  }
];

// Room Inspiration Scenes
export const ROOM_SCENES: RoomScene[] = [
  {
    id: 'living-scene',
    name: 'Living Room',
    title: 'Warm Contemporary Living',
    caption: 'Sun-drenched living area styled with the Oslo Sectional, organic ceramic vessels, and low-profile oak coffee table.',
    image: '/src/assets/images/hero_living_room_1789797916437.jpg',
    highlights: [
      { title: 'Seating', description: 'Low-slung profile maximizes natural light flow' },
      { title: 'Acoustics', description: 'Heavy linen weave softens open-plan resonance' },
      { title: 'Timber', description: 'Hand-rubbed organic oil allows wood to breathe' }
    ]
  },
  {
    id: 'bedroom-scene',
    name: 'Master Bedroom',
    title: 'Calm Modern Bedroom',
    caption: 'Airy sanctuary featuring the Aria Platform Bed, recessed lighting, and earthy beige linen bedding.',
    image: '/src/assets/images/bedroom_collection_1789797944730.jpg',
    highlights: [
      { title: 'Joinery', description: 'Silent interlocking wooden slatted frame' },
      { title: 'Storage', description: 'Concealed soft-close floating nightstand drawers' },
      { title: 'Textiles', description: 'Hypoallergenic stone-washed European flax' }
    ]
  },
  {
    id: 'dining-scene',
    name: 'Dining Room',
    title: 'Everyday Family Dining',
    caption: 'Gathering space anchored by the solid oak Noma Dining Table and soft upholstered dining chairs.',
    image: '/src/assets/images/dining_collection_1789797931065.jpg',
    highlights: [
      { title: 'Surface', description: 'Heat and spill-resistant architectural matte seal' },
      { title: 'Seating Comfort', description: 'Curved lumbar backrest for extended dinner talks' },
      { title: 'Pill Edges', description: 'Child-safe softened corners across the tabletop' }
    ]
  },
  {
    id: 'office-scene',
    name: 'Home Study',
    title: 'Focused Home Office',
    caption: 'Minimalist study environment with natural light, solid oak writing desk, and clean organizational aesthetics.',
    image: '/src/assets/images/home_office_study_1789797969908.jpg',
    highlights: [
      { title: 'Wire Management', description: 'Integrated flip-top channel for laptop and chargers' },
      { title: 'Tactile Warmth', description: 'Natural wood grain reduces eye strain' },
      { title: 'Scale', description: 'Optimized proportions for Kathmandu apartments and villas' }
    ]
  }
];

// Testimonials (Original copy requested)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Index helped us choose pieces that completely changed the feel of our living room. Everything feels comfortable and beautifully considered.',
    author: 'Aarav & Nisha',
    location: 'Kathmandu',
    residenceType: 'Duplex Home, Baluwatar',
    verified: true
  },
  {
    id: 'test-2',
    quote: 'The team understood exactly what we wanted and helped us find furniture that works beautifully for our family.',
    author: 'Rohan K.',
    location: 'Lalitpur',
    residenceType: 'Apartment, Jhamsikhel',
    verified: true
  },
  {
    id: 'test-3',
    quote: 'Beautiful designs, comfortable furniture, and a very smooth buying experience.',
    author: 'Sanjay & Priya',
    location: 'Kathmandu',
    residenceType: 'Family Residence, Budhanilkantha',
    verified: true
  }
];

// Nepal Showroom Locations (Structured for easy editing by business owner)
export const SHOWROOMS: ShowroomLocation[] = [
  {
    id: 'kathmandu-flagship',
    name: 'Kathmandu Flagship Showroom',
    type: 'Flagship Experience Center',
    address: 'Gairidhara Road (Near Bhatbhateni Naxal Corridor)',
    neighborhood: 'Naxal / Gairidhara',
    city: 'Kathmandu, Nepal',
    phone: '+97714438920',
    phoneDisplay: '+977 1 443 8920',
    whatsapp: '+9779801234567',
    whatsappDisplay: '+977 980 123 4567',
    email: 'naxal@indexfurniture.com.np',
    hours: 'Sun – Fri: 10:00 AM – 7:30 PM',
    weekendHours: 'Saturday: 11:00 AM – 6:00 PM',
    parking: 'Complimentary On-Site Customer Parking',
    mapEmbedUrl: 'https://maps.google.com/?q=Naxal+Kathmandu+Nepal'
  },
  {
    id: 'lalitpur-studio',
    name: 'Lalitpur Design Studio',
    type: 'Interior Consultation Studio',
    address: 'Old Jhamsikhel Road (Opposite St. Marys Lane)',
    neighborhood: 'Jhamsikhel',
    city: 'Lalitpur, Nepal',
    phone: '+97715523488',
    phoneDisplay: '+977 1 552 3488',
    whatsapp: '+9779801234568',
    whatsappDisplay: '+977 980 123 4568',
    email: 'jhamsikhel@indexfurniture.com.np',
    hours: 'Sun – Fri: 10:30 AM – 7:00 PM',
    weekendHours: 'Saturday: 11:30 AM – 5:30 PM',
    parking: 'Valet & Street Parking Available',
    mapEmbedUrl: 'https://maps.google.com/?q=Jhamsikhel+Lalitpur+Nepal'
  }
];

// Lead form preset options
export const ROOM_OPTIONS = [
  'Entire Home Furnishing',
  'Living Room',
  'Master & Guest Bedrooms',
  'Dining & Entertainment Area',
  'Home Office & Study',
  'Custom Bespoke Piece'
];

export const BUDGET_OPTIONS = [
  'NPR 150,000 – 350,000',
  'NPR 350,000 – 750,000',
  'NPR 750,000 – 1,500,000',
  'NPR 1,500,000+'
];
