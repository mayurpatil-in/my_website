"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  // optional: update year if needed
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link" title="Go to Home">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link" title="Learn more About Me">About</a>
          </li>
          <li>
            <a href="#projects" className="footer__link" title="View My Projects">Projects</a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169;2016-{year}, All Rights Reserved By -{" "}
          <a
            href="https://www.mayurpatil.in"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Mayur Patil's Website"
          >
            www.mayurpatil.in
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
