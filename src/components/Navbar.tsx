import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'How We Work', path: '/how-we-work' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2 group">
                    <img src="/logo.png" alt="Sprint Stack Labs Logo" className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all" />
                    <span className="text-xl font-semibold tracking-tight text-white">
                        Sprint Stack <span className="text-primary-light">Labs</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary-light ${location.pathname === link.path ? 'text-white' : 'text-text-secondary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/start">
                        <Button size="sm">Start in 5 Minutes</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`py-2 transition-colors hover:text-white ${location.pathname === link.path ? 'text-white font-medium' : 'text-text-secondary'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/start" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full">Start in 5 Minutes</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
