export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration_minutes: number;
  category: "hair" | "beard" | "facial" | "color" | "bridal" | "other";
};

export type Stylist = {
  id: string;
  name: string;
  photo_url: string;
  bio: string;
  specialties: string[];
  experience_years: number;
};

export type Booking = {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string | null;
  service_id: string;
  stylist_id: string;
  appointment_date: string; // YYYY-MM-DD
  appointment_time: string; // HH:mm
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string | null;
  created_at: string;
};

export type BookingFormData = {
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  service_id: string;
  stylist_id: string;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
};
