"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMoonLine, RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeNav = () => setNavOpen(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <span className="nav__logo-circle">M</span>
          <span className="nav__logo-name">Mayur</span>
        </Link>

        <div className={`nav__menu ${navOpen ? "show-menu" : ""}`} id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Mayur</h3>

          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/" onClick={closeNav} className={`nav__link ${pathname === "/" ? "active-link" : ""}`}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/about" onClick={closeNav} className={`nav__link ${pathname === "/about" ? "active-link" : ""}`}>
                About Me
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/services" onClick={closeNav} className={`nav__link ${pathname === "/services" ? "active-link" : ""}`}>
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/projects" onClick={closeNav} className={`nav__link ${pathname === "/projects" ? "active-link" : ""}`}>
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/blogs" onClick={closeNav} className={`nav__link ${pathname === "/blogs" ? "active-link" : ""}`}>
                Blogs
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/contact" onClick={closeNav} className={`nav__link nav__link-button ${pathname === "/contact" ? "active-link" : ""}`}>
                Contact Me
              </Link>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={closeNav}>
            <RiCloseLine />
          </div>
        </div>

        <div className="nav__buttons">
          <RiMoonLine className="change-theme" id="theme-button" onClick={toggleTheme} />
          <div className="nav__toggle" id="nav-toggle" onClick={() => setNavOpen(true)}>
            <RiMenu4Line />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
