import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";


export default function Footer() {

  return (

    <footer
      className="
      py-8
      bg-white
      dark:bg-gray-950
      text-gray-600
      dark:text-gray-400
      transition-colors duration-300
      "
    >


      <div className="
      max-w-6xl
      mx-auto
      px-6
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-6
      ">



        {/* Logo / Name */}

        <div className="
        text-center
        md:text-left
        ">


          <h2 className="
          text-gray-900
          dark:text-white
          text-2xl
          font-bold
          ">

            Kidus Yared

          </h2>



          <p className="text-sm mt-2">

            Full Stack Developer | AI Enthusiast

          </p>


        </div>






        {/* Social Links */}


        <div className="flex gap-5">


          <a

            href="https://github.com/Kidu121"

            target="_blank"

            rel="noopener noreferrer"

            className="
            hover:text-black
            dark:hover:text-white
            transition
            "

          >

            <FaGithub size={28}/>

          </a>





          <a

            href="https://www.linkedin.com/in/kidusyared-liku-975396337"

            target="_blank"

            rel="noopener noreferrer"

            className="
            hover:text-blue-600
            transition
            "

          >

            <FaLinkedin size={28}/>

          </a>


        </div>







        {/* Scroll Top */}


        <button

          onClick={() =>
            window.scrollTo({
              top:0,
              behavior:"smooth"
            })
          }


          className="
          bg-blue-600
          hover:bg-blue-700
          p-3
          rounded-full
          text-white
          transition
          "

        >

          <ArrowUp size={20}/>


        </button>



      </div>








      {/* Copyright */}


      <div className="
      text-center
      mt-8
      text-sm
      border-t
      border-gray-200
      dark:border-gray-800
      pt-5
      ">


        © {new Date().getFullYear()} Kidus Yared.
        All rights reserved.


      </div>



    </footer>

  );

}