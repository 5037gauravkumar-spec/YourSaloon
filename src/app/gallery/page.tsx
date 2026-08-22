const GALLERY_IMAGES = [
  "/images/gallery/image1.jpg",
  "/images/gallery/image2.jpg",
  "/images/gallery/image3.jpg",
  "/images/gallery/image4.jpg",
  "/images/gallery/image5.jpg",
  "/images/gallery/image6.jpg",
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-black">Gallery</h1>
        <p className="text-[#3D3D3D] mt-2">
          Real work from our salon. More photos coming soon.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((src, i) => (
          <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
            <img
              src={src}
              alt={`Salon work ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
