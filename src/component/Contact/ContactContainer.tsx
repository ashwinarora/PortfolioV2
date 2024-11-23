import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

export default function ContactContainer() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightmode p-4 dark:bg-black">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 rounded-lg border border-gray-300 p-8 dark:border-black dark:bg-bgcontact md:grid-cols-2">
        <GetInTouch />
        <ContactForm />
      </div>
    </div>
  );
}
