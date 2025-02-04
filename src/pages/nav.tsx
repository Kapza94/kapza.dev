import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "@/components/ui/switch";

const Nav = () => {
  return (
    <div className="m-4">
      <nav className="nav flex-between-centered">
        <div>
          <div className="flex-between-centered">
            <div>
              <FontAwesomeIcon
                icon={faGhost}
                style={{ color: "#C0FF72", fontSize: "2rem", paddingRight: "2rem" }} // Change color and size
              />
            </div>
            <p>
              KAPZA.<span className="custom-orange-font">dev</span>
            </p>
          </div>
        </div>

        <div className="links rounded-md flex-between-centered border-2 border-solid p-2 ">
          <div className="mr-4 ml-4">
            <a href="" className="text-[#faf9f6]">
              Home
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="text-[#faf9f6]">
              Work Experience
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="text-[#faf9f6]">
              Skills
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="text-[#faf9f6]">
              Projects
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="text-[#faf9f6]">
              CV
            </a>
          </div>
        </div>

        <div className="contact">
          <button className="bg-white">
            <a href="" className="text-[#050100]">
              Contact
            </a>
          </button>
        </div>
      </nav>

      {/* <div className="content-center ">
        <p>Light</p>
        <Switch className="w-10 bg-gray-600" />
        <p>Dark</p>
      </div> */}
    </div>
  );
};

export default Nav;
