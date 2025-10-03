import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/bp-2.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Accessibility: close mobile menu on Esc
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      setScrolled(isMobile ? window.scrollY > 10 : window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
  <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          window.innerWidth < 768
            ? "bg-background/95 backdrop-blur-xl border-b border-border"
            : scrolled
              ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-glow"
              : "bg-transparent"
        }`}
    >
  <div className="container mx-auto px-5 sm:px-8 md:px-12 py-2 md:py-3">
  <div className="flex items-center justify-between min-h-[56px] md:min-h-[64px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
            <img
              src={logoImage}
              alt="BluePrynt - Premium Marketing Agency"
              className="h-10 md:h-14 w-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 drop-shadow-2xl relative z-10"
              style={{ filter: 'drop-shadow(0 0 24px rgba(14, 165, 255, 0.5))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body font-semibold text-base transition-all duration-500 hover:text-cyan relative group ${
                  location.pathname === item.path ? "text-cyan" : "text-foreground"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-500 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              variant="outline" 
              asChild 
              className="hover:scale-105 transition-all duration-300 border-2 hover:border-cyan hover:shadow-glow font-semibold"
            >
              <Link to="/brand-enquiry">Start Your BluePrynt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-cyan/10 transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="transition-transform duration-300 rotate-90" /> : <Menu className="transition-transform duration-300" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in border-t border-border pt-4 px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-body font-semibold text-lg py-2 transition-all duration-300 hover:text-cyan hover:translate-x-2 ${
                    location.pathname === item.path ? "text-cyan" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <Button variant="outline" className="w-full hover:scale-105 transition-transform duration-300" asChild>
                  <Link to="/brand-enquiry">Start Your BluePrynt</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;