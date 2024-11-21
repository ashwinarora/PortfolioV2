import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

export default function ContactContainer() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightmode p-4 dark:bg-black">
      <div className="relative overflow-hidden grid w-full z-10 max-w-5xl grid-cols-1 gap-8 rounded-lg border border-gray-300 p-8 dark:border-black dark:bg-bgcontact md:grid-cols-2">
        <GetInTouch />
        <ContactForm />
        <img
            src="assets/icons/whymebgimg.svg"
            alt="boxes"
            className="absolute opacity-20 size-40 -right-12 -top-12"
            loading="lazy"
          />
      </div>
    </div>
  );
}
