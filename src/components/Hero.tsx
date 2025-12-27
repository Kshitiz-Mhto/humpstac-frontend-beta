import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 bg-[#F9FAFB] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#0CC1E0 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Blurred Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0CC1E0]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0CC1E0]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0CC1E0]/10 border border-[#0CC1E0]/20 text-[#0CC1E0] text-sm font-bold tracking-wider mb-14 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0CC1E0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0CC1E0]"></span>
          </span>
          Ready-to-Train Data as Service
        </div>


        <h1 className="text-5xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
          Scaling AI Data: From <span className="text-[#0CC1E0]">Curation</span> to <span className="text-[#0CC1E0]">Training‑Ready</span> Precision
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          A streamlined platform that transforms multimodal raw data into premium, labeled, rights-cleared datasets, ready to train and supercharge your AI/ML models fast.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0CC1E0]/80 text-black rounded-1xl text-lg hover:shadow-xl border-0 outline-none focus:outline-none focus:ring-0 ring-0 hover:shadow-[#0CC1E0]/30 transition-all transform hover:-translate-y-1 active:scale-95">
            Join as a Contributor
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-1xl text-lg border-0 outline-none focus:outline-none focus:ring-0 ring-0 border-2 border-[#0CC1E0]/80 hover:bg-[#0CC1E0]/20 hover:text-slate-900 transition-all">
            Enterprise Portal
          </button>
        </div>

        {/* 
        <div className="space-y-8 overflow-hidden mt-16">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Trusted by Industry-Leading AI Teams Worldwide
          </p>
          <div className="logo-scroll-container">
            <div className="logo-scroll-content animate-scroll opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <LogoPlaceholder name="Google AI" />
              <LogoPlaceholder name="Meta" />
              <LogoPlaceholder name="OpenAI" />
              <LogoPlaceholder name="Anthropic" />
              <LogoPlaceholder name="NVIDIA" />
              <LogoPlaceholder name="Google AI" />
              <LogoPlaceholder name="Meta" />
              <LogoPlaceholder name="OpenAI" />
              <LogoPlaceholder name="Anthropic" />
              <LogoPlaceholder name="NVIDIA" />
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

// const LogoPlaceholder = ({ name }: { name: string }) => (
//   <div className="flex items-center gap-2">
//     <div className="w-8 h-8 rounded-full bg-slate-400 opacity-50"></div>
//     <span className="font-bold text-lg text-slate-900">{name}</span>
//   </div>
// );

export default Hero;
