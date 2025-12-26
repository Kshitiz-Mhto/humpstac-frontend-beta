import React from 'react';

const BeReady: React.FC = () => {
    return (
        <section className="relative py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Ready to <span className="text-[#0CC1E0]">Supercharge</span> and <span className="text-[#0CC1E0]">Ship</span> your AI/ML models?
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                    Get instant access to premium ready-to-train datasets or request custom datasets tailored to your requirements.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#0CC1E0]/80 text-black rounded-1xl text-lg border-0 outline-none focus:outline-none focus:ring-0 ring-0 hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95">
                        Join as a Contributor
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-1xl text-lg border-0 outline-none focus:outline-none focus:ring-0 ring-0 border-2 border-[#0CC1E0]/80 hover:bg-[#0CC1E0]/20 hover:text-slate-900 transition-all">
                        Enterprise Portal
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BeReady;
