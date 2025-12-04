import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-text-primary font-sans antialiased selection:bg-primary/30 selection:text-white">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
