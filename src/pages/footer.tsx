import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="footer-content">
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Me</h2>
          <p>Email: luka@example.com</p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/luka" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/luka
            </a>
          </p>
        </div>
        <div className="footer-section socials">
          <h2>Follow Me</h2>
          <ul>
            <li>
              <a href="https://x.com/luka" target="_blank" rel="noopener noreferrer">
                X.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luka" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/luka" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Luka. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
