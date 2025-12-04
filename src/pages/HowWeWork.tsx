import { motion } from 'framer-motion';
import { Search, Server, Code, Zap, CheckSquare, Rocket } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Search,
        title: 'Discovery & Architecture',
        desc: 'We start with a deep understanding of your product goals, user needs, and vision. Through a strategy call and structured planning, we finalize user flows, wireframes, and determine the best build approach — No-code, Low-code, or Custom Development.',
        duration: 'Week 1'
    },
    {
        icon: Server,
        title: 'Platform Strategy & Foundation',
        desc: 'With direction set, we establish the core system: authentication, database structure, APIs, and essential workflows. We choose the most scalable tech stack based on your product needs.',
        duration: 'Week 2'
    },
    {
        icon: Code,
        title: 'Feature Development',
        desc: 'We build the main product features using a hybrid development approach. This ensures fast delivery, flexibility, and long-term maintainability — whether through automation, visual development, or coded components.',
        duration: 'Weeks 3-5'
    },
    {
        icon: Zap,
        title: 'Integrations & Automations',
        desc: 'We connect essential third-party tools such as payments, CRM, analytics, and automation platforms (Zapier, Make, n8n) to streamline workflows and enable scalable operations.',
        duration: 'Week 5'
    },
    {
        icon: CheckSquare,
        title: 'Testing & Optimization',
        desc: 'Your product undergoes testing across devices and environments. We collect feedback, refine UX, fix bugs, and optimize performance to ensure a smooth, reliable experience.',
        duration: 'Week 6'
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        desc: 'Your product is ready for launch. We handle production deployment, documentation, and a defined support period to help you grow.',
        duration: 'Launch Day'
    }
];

export const HowWeWork = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    From idea to launch in <span className="text-gradient">weeks</span>.
                </h1>
                <p className="text-xl text-text-secondary">
                    We don’t force a single method, we choose the right tech stack for your product and build it fast, clean, and scalable.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="flex-1 w-full">
                                <Card className="p-8 h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-text-muted bg-white/5 px-3 py-1 rounded-full">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {index + 1}. {step.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {step.desc}
                                    </p>
                                </Card>
                            </div>

                            {/* Timeline Dot */}
                            <div className="relative z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(0,112,243,0.5)]">
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8 px-4">
                <p className="text-text-secondary/80 italic text-sm">
                    * Timelines vary based on product scope, every build is tailored to what the project truly needs.
                </p>
            </div>

            <div className="mt-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">What you get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                    {['Production-ready App', 'Modern UI/UX Design', 'Full Source Code', 'Launch Support'].map((item) => (
                        <div key={item} className="bg-surface/50 border border-white/5 rounded-xl p-4 flex items-center justify-center text-white font-medium">
                            <CheckSquare className="w-5 h-5 text-primary mr-3" />
                            {item}
                        </div>
                    ))}
                </div>
                <Link to="/start">
                    <Button size="lg">Start Your Project</Button>
                </Link>
            </div>
        </div>
    );
};
