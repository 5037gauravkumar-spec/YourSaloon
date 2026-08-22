import { STYLISTS } from "@/lib/data";
import Link from "next/link";

export default function StylistsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-black">Our Stylists</h1>
        <p className="text-[#3D3D3D] mt-2">
          Choose the professional who matches your style. Each profile shows specialties and experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {STYLISTS.map((stylist) => (
          <div
            key={stylist.id}
            className="bg-white rounded-xl border border-[#E0E0E0] shadow-sm overflow-hidden"
          >
            <div className="aspect-square bg-[#E0E0E0]">
              <img
                src={stylist.photo_url}
                alt={stylist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-black">{stylist.name}</h2>
              <p className="text-sm text-[#0066CC] font-medium mt-1">
                {stylist.experience_years} years experience
              </p>
              <p className="text-[#3D3D3D] text-sm mt-3">{stylist.bio}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {stylist.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-[#E0E0E0] text-[#3D3D3D] px-2.5 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href={`/book?stylist=${stylist.id}`}
                className="mt-5 inline-block w-full text-center bg-[#FFA700] text-black font-medium py-2.5 rounded-lg hover:bg-[#e69500] transition"
              >
                Book with {stylist.name.split(" ")[0]}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
