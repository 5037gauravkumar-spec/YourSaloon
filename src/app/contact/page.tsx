import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS, CONTACT, WHATSAPP_MESSAGES } from "@/lib/social";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Visit us in Noida or reach out on WhatsApp / social media.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-[#E0E0E0]/50 p-3 rounded-lg h-fit">
              <MapPin className="w-5 h-5 text-[#0066CC]" />
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600 text-sm mt-1">
                YOUR SALOON<br />
                {CONTACT.address}<br />
                (Exact address coming soon)
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#E0E0E0]/50 p-3 rounded-lg h-fit">
              <Phone className="w-5 h-5 text-[#0066CC]" />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-[#0066CC] text-sm mt-1 block hover:underline"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#E0E0E0]/50 p-3 rounded-lg h-fit">
              <Clock className="w-5 h-5 text-[#0066CC]" />
            </div>
            <div>
              <h3 className="font-semibold">Opening Hours</h3>
              <p className="text-gray-600 text-sm mt-1">
                Monday – Sunday<br />
                10:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.contact)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-medium px-5 py-3 rounded-lg hover:bg-green-600 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          {/* Social links */}
          <div className="pt-4">
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border hover:bg-pink-50 hover:border-pink-300 transition"
                >
                  Instagram
                </a>
              )}
              {SOCIAL_LINKS.youtube && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border hover:bg-red-50 hover:border-red-300 transition"
                >
                  YouTube
                </a>
              )}
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  LinkedIn
                </a>
              )}
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center text-gray-500">
          <div className="text-center p-6">
            <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">
              Google Maps will appear here
              <br />
              once exact location is added
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
