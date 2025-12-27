import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/logo_only_white-removebg.png"
                  alt="Logo"
                  className="w-16 h-16 rounded-xl object-contain scale-150"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">humpStac</span>
            </div>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
              Ready-to-train, rights-cleared data at scale.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="𝕏" />
              <SocialIcon icon="in" />
              <SocialIcon icon="gh" />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Data Labeling</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Synthetic Data Gen</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contributors</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Join as Contributor</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">View Earnings</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">My Submissions</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Enterprise</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Browse Datasets</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Custom Datasets</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Book a Meeting</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Blog & Research</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#0CC1E0] transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-bold text-slate-900 mb-1">Subscribe to our newsletter</h5>
              <p className="text-sm text-slate-500">Get the latest updates on datasets and AI trends.</p>
            </div>
            <div className="flex w-full md:w-auto min-w-[300px] items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2 py-2">
              <input
                type="email"
                placeholder="email@company.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 placeholder-slate-400 outline-none border-none focus:outline-none focus:ring-0 focus:border-none"
              />

              <button className="bg-slate-900 text-white px-5 py-2 border-0 outline-none focus:outline-none focus:ring-0 ring-0 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 tracking-widest font-normal">
          <p>© 2024 humpStac Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-[#0CC1E0] transition-colors font-normal">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#0CC1E0] transition-colors font-normal">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => (
  <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#0CC1E0] hover:text-[#0CC1E0] cursor-pointer transition-all">
    {icon}
  </div>
);

export default Footer;