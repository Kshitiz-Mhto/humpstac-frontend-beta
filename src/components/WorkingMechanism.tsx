
import React from 'react';
import { motion, type Variants, type TargetAndTransition } from 'framer-motion';
import {
    LogIn,
    Upload,
    ShieldCheck,
    Wallet,
    Cpu,
    Users,
    BrainCircuit,
    Database,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    SearchCode,
    GitPullRequest,
    Rocket,
    Zap,
    Lock
} from 'lucide-react';

/**
 * ANIMATION VARIANTS
 */
// Added Variants type to ensure 'ease' property is correctly inferred as Easing literal
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// Added Variants type to ensure 'ease' property is correctly inferred as Easing literal
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Added TargetAndTransition type to ensure 'ease' property is correctly inferred as Easing literal
const pulseAnimation: TargetAndTransition = {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

/**
 * CONSTANTS - UNIFIED UI SYSTEM
 */
const CARD_BASE_CLASSES = "h-full bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-6 flex flex-col";
const STEP_BOX_CLASSES = "flex items-start gap-4 p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/50 transition-all duration-200";

/**
 * SUB-COMPONENTS
 */

const Connector = ({ isMobile = false, className = "" }: { isMobile?: boolean; className?: string }) => (
    <div className={`flex items-center justify-center ${isMobile ? 'h-16 w-full rotate-90 my-2' : 'w-10 h-full'} ${className}`}>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-slate-600"
        >
            <ArrowRight className="w-6 h-6" />
        </motion.div>
    </div>
);

const Badge = ({ children, color = "blue" }: { children?: React.ReactNode; color?: string }) => {
    const colors: Record<string, string> = {
        blue: "bg-blue-50 text-blue-700 border-blue-200",
        green: "bg-green-50 text-green-700 border-green-200",
        purple: "bg-purple-50 text-purple-700 border-purple-200",
        gold: "bg-amber-50 text-amber-700 border-amber-200"
    };
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wide font-bold border ${colors[color]}`}>
            {children}
        </span>
    );
};

const WorkingMechanism: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        An end-to-end pipeline ensuring quality, compliance, and speed.
                    </p>
                </div>

                <motion.div
                    className="relative space-y-8 lg:space-y-0 lg:flex lg:items-stretch lg:justify-between lg:gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* STAGE 1: Contributor Intake */}
                    <motion.div className="flex-1 min-w-0" variants={cardVariants}>
                        <div className={CARD_BASE_CLASSES}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-800 leading-tight">Contributors</h3>
                                <Badge color="green">Phase 1</Badge>
                            </div>

                            <div className="space-y-3 flex-grow">
                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-blue-50 rounded-lg text-green-600">
                                        <LogIn className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Sign In</p>
                                        <p className="text-[12px] text-slate-500">Secure IAM authentication.</p>
                                    </div>
                                </div>

                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-blue-50 rounded-lg text-green-600">
                                        <Upload className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Data Upload</p>
                                        <p className="text-[12px] text-slate-500">Multimodal content (Video, audio, text, imagery).</p>
                                    </div>
                                </div>

                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-blue-50 rounded-lg text-green-600">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Initial Validation</p>
                                        <p className="text-[12px] text-slate-500">Integrity & duplication scanning.</p>
                                    </div>
                                </div>

                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                                        <Wallet className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Payout Issued</p>
                                        <p className="text-[12px] text-slate-500">Payout within 48 hours.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2">
                                <GitPullRequest className="w-4 h-4 text-green-600" />
                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Contributor Interface</p>
                            </div>
                        </div>
                    </motion.div>

                    <Connector isMobile={true} className="lg:hidden" />
                    <div className="hidden lg:flex items-center">
                        <Connector />
                    </div>

                    {/* STAGE 2: QA Pipeline */}
                    <motion.div className="flex-1 min-w-0" variants={cardVariants}>
                        <div className={CARD_BASE_CLASSES}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-800 leading-tight">QA Pipeline</h3>
                                <Badge color="blue">Phase 2</Badge>
                            </div>

                            <div className="space-y-4 flex-grow">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Automated QA</p>
                                    <div className={STEP_BOX_CLASSES}>
                                        <div className="flex-grow space-y-2 py-1">
                                            <div className="flex items-center gap-2 text-[12px] text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>Blur & Low-light Detection</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[12px] text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>Noise and Distortion Detection</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[12px] text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>Inappropriate Content Filter</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[12px] text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>Video Quality Assessment</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[12px] text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                                <span>others</span>
                                            </div>
                                            <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '90%' }}
                                                    transition={{ duration: 1.5 }}
                                                    className="h-full bg-blue-600"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Human QA</p>
                                    <div className={STEP_BOX_CLASSES}>
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-xs">Expert Review</p>
                                            <p className="text-[12px] text-slate-500">99.9% premium verification.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-blue-500" />
                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Quality Assurance</p>
                            </div>
                        </div>
                    </motion.div>

                    <Connector isMobile={true} className="lg:hidden" />
                    <div className="hidden lg:flex items-center">
                        <Connector />
                    </div>

                    {/* STAGE 3: humpStac Labeling Engine */}
                    <motion.div className="flex-1 min-w-0" variants={cardVariants}>
                        <div className={CARD_BASE_CLASSES}>
                            <div className="flex items-center justify-between mb-6 flex-nowrap">
                                <h3 className="text-xl font-bold text-slate-800 leading-tight">HS Engine</h3>
                                <Badge color="purple">Phase 3</Badge>
                            </div>

                            <div className="space-y-3 flex-grow">
                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                        <SearchCode className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Weak Supervision</p>
                                        <p className="text-[12px] text-slate-500">Programmatic labeling logic.</p>
                                    </div>
                                </div>

                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Active Learning</p>
                                        <p className="text-[12px] text-slate-500">Loop-based error correction.</p>
                                    </div>
                                </div>

                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Expert in the Loop</p>
                                        <p className="text-[12px] text-slate-500">LFs iteration and quality control.</p>
                                    </div>
                                </div>

                                <div className={STEP_BOX_CLASSES}>
                                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-xs">Synthetic Blending</p>
                                        <p className="text-[12px] text-slate-500">AI-augmented data expansion.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2">
                                <BrainCircuit className="w-4 h-4 text-purple-500" />
                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Programmatic Core</p>
                            </div>
                        </div>
                    </motion.div>

                    <Connector isMobile={true} className="lg:hidden" />
                    <div className="hidden lg:flex items-center">
                        <Connector />
                    </div>

                    {/* STAGE 4: Ready-to-Train Dataset */}
                    <motion.div className="flex-1 min-w-0" variants={cardVariants}>
                        <div className={CARD_BASE_CLASSES}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-800 leading-tight">Final Output</h3>
                                <Badge color="gold">Phase 4</Badge>
                            </div>

                            <div className="space-y-4 flex-grow">
                                <motion.div
                                    animate={pulseAnimation}
                                    className="flex flex-col items-center justify-center p-4 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-inner"
                                >
                                    <Database className="w-10 h-10 text-blue-600 mb-2" />
                                    <p className="text-blue-900 font-black text-sm uppercase">Premium Dataset</p>
                                </motion.div>

                                <div className="space-y-2">
                                    {[
                                        "Fully Labeled & Structured",
                                        "Rights-Cleared & Compliant",
                                        "Versioned & Scalable"
                                    ].map((text, i) => (
                                        <div key={i} className={STEP_BOX_CLASSES}>
                                            <div className="bg-amber-200 rounded-full p-0.5 mt-0.5">
                                                <CheckCircle2 className="w-3 h-3 text-amber-800" />
                                            </div>
                                            <p className="text-[12px] font-bold text-slate-700">{text}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-900 p-3 rounded-xl text-center shadow-lg">
                                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-tight">Performance Gain</p>
                                    <p className="text-xl font-black text-amber-300">97–99%</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2mt-6 pt-4 border-t border-slate-50 flex items-center gap-2">
                                <Rocket className="w-4 h-4 text-amber-800" />
                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Ready to Train</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkingMechanism;
