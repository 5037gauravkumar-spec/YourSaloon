"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES, STYLISTS } from "@/lib/data";
import { formatPrice, formatDuration } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/social";
import { z } from "zod";

const bookingSchema = z.object({
  customer_name: z.string().min(2, "Name is required").max(80),
  customer_phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  customer_email: z.string().email("Invalid email").optional().or(z.literal("")),
  service_id: z.string().min(1, "Select a service"),
  stylist_id: z.string().min(1, "Select a stylist"),
  appointment_date: z.string().min(1, "Select a date"),
  appointment_time: z.string().min(1, "Select a time"),
  notes: z.string().max(300).optional(),
});

const TIME_SLOTS = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preService = searchParams.get("service") || "";
  const preStylist = searchParams.get("stylist") || "";

  const [form, setForm] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    service_id: preService,
    stylist_id: preStylist,
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const data = result.data;
    const service = SERVICES.find((s) => s.id === data.service_id);
    const stylist = STYLISTS.find((s) => s.id === data.stylist_id);

    // Proper format: Booking request + ask for availability confirmation
    const message = `Hello YOUR SALOON 👋

*Booking Request – Please Confirm Availability*

━━━━━━━━━━━━━━━━
*Customer Details*
Name: ${data.customer_name}
Phone: ${data.customer_phone}
${data.customer_email ? `Email: ${data.customer_email}` : ""}

*Appointment Details*
Service: ${service?.name || data.service_id}
Price: ${service ? formatPrice(service.price) : "—"}
Duration: ${service ? formatDuration(service.duration_minutes) : "—"}
Stylist: ${stylist?.name || data.stylist_id}
Date: ${data.appointment_date}
Time: ${data.appointment_time}
${data.notes ? `Notes: ${data.notes}` : ""}
━━━━━━━━━━━━━━━━

Please confirm if this slot is available.
If not available, please suggest the next available time.

Thank you!`;

    const url = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            name="customer_name"
            value={form.customer_name}
            onChange={handleChange}
            className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none"
            placeholder="Your name"
            autoComplete="name"
            maxLength={80}
          />
          {errors.customer_name && (
            <p className="text-red-600 text-xs mt-1">{errors.customer_name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile Number *</label>
          <input
            type="tel"
            name="customer_phone"
            value={form.customer_phone}
            onChange={handleChange}
            className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none"
            placeholder="9876543210"
            maxLength={10}
            autoComplete="tel"
          />
          {errors.customer_phone && (
            <p className="text-red-600 text-xs mt-1">{errors.customer_phone}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email (optional)</label>
        <input
          type="email"
          name="customer_email"
          value={form.customer_email}
          onChange={handleChange}
          className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none"
          placeholder="you@example.com"
          autoComplete="email"
        />
        {errors.customer_email && (
          <p className="text-red-600 text-xs mt-1">{errors.customer_email}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Service *</label>
          <select
            name="service_id"
            value={form.service_id}
            onChange={handleChange}
            className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none bg-white"
          >
            <option value="">Select service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {formatPrice(s.price)} ({formatDuration(s.duration_minutes)})
              </option>
            ))}
          </select>
          {errors.service_id && (
            <p className="text-red-600 text-xs mt-1">{errors.service_id}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Preferred Stylist *</label>
          <select
            name="stylist_id"
            value={form.stylist_id}
            onChange={handleChange}
            className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none bg-white"
          >
            <option value="">Select stylist</option>
            {STYLISTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.stylist_id && (
            <p className="text-red-600 text-xs mt-1">{errors.stylist_id}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Date *</label>
          <input
            type="date"
            name="appointment_date"
            value={form.appointment_date}
            onChange={handleChange}
            min={today}
            className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none"
          />
          {errors.appointment_date && (
            <p className="text-red-600 text-xs mt-1">{errors.appointment_date}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Preferred Time *</label>
          <select
            name="appointment_time"
            value={form.appointment_time}
            onChange={handleChange}
            className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none bg-white"
          >
            <option value="">Select time</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.appointment_time && (
            <p className="text-red-600 text-xs mt-1">{errors.appointment_time}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Notes (optional)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          maxLength={300}
          className="w-full border border-[#E0E0E0] rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#FFA700] focus:border-[#FFA700] outline-none resize-none"
          placeholder="Any special requests?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#FFA700] text-black font-semibold py-3 rounded-lg hover:bg-[#e69500] transition"
      >
        Request Booking on WhatsApp
      </button>

      <div className="bg-[#E0E0E0]/40 rounded-lg p-4 text-sm text-[#3D3D3D] space-y-1">
        <p className="font-medium text-black">How confirmation works:</p>
        <p>1. You send the booking request on WhatsApp</p>
        <p>2. We check availability for your preferred date & time</p>
        <p>3. We reply to confirm the slot or suggest the next available time</p>
      </div>
    </form>
  );
}
