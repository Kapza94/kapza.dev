import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
          <div className="links flex-between-centered border-2 border-solid p-3">
            <div className="mr-4 ml-4">
              <a href="" className="link-item hover:text-lime-300">
                Home
              </a>
            </div>
            <div className="mr-4 ml-4">
              <a href="" className="link-item hover:text-lime-300">
                Work Experience
              </a>
            </div>
            <div className="mr-4 ml-4">
              <a href="" className="link-item hover:text-lime-300">
                Skills
              </a>
            </div>
            <div className="mr-4 ml-4">
              <a href="" className="link-item hover:text-lime-300">
                Projects
              </a>
            </div>
            <div className="mr-4 ml-4">
              <a href="" className="link-item hover:text-lime-300">
                CV
              </a>
            </div>
          </div>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block contact">
          <button className="pl-4">
            <a href="" className="contact-btn hover:text-lime-300 hover:bg-zinc-900 p-3">
              Contact
            </a>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-zinc-900 w-full z-50">
            <div className="flex flex-col items-center space-y-4 p-4">
              <a href="" className="link-item hover:text-lime-300">
                Home
              </a>
              <a href="" className="link-item hover:text-lime-300">
                Work Experience
              </a>
              <a href="" className="link-item hover:text-lime-300">
                Skills
              </a>
              <a href="" className="link-item hover:text-lime-300">
                Projects
              </a>
              <a href="" className="link-item hover:text-lime-300">
                CV
              </a>
              <button>
                <a href="" className="contact-btn hover:text-lime-300 hover:bg-zinc-900 p-3">
                  Contact
                </a>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
