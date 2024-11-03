// Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact } from "../data";

function Footer() {
  return (
    <footer className="p-0 sm:pb-32 ">
      <div className="border-2 border-black text-black rounded-2xl py-4 bg-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <p className=" text-center sm:text-left">
            © 2020 —
            <a href={contact.social.insta} className=" ml-1" target="_blank" rel="noopener noreferrer">
              @youjistan
            </a>
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0 cursor-pointer">
            <a href={contact.social.github} target="_blank" rel="noopener noreferrer">

            <FaGithub className=" hover:text-gray-700 transition cursor-pointer" />
            </a>
            <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">

            <FaLinkedin className=" hover:text-gray-700 transition " />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
