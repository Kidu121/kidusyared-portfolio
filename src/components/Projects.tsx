import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [

  {
    title: "StorePilot",

    description:
      "A modern business operating system and POS platform built to manage products, orders, customers and sales efficiently.",

    image: "/projects/storepilot.png",

    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/Kidu121/StorePilot-by-kidus",

    demo:
      "https://store-pilot-by-kidus.vercel.app/",
  },


  {
    title: "SMART FINANCE IMPORTER",

    description:
      "An AI-powered financial assistant and Telegram bot designed to provide financial insights and smart digital support.",

    image: "/digaf.png",

    technologies: [
      "Node.js",
      "TypeScript",
      "Telegram API",
      "AI",
    ],

    github:
      "https://github.com/Kidu121",

    demo:
      "https://digaf-mfi-rouge.vercel.app/",
  },



  {
    title: "Personal Portfolio",

    description:
      "A responsive developer portfolio website showcasing my skills, projects and professional experience.",

    image: "",

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github:
      "https://github.com/Kidu121/kidusyared-portfolio",

    demo:
      "https://kidusyared-portfolio-gilt.vercel.app/",
  },

];



export default function Projects() {

  return (

    <section
      id="projects"
      className="
      py-24 px-6
      bg-white
      dark:bg-gray-950
      transition-colors duration-300
      "
    >

      <div className="max-w-7xl mx-auto">


        <motion.div
          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-16"
        >

          <h2
            className="
            text-4xl md:text-5xl
            font-bold
            text-gray-900
            dark:text-white
            "
          >

            My{" "}

            <span className="text-blue-600">
              Projects
            </span>

          </h2>


          <p
            className="
            mt-4
            text-gray-600
            dark:text-gray-400
            "
          >
            Some of my recent work and software projects.
          </p>


        </motion.div>





        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >


          {projects.map((project,index)=>(


            <motion.div

              key={project.title}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index * 0.1
              }}

              viewport={{
                once:true
              }}

              className="
              bg-white
              dark:bg-gray-800
              rounded-3xl
              overflow-hidden
              shadow-lg
              border
              border-gray-200
              dark:border-gray-700
              hover:-translate-y-2
              transition
              "

            >


              {/* Image */}

              <div
                className="
                h-52
                overflow-hidden
                bg-gray-100
                dark:bg-gray-700
                "
              >

                <img

                  src={project.image}

                  alt={project.title}

                  onError={(e)=>{

                    e.currentTarget.src="/profile.png";

                  }}

                  className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition duration-500
                  "

                />

              </div>





              {/* Content */}

              <div className="p-6">


                <h3
                  className="
                  text-2xl
                  font-bold
                  mb-3
                  text-gray-900
                  dark:text-white
                  "
                >

                  {project.title}

                </h3>



                <p
                  className="
                  text-gray-600
                  dark:text-gray-400
                  leading-7
                  mb-5
                  "
                >

                  {project.description}

                </p>





                <div
                  className="
                  flex flex-wrap gap-2 mb-6
                  "
                >

                  {project.technologies.map((tech)=>(

                    <span

                      key={tech}

                      className="
                      px-3 py-1
                      rounded-full
                      text-sm
                      bg-blue-50
                      dark:bg-blue-900/30
                      text-blue-600
                      dark:text-blue-400
                      "

                    >

                      {tech}

                    </span>

                  ))}

                </div>






                <div className="flex gap-4">


                  <a

                    href={project.github}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-gray-600
                    text-gray-800
                    dark:text-white
                    hover:bg-gray-900
                    hover:text-white
                    transition
                    "

                  >

                    <FaGithub size={18}/>

                    GitHub

                  </a>





                  <a

                    href={project.demo}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    flex items-center gap-2
                    bg-blue-600
                    text-white
                    px-4 py-2
                    rounded-lg
                    hover:bg-blue-700
                    transition
                    "

                  >

                    <ExternalLink size={18}/>

                    Demo

                  </a>



                </div>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}