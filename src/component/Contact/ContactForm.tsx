import { IoIosSend } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isEmailSent, setIsEmailSent] = useState(false);

  const contactForm = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!isEmailSent) return;
    setName("");
    setEmail("");
    setMessage("");
  }, [isEmailSent]);

  const isEmailError = () => {
    if (email === "") return false;
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">Contact</h2>
      <form
        className="space-y-4"
        ref={contactForm}
        onSubmit={(e) => {
          e.preventDefault();
          if (!contactForm.current) return;
          if (isEmailSent) return;
          emailjs
            .sendForm("portfolio-id", "template_tunpqno", contactForm.current, {
              publicKey: "user_j7yM9LMciGWcJOyo8BeO9",
            })
            .then(
              () => {
                console.log("Mail sent Successfully!");
                setIsEmailSent(true);
              },
              (error) => {
                console.log("FAILED...", error.text);
              },
            );
        }}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="block text-black dark:text-white">
            Name*
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full rounded-md border border-gray-300 p-2 text-white dark:border-[#162025] dark:bg-[#091419]"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-black dark:text-white">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className={`w-full rounded-md border p-2 text-black dark:bg-[#091419] dark:text-white ${isEmailError() ? "border-red-500" : "border-gray-300 dark:border-[#162025]"}`}
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-black dark:text-white">
            Message*
          </label>
          <textarea
            id="message"
            placeholder="Enter Your Message"
            className="min-h-[100px] w-full rounded-md border border-gray-300 p-2 text-white dark:border-[#162025] dark:bg-[#091419]"
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-between space-x-2 font-semibold">
          <button
            type="submit"
            className={`flex w-full flex-row-reverse items-center justify-center gap-x-4 rounded-full text-white ${isEmailSent ? "cursor-not-allowed bg-green-500 py-2" : "cursor-pointer bg-[#00bfff] py-3 text-white hover:bg-[#008acb]"} sm:text-sm md:text-base`}
          >
            {isEmailSent ? (
              <>
                <div className="">Message Sent!</div>
                <IoCheckmarkDoneOutline className="size-8" />
              </>
            ) : (
              <>
                <div className="">Send Message</div>
                <IoIosSend className="size-6" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
