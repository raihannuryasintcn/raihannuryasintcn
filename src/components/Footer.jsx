import { h } from 'preact';
import { useLocation } from 'preact-iso';
import { Home, Info, Send, Github, Linkedin, Instagram } from 'lucide-preact';

export function Footer() {
    const { url } = useLocation();

    return (
        <footer className="bg-black border-t border-purple-800 text-white py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400">&copy; 2025 Raihan Nur Yasin</p>
                        <p className="text-sm text-gray-500">All rights reserved</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex space-x-4">
                        <FooterNavLink 
                            href="/" 
                            icon={<Home size={20} />} 
                            label="Home" 
                            isActive={url == '/'} 
                        />
                        <FooterNavLink 
                            href="/About" 
                            icon={<Info size={20} />} 
                            label="About" 
                            isActive={url == '/About'} 
                        />
                        <FooterNavLink 
                            href="/Contact" 
                            icon={<Send size={20} />} 
                            label="Contact" 
                            isActive={url == '/Contact'} 
                        />
                    </nav>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <SocialLink 
                            href="https://github.com/raihannuryasintcn" 
                            icon={<Github size={24} />} 
                        />
                        <SocialLink 
                            href="https://www.linkedin.com/ in/raihan-nur-yasin-200180345/" 
                            icon={<Linkedin size={24} />} 
                        />
                        <SocialLink 
                            href="https://instagram.com/notraihannuryasin" 
                            icon={<Instagram size={24} />} 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterNavLink({ href, icon, label, isActive }) {
    return (
        <a 
            href={href} 
            className={`
                flex items-center space-x-2 
                px-3 py-2 rounded-lg 
                transition-all duration-300
                ${isActive 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-purple-400 hover:bg-gray-900'
                }
            `}
        >
            {icon}
            <span className="hidden md:inline">{label}</span>
        </a>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
                text-gray-400 
                hover:text-purple-400 
                hover:bg-gray-900 
                p-2 
                rounded-full 
                transition-all 
                duration-300
            "
        >
            {icon}
        </a>
    );
}