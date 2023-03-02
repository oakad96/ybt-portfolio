import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function NavBar() {
  const scrollHandler = (e) => {
    document
      .getElementById(e.target.innerHTML.replace(" ", ""))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="NavBar overflow-y-hidden fixed top-0 z-10 w-full h-auto p-3 bg-medium flex flex-row justify-between">
      <div className="Navigator text-xl flex flex-row text-light ml-6 space-x-3">
        <button
          onClick={scrollHandler}
          className=" hover-darken navigation p-1 my-1"
        >
          About
        </button>
        <button
          onClick={scrollHandler}
          className="hover-darken navigation p-1 my-1"
        >
          Experience
        </button>
        <button
          onClick={scrollHandler}
          className="hover-darken navigation p-1 my-1 "
        >
          Education
        </button>
        <button
          onClick={scrollHandler}
          className="hover-darken navigation p-1 my-1 "
        >
          Skills
        </button>
        <button
          onClick={scrollHandler}
          className="hover-darken navigation p-1 my-1 "
        >
          Contact Me
        </button>
      </div>
      <div className="Socials text-3xl p-1 my-1 mx-3 text-light space-x-10 mr-6 flex flex-row">
        <a
          className="hover-darken"
          href="https://www.linkedin.com/in/yucel-baran-tuncer/"
          id="LinkedIn p-1"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="hover-darken"
          href="mailto:barantuncer545 4@gmail.com"
          id="Email p-1"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
}
