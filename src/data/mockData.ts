import { CropSpecialty, FacilityFeature, Testimonial } from '../types';

import exteriorImg from '../assets/images/vihaan_exterior_real_1785134715642.jpg';
import chamberInteriorImg from '../assets/images/vihaan_chamber_interior_real_1785134734109.jpg';
import entranceGateImg from '../assets/images/vihaan_entrance_gate_real_1785134753281.jpg';
import loadingDockImg from '../assets/images/vihaan_loading_dock_real_1785134770733.jpg';

export const BUSINESS_INFO = {
  name: "Vihaan Cold Storage",
  owner: "Vishal Choudhary",
  phone: "8218037615",
  formattedPhone: "+91 82180 37615",
  email: "coldstoragevihaan@gmail.com",
  whatsappUrl: "https://wa.me/918218037615?text=Hello%20Vishal%20Choudhary,%20I%20want%20to%20inquire%20about%20cold%20storage%20space%20at%20Vihaan%20Cold%20Storage.",
  location: "Silawar, District Shamli, Uttar Pradesh",
  fullAddress: "Vihaan Cold Storage, Silawar Road, Shamli, Uttar Pradesh - 247776",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27771.693175409383!2d77.2917!3d29.4503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb14e3dbb5d55%3A0x6a2c3f1f09230101!2sShamli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  workingHours: "24 Hours Operational (7 Days a Week)",
  capacity: "High Capacity Multi-Chamber Facility",
};

export const CROP_SPECIALTIES: CropSpecialty[] = [
  {
    id: "potatoes",
    title: "Potato Storage (Seed & Table)",
    subtitle: "Anti-Sprouting Precision Temperature Control",
    tempRange: "2.0°C – 4.0°C",
    humidity: "85% – 95% RH",
    shelfLife: "Up to 8 - 10 Months",
    description: "State-of-the-art specialized potato chambers designed for seed potatoes, processing varieties (Chipsona/LR), and table potatoes. Automated air washing and CIPC sprout control ensure zero weight loss, no rot, and peak germination rate.",
    varieties: ["Kufri Pukhraj", "Kufri Jyoti", "Chipsona 1 & 3", "Lady Rosetta (LR)", "Kufri Bahar", "Seed Varieties"],
    keyFeatures: [
      "Gradual pre-cooling & curing cycles",
      "Sprout control & non-sweetening airflow",
      "Constant CO2 level monitoring",
      "High density stack racking"
    ],
    image: loadingDockImg
  },
  {
    id: "seeds",
    title: "Agricultural Crop Seeds",
    subtitle: "High Germination Preservation & Moisture Shield",
    tempRange: "4.0°C – 8.0°C",
    humidity: "50% – 65% RH",
    shelfLife: "12 - 24 Months",
    description: "Preserve crop seeds with zero moisture absorption and pest protection. Ideal for wheat seeds, paddy seeds, mustard seeds, vegetable hybrid seeds, and pulses.",
    varieties: ["Wheat Seeds", "Paddy / Rice Seeds", "Mustard & Oilseeds", "Vegetable Hybrids", "Pulses & Gram"],
    keyFeatures: [
      "Ultra-dry moisture isolation chambers",
      "Pest & fungal growth barrier",
      "High vigor seed viability protection",
      "Custom palletization & lot indexing"
    ],
    image: chamberInteriorImg
  },
  {
    id: "vegetables",
    title: "Fresh Vegetables & Produce",
    subtitle: "Farm-Fresh Crispness & Zero Dehydration",
    tempRange: "0°C – 6.0°C",
    humidity: "90% – 95% RH",
    shelfLife: "1 - 4 Months",
    description: "High-humidity cold rooms engineered to prevent moisture loss in root vegetables, onions, garlic, carrots, peas, apples, and seasonal harvests.",
    varieties: ["Carrots (Gajar)", "Onions & Garlic", "Green Peas (Matar)", "Cauliflower & Cabbage", "Apples & Fruits"],
    keyFeatures: [
      "High humidity fogging & air scrubbers",
      "Rapid blast pre-cooling",
      "Ozone air purification & anti-bacterial hygiene",
      "Quick loading & distribution bays"
    ],
    image: exteriorImg
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "tech",
    title: "Advanced Preservation Technology",
    desc: "Multi-chamber refrigeration systems with computerized temperature controllers and micro-climate sensors ensuring exact climate stability.",
    icon: "Cpu"
  },
  {
    id: "hygiene",
    title: "Safe & Hygienic Environment",
    desc: "Strict sanitized chambers, rodent-proof barriers, and automated air circulators to prevent fungal growth, rot, or odor contamination.",
    icon: "ShieldCheck"
  },
  {
    id: "trust",
    title: "Trusted by Farmers & Traders",
    desc: "Serving farmers, seed distributors, and agricultural traders across Shamli, Muzaffarnagar, Meerut, and Western UP with complete integrity.",
    icon: "Users"
  },
  {
    id: "location",
    title: "Prime Location in Silawar, Shamli",
    desc: "Strategically located on broad highways in Silawar, providing effortless access for heavy trucks, tractors, and commercial loaders.",
    icon: "MapPin"
  },
  {
    id: "power",
    title: "24/7 Uninterrupted Power Backup",
    desc: "Automatic high-capacity industrial diesel generators ensure zero temperature fluctuations even during grid outages.",
    icon: "Zap"
  },
  {
    id: "security",
    title: "24/7 CCTV & Stock Security",
    desc: "Round-the-clock CCTV surveillance, fire detection systems, and dedicated night watchmen protecting every quintal of your hard-earned harvest.",
    icon: "Lock"
  }
];

export const FACILITY_SPECS: FacilityFeature[] = [
  {
    iconName: "Thermometer",
    title: "Precision Micro-Climate (-2°C to +12°C)",
    description: "Customizable temperature zoning per chamber allowing simultaneous storage of different agricultural crops.",
    highlight: "Digital ±0.2°C accuracy"
  },
  {
    iconName: "Wind",
    title: "Automated Air Circulation & CO2 Scrubbers",
    description: "Continuous fresh air exchange prevents gas buildup and preserves potato starch-to-sugar ratio.",
    highlight: "Uniform air circulation"
  },
  {
    iconName: "Droplets",
    title: "Automated Relative Humidity (RH) Controls",
    description: "Precision ultrasonic humidifiers maintain optimum 85–95% RH to prevent shrinkage and weight loss.",
    highlight: "Zero weight loss"
  },
  {
    iconName: "Truck",
    title: "Spacious Loading Docks & Hydraulic Ramps",
    description: "Broad driveway and simultaneous multiple-truck loading bays for rapid unloading without delays.",
    highlight: "Fast turn-around"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Suresh Pal Singh",
    role: "Seed Potato Farmer",
    location: "Shamli District",
    text: "I stored 800 bags of Kufri Pukhraj seed potatoes at Vihaan Cold Storage in Silawar last season. The germination rate when planted was phenomenal! Vishal Choudhary and his team maintain top-notch management.",
    cropStored: "Seed Potatoes (Kufri Pukhraj)",
    rating: 5
  },
  {
    name: "Ramesh Verma",
    role: "Agricultural Produce Trader",
    location: "Kandhla, Shamli",
    text: "Very reliable cold storage facility. Broad loading bay makes truck unloading very quick, and there is no moisture damage to potato bags even after 7 months of storage. Highly recommended!",
    cropStored: "Table Potatoes & Carrots",
    rating: 5
  },
  {
    name: "Dharmendra Malik",
    role: "Seed Distributor",
    location: "Muzaffarnagar Road",
    text: "Vihaan Cold Storage is by far the cleanest and most technologically advanced facility in Shamli region. The 24/7 generator backup gives total peace of mind for high-value hybrid seeds.",
    cropStored: "Hybrid Wheat & Paddy Seeds",
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  {
    src: exteriorImg,
    title: "Vihaan Cold Storage Main Facility Architecture",
    category: "Exterior & Grounds"
  },
  {
    src: chamberInteriorImg,
    title: "Chamber 1 Floor 2 Timber Racking & Staircase",
    category: "Climate Chamber Interior"
  },
  {
    src: entranceGateImg,
    title: "Main Entrance Gate with Shubh-Labh Motifs",
    category: "Entrance & Driveway"
  },
  {
    src: loadingDockImg,
    title: "Covered Loading Dock & Potato Bag Stacking Area",
    category: "Receiving Platform"
  }
];

export const FAQS = [
  {
    q: "Where is Vihaan Cold Storage located in Shamli?",
    a: "Vihaan Cold Storage is situated in Silawar, District Shamli, Uttar Pradesh. It is easily accessible via major transport routes with broad driveways suitable for heavy trucks and tractor-trolleys."
  },
  {
    q: "Who is the owner and contact person for space booking?",
    a: "The facility is owned and professionally managed by Vishal Choudhary. You can call him directly at +91 8218037615 or send a message on WhatsApp for immediate chamber allocation."
  },
  {
    q: "What crops can be stored at Vihaan Cold Storage?",
    a: "We specialize in potatoes (seed, table, processing varieties like Chipsona & LR), agricultural crop seeds (wheat, paddy, mustard, hybrid vegetable seeds), and fresh vegetables (carrots, onions, green peas, garlic, fruits)."
  },
  {
    q: "How does Vihaan Cold Storage ensure zero weight loss for potatoes?",
    a: "Our chambers feature computerized humidity regulation (85%–95% RH), controlled air velocity, and gradual curing cycles that prevent moisture evaporation, rot, and early sprouting."
  },
  {
    q: "Is power backup available during electricity cuts?",
    a: "Yes! We operate high-capacity heavy-duty industrial diesel generators with automatic switch-over to guarantee continuous cooling 24/7 without temperature fluctuations."
  }
];
