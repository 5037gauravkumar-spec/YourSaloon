import { SERVICES } from "@/lib/data";
import { formatPrice, formatDuration } from "@/lib/utils";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-black">Our Services</h1>
        <p className="text-[#3D3D3D] mt-2">
          Clear prices. No hidden charges. Book online and choose your preferred stylist.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm p-6 flex flex-col"
          >
            <div className="flex-1">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0066CC]">
                {service.category}
              </span>
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-semibold mt-1 text-black">{service.name}</h2>
              <p className="text-[#3D3D3D] text-sm mt-2">{service.description}</p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#E0E0E0]">
              <div>
                <div className="font-bold text-lg text-[#FFA700]">
                  {formatPrice(service.price)}
                </div>
                <div className="text-xs text-[#3D3D3D]">
                  {formatDuration(service.duration_minutes)}
                </div>
              </div>
              <Link
                href={`/book?service=${service.id}`}
                className="bg-[#FFA700] text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e69500] transition"
              >
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
