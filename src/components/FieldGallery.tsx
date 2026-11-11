import React, { useState } from 'react';
import { Camera, MapPin, Eye, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Winter' | 'Medical' | 'Education' | 'Water' | 'Ration';
  image: string;
  description: string;
}

export const FieldGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Winter Warmth Drive Distribution',
      location: 'Kalam & Bahrain, Swat',
      category: 'Winter',
      image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=800&q=80',
      description: 'Volunteers distributing heavy blankets and quilted coats in snowbound valleys.',
    },
    {
      id: 'g2',
      title: 'Free Surgical Eye Camp & Cataract Surgeries',
      location: 'Mithi, Tharparkar',
      category: 'Medical',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      description: 'Volunteer doctors performing free sight-restoring cataract lens surgeries.',
    },
    {
      id: 'g3',
      title: 'School Supplies & Bag Distribution',
      location: 'Basti Chaman, Lahore',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      description: 'Children proudly receiving sturdy backpacks, notebooks, and uniforms.',
    },
    {
      id: 'g4',
      title: 'Fresh Potable Water Hand Pump Handover',
      location: 'Chachro, Sindh',
      category: 'Water',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80',
      description: 'Desert village inaugurating deep borehole sweet water pump with plaque.',
    },
    {
      id: 'g5',
      title: 'Monthly Food Ration Baskets for Widows',
      location: 'Rajanpur Riverine Belt',
      category: 'Ration',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      description: '45kg staple grocery packs being loaded and verified with door-to-door token lists.',
    },
    {
      id: 'g6',
      title: 'Children Fitted with Warm Boots & Jackets',
      location: 'Ziarat Highland, Balochistan',
      category: 'Winter',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      description: 'Smiles all around as freezing children receive brand new winter gear.',
    },
  ];

  const categories = ['All', 'Winter', 'Medical', 'Education', 'Water', 'Ration'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section className="py-20 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF4EE] text-[#1B6B4A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-[#E0A526]" />
            <span>Field Dispatch &amp; Photo Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#124B33] tracking-tight mb-3">
            On the Ground with Afiyat
          </h2>
          <p className="font-urdu text-lg sm:text-xl text-[#1B6B4A] mb-3">
            میدانِ عمل کی تصویری جھلکیاں — شفاف اور بااعتماد خدمتِ خلق
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every distribution is documented with geo-tagging and beneficiary consent. Browse snapshots of your donations delivering warmth, healthcare, and education.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === c
                    ? 'bg-[#1B6B4A] text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c === 'All' ? 'All Camps' : `${c} Camps`}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1 shadow">
                    <Eye className="w-3.5 h-3.5 text-[#1B6B4A]" /> View Details
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-slate-800 shadow">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#1B6B4A] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3 text-[#E0A526]" />
                  <span>{item.location}</span>
                </p>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center text-sm font-bold"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={previewItem.image}
              alt={previewItem.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-bold text-[#1B6B4A] uppercase tracking-wider block mb-1">
                {previewItem.category} Relief Deployment
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {previewItem.title}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4">
                <MapPin className="w-4 h-4 text-[#E0A526]" />
                <span>{previewItem.location}</span>
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {previewItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
