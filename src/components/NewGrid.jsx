import { data, contact } from "../data";
import img from "../assets/image.png";
import { motion } from "framer-motion";
import { LuImport } from "react-icons/lu";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function NewGrid() {
  return (
    <>
      <motion.div
        id="home"
        className="grid md:grid-cols-4 auto-rows-[300px] gap-6 my-10 mx-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.map((itemData, i) => (
          <motion.div
            key={i}
            className={`rounded-xl p-6 flex flex-col items-center justify-center bg-white shadow-[0px_19px_17px_22px_rgba(0,0,0,0.1)] border-2 border-black text-black ${
              i === 0 ? "md:col-span-2 " : ""
            } ${i === 2 ? "md:row-span-2 text-center" : ""} ${
              i === 3 ? "md:col-span-3 " : ""
            } ${i === 4 ? "md:col-span-4 " : ""}`}
            variants={item}
          >
            {i === 1 ? (
              <img
                src={img}
                alt="My Profile"
                className="w-full h-full object-contain sm:object-cover sm:rounded-lg rounded-2xl"
              />
            ) : (
              <>
                <h2 className="mb-2 font-bold text-3xl">{itemData.title}</h2>
                {i === 2 ? (
                  <ul className="list-none p-0">
                    {itemData.value.map((skill, index) => (
                      <li key={index} className="font-bold text-xl">
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : i === 4 ? (
                  <>
                    <h2 className="mb-2 font-bold text-3xl">Contact</h2>
                    <p>
                      Feel free to reach out via email or follow me on LinkedIn
                      or GitHub.
                    </p>
                    <p className="text-xl font-semibold">{contact.email}</p>
                    <div className="flex justify-center space-x-6 mt-4">
                      <a
                        href={contact.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-500"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={contact.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-500"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="m-5">
                      <a
                        href="/NR_Rauf.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="flex items-center rounded-xl p-3 bg-black px-3 font-sans font-medium text-white hover:bg-gray-800"
                      >
                        <span>Resume.pdf</span>
                        <LuImport className="ml-2" />
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="text-xl font-semibold text-center">
                    {itemData.value}
                  </p>
                )}
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default NewGrid;
