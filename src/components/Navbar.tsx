import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    { name: "Home", href:"#home" },
    { name:"About", href:"#about" },
    { name:"Services", href:"#services" },
    { name:"Skills", href:"#skills" },
    { name:"Projects", href:"#projects" },
    { name:"Contact", href:"#contact" },
  ];



  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/90
      dark:bg-gray-950/90
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
        px-4
        sm:px-6
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
          "
        >
          Kidus
          <span className="text-gray-900 dark:text-white">
            .dev
          </span>
        </a>





        {/* Desktop Navigation */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-7
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






        {/* Desktop Actions */}

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
            rel="noreferrer"
            className="
            text-xl
            text-gray-600
            dark:text-gray-300
            "
          >
            <FaGithub/>
          </a>



          <a
            href="https://www.linkedin.com/in/kidusyared-liku-975396337"
            target="_blank"
            rel="noreferrer"
            className="
            text-xl
            text-gray-600
            dark:text-gray-300
            "
          >
            <FaLinkedin/>
          </a>



          <ThemeToggle />



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
            "
          >

            <Download size={18}/>

            CV

          </a>


        </div>






        {/* Mobile Button */}

        <button
          onClick={()=>setOpen(!open)}
          className="
          md:hidden
          text-gray-900
          dark:text-white
          "
        >

          {open ? 
            <X size={30}/> :
            <Menu size={30}/>
          }

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
            px-6
            py-6
            flex
            flex-col
            gap-6
            "
          >


            {links.map((link)=>(

              <a
                key={link.name}
                href={link.href}
                onClick={()=>setOpen(false)}
                className="
                text-lg
                text-gray-700
                dark:text-gray-300
                hover:text-blue-600
                "
              >
                {link.name}
              </a>

            ))}





            <div className="
            flex
            items-center
            gap-6
            text-xl
            "
            >

              <a
                href="https://github.com/Kidu121"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub/>
              </a>



              <a
                href="https://www.linkedin.com/in/kidusyared-liku-975396337"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin/>
              </a>


            </div>





            <a
              href="/cv/Kidus_Yared_CV.pdf"
              download
              className="
              flex
              justify-center
              items-center
              gap-2
              bg-blue-600
              text-white
              py-3
              rounded-lg
              "
            >

              <Download size={18}/>

              Download CV

            </a>





            <ThemeToggle />


          </div>


        </div>

      )}


    </header>

  );

}