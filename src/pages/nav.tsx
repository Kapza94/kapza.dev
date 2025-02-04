import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
// import { Switch } from "@/components/ui/switch";

const Nav = () => {
  return (
    <div className="m-4">
      <nav className="nav flex-between-centered">
        <div>
          <div className="flex-between-centered">
            <div>
              <FontAwesomeIcon
                icon={faGhost}
                style={{ color: "#C0FF72", fontSize: "2rem", paddingRight: "1rem" }} // Change color and size
              />
            </div>
            <p>
              KAPZA.<span className="custom-orange-font">dev</span>
            </p>
          </div>
        </div>

        <div className="links flex-between-centered border-2 border-solid p-3">
          <div className="mr-4 ml-4">
            <a href="" className="link-item">
              Home
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="link-item">
              Work Experience
            </a>
            {/* text-[#faf9f6] */}
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="link-item">
              Skills
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="link-item">
              Projects
            </a>
          </div>
          <div className="mr-4 ml-4">
            <a href="" className="link-item">
              CV
            </a>
          </div>
        </div>
        <div className="contact">
          {/* <Button asChild variant="destructive">
            <Link href="/login">Contact</Link>
          </Button> */}
          <button className="pl-4">
            <a href="" className="contact-btn hover:text-lime-300 hover:bg-zinc-900 p-3">
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
