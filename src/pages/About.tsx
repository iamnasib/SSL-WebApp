import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Zap, Users, Heart, Shield } from 'lucide-react';

export const About = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        We build for the <span className="text-gradient">builders</span>.
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Sprint Stack Labs was born from a simple frustration: traditional development is slow and expensive, and no-code tools aren’t always enough. So we set out to build differently, choosing the right approach for each product instead of forcing one method.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <Card className="p-8 bg-gradient-to-br from-surface to-background border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-text-secondary">
                            To democratize software creation by making high-quality, scalable web applications accessible to founders and businesses with real budgets but tight timelines.
                        </p>
                    </Card>
                    <Card className="p-8 bg-gradient-to-br from-surface to-background border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                        <p className="text-text-secondary">
                            We don't just write code. We act as your technical co-founder, helping you make smart architectural decisions that save money now and scale later.
                        </p>
                    </Card>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Why work with us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: Zap, title: 'Speed', desc: 'We ship in weeks, not months.' },
                            { icon: Shield, title: 'Quality', desc: 'Production-grade code and security.' },
                            { icon: Users, title: 'Partnership', desc: 'We work with you, not just for you.' },
                            { icon: Heart, title: 'Passion', desc: 'We love building products that people use.' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-4 p-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-text-secondary text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center bg-surface/30 rounded-3xl p-12 border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
                    <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                        Let's turn your idea into reality. No fluff, no hidden costs, just results.
                    </p>
                    <Link to="/start">
                        <Button size="lg">Start Your Project</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
