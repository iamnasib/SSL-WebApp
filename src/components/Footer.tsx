import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="Sprint Stack Labs Logo" className="w-8 h-8 object-contain" />
                            <span className="text-lg font-bold text-white">
                                Sprint Stack <span className="text-primary-light">Labs</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Build smarter, ship faster, spend less.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
                            <li><Link to="/how-we-work" className="hover:text-primary-light transition-colors">How We Work</Link></li>
                            <li><Link to="/case-studies" className="hover:text-primary-light transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li>MVP Development</li>
                            <li>SaaS Build</li>
                            <li>Internal Tools</li>
                            <li>Low-Code Automation</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/sprintstacklabs/" className="text-text-secondary hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} Sprint Stack Labs. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
