import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="footer-content border border-white ml-4 mr-4">
        {/* <div className="footer-section">
          <h2>While you&apos;re here</h2>
        </div> */}
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
            <li className="flex justify-start align-middle text-center">
              <Image
                src={"/X.svg"}
                width={30}
                height={30}
                className="mr-4"
                alt="X Logo"
                style={{
                  transition: "transform 0.3s ease", // Smooth transition effect
                  border: "1px solid white",
                  borderRadius: "20px",
                }}
              />
              <a href="https://x.com/luka" target="_blank" rel="noopener noreferrer">
                X.com
              </a>
            </li>
            <li className="flex justify-start align-middle text-center">
              <Image
                src={"/linkedin.svg"}
                width={30}
                height={30}
                className="mr-4"
                alt="LinkedIn Logo"
                style={{
                  transition: "transform 0.3s ease", // Smooth transition effect
                }}
              />
              <a href="https://www.linkedin.com/in/luka" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex justify-start align-middle ">
              <Image
                src={"/github-white-icon.svg"}
                width={30}
                height={30}
                className="mr-4"
                alt="Github Logo"
                style={{
                  transition: "transform 0.3s ease", // Smooth transition effect
                }}
              />
              <a href="https://github.com/luka" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Luka Kapetanovic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
