import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <header
      className="
      fixed top-0 left-0 w-full z-50
      bg-white/80
      dark:bg-gray-950/80
      backdrop-blur-lg
      border-b
      border-gray-200
      dark:border-gray-800
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          text-blue-600
          hover:scale-105
          transition
          "
        >

          Kidus

          <span
            className="
            text-slate-900
            dark:text-white
            "
          >
            .dev
          </span>

        </a>





        {/* Desktop Menu */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}

              className="
              text-gray-700
              dark:text-gray-300
              hover:text-blue-600
              transition
              "
            >

              {link.name}

            </a>

          ))}

        </nav>







        {/* Desktop Right Side */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-4
          "
        >



          <a
            href="https://github.com/Kidu121"
            target="_blank"
            rel="noopener noreferrer"

            className="
            text-gray-600
            dark:text-gray-300
            hover:text-black
            dark:hover:text-white
            text-xl
            "
          >

            <FaGithub/>

          </a>





          <a
            href="https://www.linkedin.com/in/kidusyared-liku-975396337"
            target="_blank"
            rel="noopener noreferrer"

            className="
            text-gray-600
            dark:text-gray-300
            hover:text-blue-600
            text-xl
            "
          >

            <FaLinkedin/>

          </a>





          {/* Dark Mode */}

          <ThemeToggle />







          {/* CV */}

          <a
            href="/cv/Kidus_Yared_CV.pdf"
            download

            className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-2
            rounded-lg
            transition
            "
          >

            <Download size={18}/>

            CV

          </a>



        </div>







        {/* Mobile Button */}

        <button

          className="
          md:hidden
          text-gray-800
          dark:text-white
          "

          onClick={()=>setOpen(!open)}

        >

          {open ? (

            <X size={28}/>

          ) : (

            <Menu size={28}/>

          )}

        </button>



      </div>









      {/* Mobile Menu */}

      {open && (

        <div

          className="
          md:hidden
          bg-white
          dark:bg-gray-950
          border-t
          border-gray-200
          dark:border-gray-800
          "

        >

          <div

            className="
            flex
            flex-col
            gap-5
            px-6
            py-6
            "

          >



            {links.map((link)=>(

              <a

                key={link.name}

                href={link.href}

                onClick={()=>setOpen(false)}

                className="
                text-gray-700
                dark:text-gray-300
                hover:text-blue-600
                "

              >

                {link.name}

              </a>

            ))}







            <div className="flex gap-5 text-xl">


              <a

                href="https://github.com/Kidu121"

                target="_blank"

                rel="noopener noreferrer"

                className="dark:text-white"

              >

                <FaGithub/>

              </a>





              <a

                href="https://www.linkedin.com/in/kidusyared-liku-975396337"

                target="_blank"

                rel="noopener noreferrer"

                className="dark:text-white"

              >

                <FaLinkedin/>

              </a>



            </div>







            <a

              href="/cv/Kidus_Yared_CV.pdf"

              download

              className="
              bg-blue-600
              text-white
              rounded-lg
              py-3
              text-center
              "

            >

              Download CV

            </a>






            <ThemeToggle />


          </div>


        </div>


      )}



    </header>

  );

}