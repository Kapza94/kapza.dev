import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-bar m-4 sticky top-0 z-50 custom-black">
      <nav className="nav flex-between-centered">
        {/* Logo Section */}
        <div>
          <div className="flex-between-centered">
            <div>
              <FontAwesomeIcon
                icon={faGhost}
                style={{ color: "#C0FF72", fontSize: "2rem", paddingRight: "1rem" }}
              />
            </div>
            <p>
              KAPZA.<span className="custom-orange-font">dev</span>
            </p>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center">
          <ul className="links flex-between-centered border-2 border-solid p-3">
            <li className="mr-4 ml-4">
              <Link href="/" className="link-item hover:text-lime-300">
                Home
              </Link>
            </li>
            <li className="mr-4 ml-4">
              <Link href="" className="link-item hover:text-lime-300">
                Work Experience
              </Link>
            </li>
            <li className="mr-4 ml-4">
              <Link href="" className="link-item hover:text-lime-300">
                Skills
              </Link>
            </li>
            <li className="mr-4 ml-4">
              <Link href="" className="link-item hover:text-lime-300">
                Projects
              </Link>
            </li>
            <li className="mr-4 ml-4">
              <Link href="" className="link-item hover:text-lime-300">
                CV
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block contact">
          <Link
            href="/contact"
            className="pl-4 contact-btn hover:text-lime-300 hover:bg-zinc-900 p-3"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-zinc-900 w-full z-50">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link href="" className="link-item hover:text-lime-300">
                Home
              </Link>
              <Link href="" className="link-item hover:text-lime-300">
                Work Experience
              </Link>
              <Link href="" className="link-item hover:text-lime-300">
                Skills
              </Link>
              <Link href="" className="link-item hover:text-lime-300">
                Projects
              </Link>
              <Link href="" className="link-item hover:text-lime-300">
                CV
              </Link>
              <button>
                <Link
                  href="/contact"
                  className="contact-btn hover:text-lime-300 hover:bg-zinc-900 p-3"
                >
                  Contact
                </Link>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
