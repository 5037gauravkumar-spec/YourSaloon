import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8 text-center">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-black">
          Book an Appointment
        </h1>
        <p className="text-[#3D3D3D] mt-2">
          Choose your preferred date & time. We will confirm availability on WhatsApp.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm p-6 sm:p-8">
        <Suspense fallback={<div className="text-center py-10 text-[#3D3D3D]">Loading form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
