import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, type HTMLMotionProps } from 'framer-motion';
import React from 'react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
                className={cn(
                    'bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl',
                    hoverEffect && 'hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300',
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';
