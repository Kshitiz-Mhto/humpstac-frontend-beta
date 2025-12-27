import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Mail, Phone, User, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const BuyersWaitlist: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        work_email: '',
        phone: '',
        company_name: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('buyers')
                .insert([
                    {
                        name: formData.name,
                        work_email: formData.work_email,
                        phone: formData.phone || null,
                        company_name: formData.company_name,
                    },
                ]);

            if (supabaseError) {
                if (supabaseError.code === '23505') { // Unique violation
                    throw new Error('This email is already registered.');
                }
                throw supabaseError;
            }

            setIsSubmitted(true);
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-[#F9FAFB] overflow-hidden">

            <div className="relative z-10 max-w-xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12"
                >
                    <div className="flex flex-col items-center text-center mb-10">
                        <img
                            src="/assets/logo_whitbg-removebg.png"
                            alt="Logo"
                            className="w-32 h-32 md:w-32 md:h-32 object-contain scale-150"
                        />

                        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                            Join the Enterprise Waitlist
                        </h2>
                        <p className="text-slate-600">
                            Be the first to access our premium AI data platform.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div className="space-y-4">
                                    {error && (
                                        <div className="bg-red-50 text-red-600 p-3 rounded-xl flex items-center gap-2 text-sm">
                                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                            {error}
                                        </div>
                                    )}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0CC1E0]/20 focus:border-[#0CC1E0] transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="work_email"
                                            required
                                            placeholder="Work Email"
                                            value={formData.work_email}
                                            onChange={handleChange}
                                            className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0CC1E0]/20 focus:border-[#0CC1E0] transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Building2 className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="company_name"
                                            required
                                            placeholder="Company Name"
                                            value={formData.company_name}
                                            onChange={handleChange}
                                            className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0CC1E0]/20 focus:border-[#0CC1E0] transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number (Optional)"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0CC1E0]/20 focus:border-[#0CC1E0] transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#0CC1E0] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0AAFCB] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#0CC1E0]/20"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Join us
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-slate-500 mt-4">
                                    By joining, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                                <p className="text-slate-600 mb-8">
                                    Thank you for your interest, {formData.name.split(' ')[0]}. We'll reach out to {formData.work_email} soon as possible.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default BuyersWaitlist;
