import React, { useState } from 'react';

interface Campaign {
  id: string;
  title: string;
  tags: string[];
  size: string;
  price: string;
  description: string;
  fullDescription: string;
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
}

const CAMPAIGNS: Campaign[] = [
  {
    id: 'nepali-learning',
    title: 'Nepali Language Learning Materials',
    tags: ['Text', 'Language', 'Tutoring'],
    size: '150K Samples',
    price: '$1,200',
    description: 'Diverse educational content for Nepali language acquisition and NLP training.',
    fullDescription: 'Comprehensive dataset covering grammar, vocabulary, and conversational patterns. Includes textbook content, news articles, and social media snippets for natural language understanding.',
    metrics: [
      { label: 'Samples', value: '150,000' },
      { label: 'Words', value: '12M+' },
      { label: 'Dialects', value: 'Standard Nepali' },
      { label: 'Use Cases', value: 'LLM, Translation' }
    ],
    features: [
      'Vetted by native linguists for grammatical accuracy',
      'Includes transliteration and English translations',
      'Balanced across formal and informal registers'
    ]
  },
  {
    id: 'synthetic-finance',
    title: 'Synthetic Financial Documents',
    tags: ['Tabular', 'PDF', 'Privacy-Safe'],
    size: '500k Rows',
    price: '$4,200',
    description: 'Privacy-preserving financial records for model testing and validation.',
    fullDescription: 'High-fidelity synthetic data mimicking real-world financial transactions, invoices, and bank statements without exposing PII.',
    metrics: [
      { label: 'Rows', value: '500,000' },
      { label: 'Formats', value: 'CSV, PDF' },
      { label: 'Anonymity', value: '100% Synthetic' },
      { label: 'Use Cases', value: 'Fraud Detection, OCR' }
    ],
    features: [
      'Statistically identical to real-world financial distributions',
      'Zero risk of data leakage or privacy violations',
      'Includes complex edge cases and anomalous patterns'
    ]
  }
];

const Marketplace: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);

  return (
    <section id="marketplace" className="py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Marketplace</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Platform to buy premium training-ready dataset or launch campaigns for tailored datasets.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* For Buyers */}
          <div>
            <div className="mb-6 mt-9">
              <h2 className="text-3xl font-bold mb-4">For Buyers</h2>
              <p className="text-slate-600">Source high quality, rights-cleared datasets at scale or post campaigns for custom dataset.</p>
            </div>

            <div className="space-y-6">
              {CAMPAIGNS.map(campaign => (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign}
                  onClick={() => setSelectedCampaign(campaign)}
                />
              ))}

              <div
                className="p-6 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#0CC1E0] hover:bg-slate-50 transition-all"
                onClick={() => setIsLaunchModalOpen(true)}
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0CC1E0]/10 group-hover:text-[#0CC1E0] mb-4 text-2xl font-light">+</div>
                <h4 className="font-bold text-slate-900 mb-1">Launch a custom campaign</h4>
                <p className="text-xs text-slate-500">Post your requirements and get data in days.</p>
              </div>
            </div>
          </div>

          {/* For Contributors */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">For Contributors</h2>
              <p className="text-slate-600">Turn your high-quality data into earnings with 88% payouts.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Earnings Forecast</span>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">+12.4% this month</span>
              </div>
              <div className="h-32 flex items-end gap-2 px-2">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#0CC1E0]/20 rounded-t-md hover:bg-[#0CC1E0] transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Available Payout</p>
                  <p className="text-2xl font-bold text-slate-900">$1,450.80</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">Withdraw</button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#0CC1E0] cursor-pointer transition-all">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xl">🖼️</div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold">Image Segmentation: Urban Streets</h5>
                  <p className="text-xs text-slate-500">$0.14 per label • 1.2k tasks</p>
                </div>
                <button className="text-xs font-bold text-[#0CC1E0] border-0 outline-none focus:outline-none focus:ring-0 ring-0">Start</button>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#0CC1E0] cursor-pointer transition-all">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xl">🎙️</div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold">Audio Transcription: Medical</h5>
                  <p className="text-xs text-slate-500">$0.85 per min • 450 mins</p>
                </div>
                <button className="text-xs font-bold text-[#0CC1E0] border-0 outline-none focus:outline-none focus:ring-0 ring-0">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Details Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCampaign(null)}>
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="relative p-8 md:p-12">
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                onClick={() => setSelectedCampaign(null)}
              >
                ✕
              </button>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCampaign.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#0CC1E0]/10 text-[#0CC1E0] rounded-lg text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedCampaign.title}</h3>
                <p className="text-slate-600 leading-relaxed">{selectedCampaign.fullDescription}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {selectedCampaign.metrics.map(metric => (
                  <div key={metric.label}>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{metric.label}</p>
                    <p className="text-lg font-bold text-slate-900">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-10">
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Key Features</h5>
                <ul className="space-y-3">
                  {selectedCampaign.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 text-[10px]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Estimated Price</p>
                  <p className="text-3xl font-bold text-[#0CC1E0]">{selectedCampaign.price}</p>
                </div>
                <button className="bg-[#0CC1E0] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#0CC1E0]/30 transition-all active:scale-95">
                  Purchase Dataset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Launch Campaign Modal */}
      {isLaunchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsLaunchModalOpen(false)}>
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="relative p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                onClick={() => setIsLaunchModalOpen(false)}
              >
                ✕
              </button>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Launch Custom Campaign</h3>
                <p className="text-slate-600">Provide your requirements to get a tailored dataset.</p>
              </div>

              <form className="space-y-6" onSubmit={e => { e.preventDefault(); setIsLaunchModalOpen(false); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Campaign Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Urban Street Scene Segmentation"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC1E0] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Required Samples</label>
                    <input
                      type="text"
                      placeholder="e.g. 50,000 images"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC1E0] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Campaign Description</label>
                  <textarea
                    placeholder="Brief description of your dataset requirements..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC1E0] focus:border-transparent transition-all min-h-[80px]"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tags</label>
                  <input
                    type="text"
                    placeholder="e.g. Image, Computer Vision, Autonomous Driving"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC1E0] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Use Case</label>
                  <textarea
                    placeholder="Describe how you intend to use this data..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC1E0] focus:border-transparent transition-all min-h-[100px]"
                    required
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-1">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Deadline (Days)</label>
                    <input
                      type="number"
                      placeholder="e.g. 14"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC1E0] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Sample Dataset (Optional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        className="hidden"
                        id="sample-upload"
                      />
                      <label
                        htmlFor="sample-upload"
                        className="w-full flex items-center justify-center bg-slate-50 border border-dashed border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-500 cursor-pointer hover:bg-slate-100 transition-all"
                      >
                        Upload sample files...
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors border-0 outline-none focus:outline-none focus:ring-0 ring-0"
                    onClick={() => setIsLaunchModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0CC1E0] text-white px-8 py-3 rounded-xl font-bold border-0 outline-none focus:outline-none focus:ring-0 ring-0 hover:text-slate-700 transition-all active:scale-95"
                  >
                    Launch 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CampaignCard = ({ campaign, onClick }: { campaign: Campaign, onClick: () => void }) => (
  <div
    className="bg-white border border-slate-200 p-6 rounded-3xl hover:border-[#0CC1E0] hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer group"
    onClick={onClick}
  >
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0CC1E0] transition-colors">{campaign.title}</h4>
      <span className="text-lg font-bold text-[#0CC1E0]">{campaign.price}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      {campaign.tags.map((tag: string) => (
        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-wider">{tag}</span>
      ))}
    </div>
    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
      <div className="flex items-center gap-1">
        <span className="text-slate-400 text-xs">Size:</span>
        <span className="text-slate-900 text-xs font-bold">{campaign.size}</span>
      </div>
    </div>
  </div>
);

export default Marketplace;
