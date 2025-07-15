// ContactForm.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import { contact } from "../data";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Extract values from form
    const formData = {
      from_name: form.current.from_name.value,
      to_name: "Recipient Name",
      from_email: form.current.from_email.value,
      message: form.current.message.value,
    };

    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setIsSubmitted(true);
          setIsError(false);
          form.current.reset(); // Reset the form after submission
        },
        () => {
          setIsError(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="contact" className=" w-full flex flex-col md:flex-row items-center mx-auto my-10 gap-8 p-6 md:p-10">
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: easeIn, duration: 1 }}
        className="flex md:flex-col items-center gap-4 md:gap-8 sm:w-3/4  mx-auto md:w-1/4"
      >
        <div className="relative group">
          <a href={contact.social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black text-4xl md:text-6xl transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
        </div>
        <div className="relative group">
          <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black text-4xl md:text-6xl transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ ease: easeIn, duration: 1 }}
        className="bg-white border-2 border-black rounded-lg shadow-md p-6  md:p-8 w-full md:w-3/4"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h2>
        
        {isSubmitted && !isError && (
          <p className="text-gray-800 font-semibold mb-4">
            Your message has been sent successfully!
          </p>
        )}
        {isError && (
          <p className="text-red-500 font-semibold mb-4">
            There was an error sending your message. Please try again.
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <div>
            <label htmlFor="firstName" className="font-medium">Full Name</label>
            <input
              type="text"
              id="firstName"
              name="from_name"
              placeholder="Your name"
              required
              className="focus:outline-none rounded px-3 py-2 w-full border-2 md:border-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Your email"
              required
              className="focus:outline-none rounded px-3 py-2 w-full border-2 md:border-4"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message here"
              rows="5"
              required
              className="focus:outline-none rounded px-3 py-2 w-full border-2 md:border-4"
            ></textarea>
          </div>
          <input
            className="border-2 md:border-4 border-black font-bold py-2 px-4 rounded transition-all cursor-pointer"
            type="submit"
            value={isLoading ? "Sending..." : "Send"}
            disabled={isLoading}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
