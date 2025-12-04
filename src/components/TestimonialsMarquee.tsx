import { useState } from 'react';
import { Card } from './Card';

interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role: string;
    company: string;
    avatar_url?: string;
    highlight_result?: string;
}

interface TestimonialsMarqueeProps {
    testimonials: Testimonial[];
}

export const TestimonialsMarquee = ({ testimonials }: TestimonialsMarqueeProps) => {
    const [isPaused, setIsPaused] = useState(false);
    // Duplicate testimonials to ensure seamless scrolling
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
                {allTestimonials.map((t, index) => (
                    <div key={`${t.id}-${index}`} className="mx-4 w-[350px] flex-shrink-0">
                        <Card className="p-8 h-full">
                            <div className="mb-6">
                                <div className="text-primary text-4xl font-serif">"</div>
                                <p className="text-lg text-white italic relative z-10 -mt-4">{t.quote}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {t.avatar_url && (
                                    <img src={t.avatar_url} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                )}
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-sm text-text-secondary">{t.role}, {t.company}</div>
                                </div>
                            </div>
                            {/* {t.highlight_result && (
                                <div className="mt-6 pt-4 border-t border-white/10 text-sm font-medium text-primary-light">
                                    🚀 {t.highlight_result}
                                </div>
                            )} */}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};
