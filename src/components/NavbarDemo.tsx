import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./styles/NavbarDemo.css";

// Define types for nav items
interface NavItem {
  label: string;
  href: string;
}

// Define props interface
interface NavbarProps {
  brand: string;
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ brand, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Brand/Logo */}
            <a href="/" className="brand">
              {brand}
            </a>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {items.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              onClick={toggleMenu}
              className="mobile-nav-button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
            {items.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

// Example usage
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const NavbarDemo = () => {
  return <Navbar brand="MyBrand" items={navItems} />;
};

export default NavbarDemo;
