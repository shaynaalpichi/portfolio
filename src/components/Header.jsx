import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Let's Connect", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0f]/40 backdrop-blur-md px-6 md:px-20 py-4 flex justify-between items-center border-b border-zinc-900/20">
      
      {/* Left Logo Side */}
      <a href="#home" className="flex items-center group min-w-[120px]">
        <img 
          src="/logo_sa.png" 
          alt="SA Logo" 
          className="h-9 w-auto object-contain invert brightness-125 transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="relative text-brand-linen hover:text-white font-thin tracking-[0.25em] text-xs transition-colors py-2 group flex items-center"
          >
            <i className={`bx ${link.icon} mr-2 text-sm text-brand-mocha group-hover:text-white transition-colors`}></i>
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-brand-mocha to-brand-linen transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Right Balance Spacer Container */}
      <div className="hidden md:block min-w-[120px]" />

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden text-2xl text-brand-linen hover:text-white transition-colors focus:outline-none"
      >
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="fixed top-[61px] left-0 w-full h-[calc(100vh-61px)] bg-[#0b0b0f] flex flex-col items-center pt-12 gap-8 z-50 md:hidden">
          {links.map((link) => (
            <a 
              key={link.name} 
              onClick={() => setMenuOpen(false)} 
              href={link.href} 
              className="text-lg text-brand-linen hover:text-white flex items-center tracking-widest font-thin"
            >
              <i className={`bx ${link.icon} mr-3 text-brand-mocha`}></i>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}