import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Cpu, Scale, Zap, Globe, UploadCloud, Check } from 'lucide-react';

const Values: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    {/* For Enterprise */}
                    <div className="bg-gradient-to-br from-[#0CC1E0]/10 to-[#0CC1E0]/5 rounded-[2.5rem] p-6 md:p-10 border border-[#0CC1E0]/20 shadow-sm">
                        <div className="mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">For Enterprises</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-2 font-semibold">Access fully curated, training-ready datasets</p>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Ready-to-Train Labeled Datasets</h4>
                                        <p className="text-sm text-slate-600">Instantly purchase premium labeled datasets for immediate use or request for custom datasets</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Synthethic Data Generation</h4>
                                        <p className="text-sm text-slate-600">Generate synthethic data as per need to overcome rare-case challenges to improve AI performances</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Rights-cleared Data</h4>
                                        <p className="text-sm text-slate-600">Comprehensive metadata, usage rights, and privacy compliance [GDPR and SOC2]</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 mb-5">
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                Access to verified, high-quality training data
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                Assigned dedicated domain experts
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                Dedicated account management
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                Compliance and legal documentation
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                document.getElementById('marketplace')?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 border-0 outline-none focus:outline-none focus:ring-0 ring-0 transition-all hover:shadow-lg"
                        >
                            Browse datasets
                        </button>
                    </div>

                    {/* For Contributors */}
                    <div className="bg-gradient-to-br from-[#0CC1E0]/10 to-[#0CC1E0]/5 rounded-[2.5rem] p-6 md:p-10 border border-[#0CC1E0]/20 shadow-sm">
                        <div className="mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">For Contributors</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-2 font-semibold">Turn your raw content into income</p>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Instant Payouts</h4>
                                        <p className="text-sm text-slate-600">Get paid within 24-48 hours after approval via  E-sewa or Stripe</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Remote Opportunities</h4>
                                        <p className="text-sm text-slate-600"> Work remotely across the globe — from anywhere, anytime
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                                        <UploadCloud className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Easy Upload Process</h4>
                                        <p className="text-sm text-slate-600">Drag-and-drop interface with automatic quality checks</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 mb-5">
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                No upfront investment required
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                No professional degree or experiance required
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                Work from anywhere, anytime
                            </div>
                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                <span className="w-6 h-6 rounded-full bg-[#0CC1E0]/10 text-[#0CC1E0] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                Get paid
                            </div>
                        </div>


                        <Link to="/contributor-waitlist">
                            <button className="w-full bg-[#0CC1E0] text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#0CC1E0]/30 transition-all active:scale-95">
                                Start Contributing
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;