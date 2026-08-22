import Link from "next/link";
import { SERVICES, STYLISTS } from "@/lib/data";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Calendar, Star, Users, Clock } from "lucide-react";

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Look Your Best.<br />Book Instantly.
            </h1>
            <p className="text-lg text-[#E0E0E0] mb-8">
              Premium salon services in Noida. Choose your stylist, pick a time, and skip the waiting queue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-[#FFA700] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#e69500] transition"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#E0E0E0] text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: "Online Booking", desc: "24/7 availability" },
            { icon: Users, label: "7 Expert Stylists", desc: "Choose your preferred" },
            { icon: Star, label: "Quality Service", desc: "Consistent results" },
            { icon: Clock, label: "No Long Waits", desc: "Punctual appointments" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl shadow-sm border border-[#E0E0E0] p-5 text-center">
              <item.icon className="w-8 h-8 text-[#FFA700] mx-auto mb-2" />
              <div className="font-[family-name:var(--font-outfit)] font-semibold text-sm text-black">{item.label}</div>
              <div className="text-xs text-[#3D3D3D] mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl md:text-3xl font-bold text-black">Popular Services</h2>
            <p className="text-[#3D3D3D] mt-1">Transparent pricing. No surprises.</p>
          </div>
          <Link href="/services" className="text-[#0066CC] font-medium text-sm hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm p-5 hover:shadow-md transition"
            >
              <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-lg text-black">{service.name}</h3>
              <p className="text-sm text-[#3D3D3D] mt-1 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-[#FFA700]">{formatPrice(service.price)}</span>
                <span className="text-xs text-[#3D3D3D]">{formatDuration(service.duration_minutes)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stylists teaser */}
      <section className="bg-[#E0E0E0]/40 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl md:text-3xl font-bold text-black">Meet Our Stylists</h2>
            <p className="text-[#3D3D3D] mt-2">7 professionals ready to serve you</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {STYLISTS.map((stylist) => (
              <div key={stylist.id} className="text-center">
                <img
                  src={stylist.photo_url}
                  alt={stylist.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white shadow"
                />
                <div className="mt-2 text-sm font-medium text-black">{stylist.name.split(" ")[0]}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/stylists"
              className="inline-block bg-[#FFA700] text-black font-medium px-6 py-2.5 rounded-lg hover:bg-[#e69500] transition"
            >
              View All Stylists
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="font-[family-name:var(--font-outfit)] text-2xl md:text-3xl font-bold text-black mb-4">Ready for a fresh look?</h2>
        <p className="text-[#3D3D3D] mb-8 max-w-lg mx-auto">
          Book your preferred stylist and time slot in under a minute. Instant confirmation.
        </p>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 bg-[#FFA700] text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-[#e69500] transition text-lg"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </Link>
      </section>
    </div>
  );
}
