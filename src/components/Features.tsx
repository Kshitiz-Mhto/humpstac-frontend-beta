
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Rights-cleared licensing",
      desc: "Full traceability with explicit commercial usage rights for all data assets. (GDPR and SOC2 compliant)",
      icon: "⚖️"
    },
    {
      title: "Multimodal Support",
      desc: "Native handling for text, image, audio, video, and structured data.",
      icon: "📦"
    },
    {
      title: "80-90% Cleanup Automated",
      desc: "QA pipeline leverages automated pre-checks to strip away noise and low-quality content.",
      icon: "🧹"
    },
    {
      title: "Programmatic Labeling",
      desc: "Automatically generates labels using rules, heuristics, and models to speed up dataset creation.",
      icon: "📟"
    },
    {
      title: "Expert in the Loop",
      desc: "Curated domain experts verify complex samples to reach 99%+ precision.",
      icon: "🎓"
    },
    {
      title: "Synthetic Data Generation",
      desc: "Creates realistic artificial data to expand datasets and improve model training without extra data collection.",
      icon: "🧩"
    }

  ];

  return (
    <section id="product" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Built for AI Enterpises and Teams</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Precision-engineered platform to bridge the gap between raw data and production-ready AI models.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-[#0CC1E0]/30 hover:shadow-xl hover:shadow-[#0CC1E0]/5 transition-all group">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
