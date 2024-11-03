import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { contact } from "../data";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const variants = {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav id="navbar" className="bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 w-full pt-8 pb-8 flex justify-center fixed top-0 left-0 z-10 transition-all duration-300">
      <motion.div
       variants={variants}
       initial="hidden"
       animate="visible"
       transition={{ duration: 0.5 }}
       className="flex w-3/4 rounded-xl p-4 items-center justify-between gap-8 mx-auto bg-gray-900 shadow-2xl">
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex justify-between items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? <FaTimes /> : (
              <FaBars />
              
            )
          }
          </button>
        </div>

        {/* Social Icons - Left */}
        <div className="hidden md:flex items-center gap-4">
          <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:scale-105 transition-transform" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col md:flex-row items-center gap-8 ${isOpen ? "flex" : "hidden"} md:flex`}>
          <button onClick={() => handleScroll("home")} className="text-2xl font-semibold text-white hover:text-gray-300 transition">
            Home
          </button>
          <button onClick={() => handleScroll("projects")} className="text-2xl font-semibold text-white hover:text-gray-300 transition">
            Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="text-2xl font-semibold text-white hover:text-gray-300 transition">
            Contact
          </button>
        </div>

        {/* Social Icons - Right */}
        <div className="hidden md:flex items-center gap-4">
          <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:scale-105 transition-transform" />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
