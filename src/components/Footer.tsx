import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";


export default function Footer() {

  return (

    <footer
      className="
      py-10
      px-4
      bg-white
      dark:bg-gray-950
      text-gray-600
      dark:text-gray-400
      transition-colors duration-300
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-8
        "
      >




        {/* Logo */}

        <div
          className="
          text-center
          md:text-left
          "
        >

          <h2
            className="
            text-xl
            sm:text-2xl
            font-bold
            text-gray-900
            dark:text-white
            "
          >

            Kidus Yared

          </h2>


          <p
            className="
            text-sm
            mt-2
            "
          >

Full Stack Developer | AI & Digital Finance Enthusiast
          </p>


        </div>







        {/* Social Links */}

        <div
          className="
          flex
          gap-5
          "
        >


          <a
            href="https://github.com/Kidu121"
            target="_blank"
            rel="noopener noreferrer"

            className="
            w-11
            h-11
            rounded-full
            border
            border-gray-300
            dark:border-gray-700
            flex
            items-center
            justify-center
            hover:bg-gray-900
            hover:text-white
            transition
            "
          >

            <FaGithub size={22}/>

          </a>






          <a
            href="https://www.linkedin.com/in/kidusyared-liku-975396337"
            target="_blank"
            rel="noopener noreferrer"

            className="
            w-11
            h-11
            rounded-full
            border
            border-gray-300
            dark:border-gray-700
            flex
            items-center
            justify-center
            hover:bg-blue-600
            hover:text-white
            transition
            "
          >

            <FaLinkedin size={22}/>

          </a>


        </div>








        {/* Scroll Top */}


        <motion.button

          whileHover={{
            scale:1.1
          }}

          whileTap={{
            scale:0.9
          }}

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
          shadow-lg
          transition
          "

        >

          <ArrowUp size={20}/>


        </motion.button>



      </div>









      {/* Copyright */}


      <div
        className="
        text-center
        mt-10
        text-xs
        sm:text-sm
        border-t
        border-gray-200
        dark:border-gray-800
        pt-5
        "
      >

        © {new Date().getFullYear()} Kidus Yared.
        All rights reserved.

      </div>



    </footer>

  );

}