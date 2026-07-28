import { motion } from "framer-motion";

import {
  Download,
  Eye,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";



export default function Hero() {

  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      px-4
      sm:px-6
      pt-28
      sm:pt-32
      pb-16
      sm:pb-20

      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-50

      dark:from-gray-950
      dark:via-gray-900
      dark:to-blue-950

      transition-colors
      duration-300
      "
    >



      {/* Background Effects */}


      <div
        className="
        absolute
        -top-40
        -left-20
        w-96
        h-96
        bg-blue-300/20
        rounded-full
        blur-3xl
        "
      />



      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-indigo-300/20
        rounded-full
        blur-3xl
        "
      />





      <div
        className="
        max-w-7xl
        w-full
        mx-auto

        grid
        md:grid-cols-2

        gap-10
        md:gap-16

        items-center
        "
      >



        {/* LEFT SIDE */}


        <motion.div

          initial={{
            opacity:0,
            x:-80
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >



          <div>
  <span
    className="
    inline-flex
    items-center
    px-4
    py-2
    rounded-full
    bg-green-100
    dark:bg-green-900/30
    text-green-700
    dark:text-green-400
    font-semibold
    text-sm
    "
  >
    Available for Work
  </span>

<h1
  className="
  mt-6
  text-2xl
  md:text-4xl
  font-extrabold
  text-gray-900
  dark:text-white
  "
>

  Hello, I'm{" "}

  <span className="text-[#6F4E37] dark:text-[#C4A484]">
    Kidusyared Liku
  </span>

</h1>



  <h2
    className="
    mt-4
    text-2xl
    md:text-3xl
    font-bold
    text-gray-700
    dark:text-gray-300
    "
  >

    Software Developer | IT Professional

  </h2>



  <p
    className="
    mt-4
    text-lg
    font-semibold
    text-blue-600
    "
  >

    React • TypeScript • Firebase • AI • FinTech

  </p>



  <p
    className="
    mt-6
    max-w-2xl
    text-lg
    leading-8
    text-gray-600
    dark:text-gray-400
    "
  >

    Information Technology Graduate with a background in software
    development and digital financial solutions.

  </p>



  <p
    className="
    mt-5
    max-w-2xl
    text-lg
    leading-8
    text-gray-600
    dark:text-gray-400
    "
  >

    I build modern, responsive, and user-friendly web applications
    using React, TypeScript, Firebase, and AI technologies. With a
    strong IT foundation, I focus on creating scalable digital
    products and intelligent solutions that solve real-world problems.

  </p>
</div>




          {/* Buttons */}


          <div
            className="
            flex

            flex-col
            sm:flex-row

            gap-4

            mt-10
            "
          >



            <a
              href="/Kidusyared-Liku-CV.pdf"
              download

              className="
              flex
              items-center
              justify-center

              gap-2

              bg-blue-600
              text-white

              px-6
              py-3

              rounded-xl

              font-semibold

              hover:bg-blue-700

              hover:scale-105

              transition
              "
            >

              <Download size={20}/>

              Download CV

            </a>





            <a
              href="/Kidusyared-Liku-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"

              className="
              flex
              items-center
              justify-center

              gap-2

              border
              border-blue-600

              text-blue-600
              dark:text-blue-400

              px-6
              py-3

              rounded-xl

              font-semibold

              hover:bg-blue-600
              hover:text-white

              transition
              "
            >

              <Eye size={20}/>

              View CV

            </a>





            <a
              href="#contact"

              className="
              flex
              items-center
              justify-center

              gap-2

              bg-gray-900
              dark:bg-blue-600

              text-white

              px-6
              py-3

              rounded-xl

              font-semibold

              hover:bg-black

              transition
              "
            >

              Hire Me

              <ArrowRight size={18}/>

            </a>


          </div>
          


          {/* Stats */}


          <div
            className="
            grid
            grid-cols-3

            gap-3
            sm:gap-6

            mt-10
            sm:mt-14
            "
          >



            <div>

              <h3
                className="
                text-2xl
                sm:text-3xl

                font-bold
                text-blue-600
                "
              >
                3+
              </h3>


              <p
                className="
                text-sm
                sm:text-base

                text-gray-600
                dark:text-gray-400
                "
              >
                Projects
              </p>

            </div>





            <div>

              <h3
                className="
                text-2xl
                sm:text-3xl

                font-bold
                text-blue-600
                "
              >
                1+
              </h3>


              <p
                className="
                text-sm
                sm:text-base

                text-gray-600
                dark:text-gray-400
                "
              >
                Experience
              </p>

            </div>





            <div>

              <h3
                className="
                text-2xl
                sm:text-3xl

                font-bold
                text-blue-600
                "
              >
                10+
              </h3>


              <p
                className="
                text-sm
                sm:text-base

                text-gray-600
                dark:text-gray-400
                "
              >
                Technologies
              </p>

            </div>


          </div>








          {/* Social Links */}


          <div
            className="
            flex
            gap-5

            mt-10
            "
          >


            <a
              href="https://www.linkedin.com/in/kidusyared-liku-975396337"

              target="_blank"

              rel="noopener noreferrer"

              className="
              w-12
              h-12

              rounded-full

              border

              flex
              items-center
              justify-center

              hover:bg-blue-600
              hover:text-white

              transition

              dark:border-gray-700
              "
            >

              <FaLinkedin size={22}/>

            </a>





            <a
              href="https://github.com/Kidu121"

              target="_blank"

              rel="noopener noreferrer"

              className="
              w-12
              h-12

              rounded-full

              border

              flex
              items-center
              justify-center

              hover:bg-gray-900
              hover:text-white

              transition

              dark:border-gray-700
              "
            >

              <FaGithub size={22}/>

            </a>



          </div>



        </motion.div>









        {/* RIGHT SIDE IMAGE */}



        <motion.div

          initial={{
            opacity:0,
            scale:0.7
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
          }}

          className="
          flex
          justify-center

          order-first
          md:order-last
          "

        >



          <div className="relative">





            <div
              className="
              absolute
              -left-5
              sm:-left-8

              top-10

              bg-white
              dark:bg-gray-800

              p-3

              rounded-full

              shadow-xl
              "
            >

              <FaReact
                className="
                text-blue-500

                text-2xl
                sm:text-3xl
                "
              />

            </div>






            <div
              className="
              absolute

              right-0

              top-0

              bg-white
              dark:bg-gray-800

              p-3

              rounded-full

              shadow-xl
              "
            >

              <SiTypescript
                className="
                text-blue-600

                text-2xl
                sm:text-3xl
                "
              />

            </div>






            <div
              className="
              absolute

              -left-5

              bottom-10

              bg-white
              dark:bg-gray-800

              p-3

              rounded-full

              shadow-xl
              "
            >

              <SiFirebase
                className="
                text-orange-500

                text-2xl
                sm:text-3xl
                "
              />

            </div>






            <div
              className="
              absolute

              right-4

              bottom-8

              bg-white
              dark:bg-gray-800

              p-3

              rounded-full

              shadow-xl
              "
            >

              <SiTailwindcss
                className="
                text-cyan-500

                text-2xl
                sm:text-3xl
                "
              />

            </div>







            <div
              className="
              absolute
              inset-0

              bg-blue-500/20

              blur-3xl

              rounded-full
              "
            />







            <img

              src="/profile.jpg"

              alt="Kidusyared Liku"

              className="
              relative

              w-60
              h-60

              sm:w-72
              sm:h-72

              md:w-[430px]
              md:h-[430px]

              rounded-full

              object-cover

              border-8

              border-white

              dark:border-gray-800

              shadow-2xl
              "

            />



          </div>



        </motion.div>




      </div>







      {/* Scroll Button */}


      <div
        className="
        absolute

        bottom-8

        left-1/2

        -translate-x-1/2

        animate-bounce
        "
      >


        <a

          href="#about"

          className="
          text-gray-500

          dark:text-gray-400

          text-3xl
          "
        >

          ↓

        </a>


      </div>



    </section>

  );

}