import { Service, Stylist } from "./types";

export const SERVICES: Service[] = [
  {
    id: "svc-haircut-men",
    name: "Men's Haircut",
    description: "Classic or modern haircut with wash and styling",
    price: 300,
    duration_minutes: 30,
    category: "hair",
  },
  {
    id: "svc-haircut-women",
    name: "Women's Haircut",
    description: "Haircut with consultation, wash and blow dry",
    price: 500,
    duration_minutes: 45,
    category: "hair",
  },
  {
    id: "svc-beard",
    name: "Beard Trim & Styling",
    description: "Precision beard shaping and trim",
    price: 200,
    duration_minutes: 20,
    category: "beard",
  },
  {
    id: "svc-facial",
    name: "Classic Facial",
    description: "Deep cleansing facial for all skin types",
    price: 800,
    duration_minutes: 45,
    category: "facial",
  },
  {
    id: "svc-hair-color",
    name: "Hair Color / Highlights",
    description: "Professional coloring with premium products",
    price: 1500,
    duration_minutes: 90,
    category: "color",
  },
  {
    id: "svc-bridal",
    name: "Bridal Makeup Package",
    description: "Complete bridal makeup + hair styling",
    price: 5000,
    duration_minutes: 120,
    category: "bridal",
  },
  {
    id: "svc-hair-spa",
    name: "Hair Spa",
    description: "Nourishing hair spa treatment",
    price: 700,
    duration_minutes: 60,
    category: "other",
  },
];

export const STYLISTS: Stylist[] = [
  {
    id: "sty-1",
    name: "Rahul Sharma",
    photo_url: "/images/stylists/image1.jpg",
    bio: "Senior hairstylist with expertise in modern cuts and fades.",
    specialties: ["Men's Haircut", "Beard Styling", "Hair Color"],
    experience_years: 8,
  },
  {
    id: "sty-2",
    name: "Priya Patel",
    photo_url: "/images/stylists/image2.jpg",
    bio: "Bridal specialist and women's hair expert.",
    specialties: ["Bridal Makeup", "Women's Haircut", "Hair Spa"],
    experience_years: 6,
  },
  {
    id: "sty-3",
    name: "Amit Kumar",
    photo_url: "/images/stylists/image3.jpg",
    bio: "Color specialist and creative stylist.",
    specialties: ["Hair Color", "Highlights", "Men's Haircut"],
    experience_years: 5,
  },
  {
    id: "sty-4",
    name: "Sneha Gupta",
    photo_url: "/images/stylists/image4.jpg",
    bio: "Facial and skin care expert.",
    specialties: ["Classic Facial", "Hair Spa", "Women's Haircut"],
    experience_years: 4,
  },
  {
    id: "sty-5",
    name: "Vikram Singh",
    photo_url: "/images/stylists/image5.jpg",
    bio: "Beard artist and precision barber.",
    specialties: ["Beard Trim", "Men's Haircut", "Hair Color"],
    experience_years: 7,
  },
  {
    id: "sty-6",
    name: "Ananya Reddy",
    photo_url: "/images/stylists/image6.jpg",
    bio: "Makeup artist specializing in bridal and party looks.",
    specialties: ["Bridal Makeup", "Women's Haircut"],
    experience_years: 5,
  },
  {
    id: "sty-7",
    name: "Karan Mehta",
    photo_url: "/images/stylists/image7.jpg",
    bio: "All-rounder with strong focus on customer experience.",
    specialties: ["Men's Haircut", "Beard Styling", "Hair Spa"],
    experience_years: 3,
  },
];


export function getServiceById(id: string) {
  return SERVICES.find((s) => s.id === id);
}

export function getStylistById(id: string) {
  return STYLISTS.find((s) => s.id === id);
}
