import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { supabase } from '../lib/supabase';

import { TestimonialsMarquee } from '../components/TestimonialsMarquee';

export const Home = () => {
    const [testimonials, setTestimonials] = useState<any[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const { data } = await supabase
                .from('testimonials')
                .select('*')
                .limit(5);
            if (data) setTestimonials(data);
        };
        fetchTestimonials();
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-dark/20 via-background to-background" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-light mb-6">
                                Build smarter, ship faster
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                                Build your MVP or SaaS <br />
                                <span className="text-gradient">3x faster</span> at <span className="text-gradient">75% lower cost</span>.
                            </h1>
                            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                                We combine low-code/no-code tools with custom full-stack development so you get the fastest path to a reliable, scalable product.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                                <Link to="/start">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        Start in 5 Minutes <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <a href={import.meta.env.VITE_MEETING_URL} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                        Talk to an Expert
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-text-muted">
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-primary" /> MVPs in 4-12 weeks
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-primary" /> Up to 75% lower cost
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-primary" /> Built With the Best Approach
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who We Help */}
            <section className="py-24 bg-surface/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who we help</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Whether you're a founder with a vision or a business needing efficiency, we have the right stack for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Rocket, title: 'Startup Founders', desc: 'Launch your MVP fast to validate ideas and raise funding.' },
                            { icon: DollarSign, title: 'Budget Conscious', desc: 'Get premium quality without the premium agency price tag.' },
                            { icon: Code, title: 'SaaS Businesses', desc: 'Scalable web apps with custom features and complex logic.' },
                            { icon: Clock, title: 'Teams in a Hurry', desc: 'Bypass slow traditional dev cycles and ship in weeks.' },
                        ].map((item, index) => (
                            <Card key={index} className="p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work Preview */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                The perfect blend of <br />
                                <span className="text-primary-light">Speed</span> and <span className="text-secondary-light">Power</span>
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">The Right Approach, Not One Approach</h3>
                                        <p className="text-text-secondary">We start by choosing the best build path for your product, whether No-Code, Low-Code, Custom Development, or a mix based on complexity, scalability, and timeline.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Smart, Efficient Development</h3>
                                        <p className="text-text-secondary">We set up core systems quickly using trusted platforms and build custom logic or code only where it adds real value or uniqueness.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">3</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Production-Ready Results</h3>
                                        <p className="text-text-secondary">You get a fully scalable, secure, and maintainable product built for real users, real growth, and full ownership.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <Link to="/how-we-work">
                                    <Button variant="outline">See our 6-step process</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20" />
                                <Card className="relative border-white/10 bg-background/80 backdrop-blur-xl p-8">
                                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                        <div className="text-sm font-medium text-text-muted">Comparison</div>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-text-secondary">Traditional Dev</span>
                                            <span className="text-red-400 font-medium">$$$$ • 3-6 months</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-red-500/50 w-3/4 h-full" />
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-text-secondary">No-Code Only</span>
                                            <span className="text-yellow-400 font-medium">$ • 1-8 weeks</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-yellow-500/50 w-1/4 h-full" />
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-white font-bold">Sprint Stack Approach</span>
                                            <span className="text-green-400 font-bold">$$ • 4-8 weeks</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-secondary w-1/2 h-full" />
                                        </div>

                                        <p className="text-xs text-text-muted/80 italic pt-2">
                                            * Timelines depend on the size and complexity of your product, and we choose the tech stack that best supports your long-term success.
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Testimonials */}
            {testimonials.length > 0 && (
                <section className="py-24 bg-surface/30">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What founders say</h2>
                        <TestimonialsMarquee testimonials={testimonials} />
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to build smarter?
                    </h2>
                    <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                        Fill out our 5-minute questionnaire and we'll show you exactly how to build your product for less.
                    </p>
                    <Link to="/start">
                        <Button size="lg" className="text-lg px-10 py-4">
                            Start in 5 Minutes
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
