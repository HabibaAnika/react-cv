import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Navbar() {
  return (
    <div>
       <nav className="mb-20 flex items-center justify-between py-6">
          <div className="flex flex-shrink-0 items-center">
             <img className="mx-2 w-28" src={logo} alt="logo" />
          </div>
          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
             <FaLinkedin/>
             <FaGithub/>
             <FaInstagram/>
             <FaTwitterSquare/>
          </div>
       </nav>
    </div>
  )
}

export default Navbar