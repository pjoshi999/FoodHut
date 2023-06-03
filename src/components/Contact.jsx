import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const message = () =>
  toast("Thank you for reaching out to us. We'll get back to you soon!");

const Contact = () => {
  return (
    <div className="text-black h-[30rem] flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl first-line:text-[#ed4e4e] first-letter:text-4xl">
        Reach out to us! We are just one Click away!
      </h1>
      <input
        type="text"
        name="name"
        className="bg-[#fff] px-3 py-2 pl-5 rounded-full w-80 border border-black"
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        className="bg-[#fff] px-3 py-2 pl-5 rounded-full w-80 border border-black"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        cols="30"
        rows="5"
        placeholder="Message"
        required
        className="w-80 resize-none px-3 py-2	text-black border border-black"
      ></textarea>
      <button
        onClick={message}
        name="submit"
        className="bg-[#F65F5F] hover:bg-[#ed4e4e] ml-3 rounded-full px-3 py-2"
      >
        Subscribe
      </button>
      <ToastContainer />
    </div>
  );
};

export default Contact;
