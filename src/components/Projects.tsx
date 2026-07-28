import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ExternalLink,
  X,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";



const projects = [

{
title:"StorePilot",

description:
"A modern business operating system and POS platform built to manage products, orders, customers and sales efficiently.",


image:"/projects/storepilot.png",


technologies:[

"React",
"TypeScript",
"Firebase",
"Tailwind CSS",

],


features:[

"Product Management",

"Sales Dashboard",

"Customer Management",

"Order Tracking",

"Firebase Authentication",

"Business Analytics",

],


github:
"https://github.com/Kidu121/StorePilot-by-kidus",


demo:
"https://store-pilot-by-kidus.vercel.app/",


featured:true,


status:"Live",

},





{
title:"SMART FINANCE IMPORTER",


description:
"An AI-powered financial assistant and Telegram bot designed to provide financial insights and smart digital support.",


image:"/projects/financeai.png",


technologies:[

"Node.js",

"TypeScript",

"Telegram API",

"Gemini AI",

],


features:[

"AI Financial Assistant",

"Telegram Bot Integration",

"Smart Financial Insights",

"Digital Loan Support",

"AI Conversation System",

],


github:
"https://github.com/Kidu121",


demo:
"https://digaf-mfi-rouge.vercel.app/",


featured:true,


status:"In Progress",

},





{
title:"Personal Portfolio",


description:
"A responsive developer portfolio website showcasing my skills, projects and professional experience.",


image:"/projects/portfolio.png",


technologies:[

"React",

"Tailwind CSS",

"Framer Motion",

],


features:[

"Responsive Design",

"Dark Mode",

"Smooth Animations",

"Contact Form",

"Project Showcase",

],


github:
"https://github.com/Kidu121/kidusyared-portfolio",


demo:
"https://kidusyared-portfolio-gilt.vercel.app/",


featured:false,


status:"Live",

},


];



type Project = typeof projects[number];



export default function Projects(){


const [selectedProject,setSelectedProject] =
useState<Project | null>(null);



useEffect(()=>{


const closeModal=(e:KeyboardEvent)=>{

if(e.key==="Escape"){

setSelectedProject(null);

}

};


window.addEventListener(
"keydown",
closeModal
);


return()=>{

window.removeEventListener(
"keydown",
closeModal
);

};


},[]);
return (

<section

id="projects"

className="

py-16

sm:py-24

px-4

sm:px-6

bg-white

dark:bg-gray-950

transition-colors

duration-300

"

>


<div

className="

max-w-7xl

mx-auto

"

>


{/* Header */}


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



className="

text-center

mb-12

sm:mb-16

"

>


<h2

className="

text-3xl

sm:text-4xl

md:text-5xl

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







{/* Projects Grid */}



<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-8

"

>


{

projects.map((project,index)=>(


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

group

bg-white

dark:bg-gray-800

rounded-3xl

overflow-hidden

border

border-gray-200

dark:border-gray-700

shadow-lg

hover:-translate-y-3

hover:shadow-2xl

hover:border-blue-500/40

transition-all

duration-300

"

>





{/* Image */}



<div

className="

relative

h-56

overflow-hidden

bg-gray-100

dark:bg-gray-700

"

>


<img


src={project.image || "/profile.png"}


alt={project.title}



onError={(e)=>{

e.currentTarget.src="/profile.png";

}}



className="

w-full

h-full

object-cover

group-hover:scale-110

transition-transform

duration-700

"

/>







{/* Hover Overlay */}



<div

className="

absolute

inset-0

bg-black/60

opacity-0

group-hover:opacity-100

transition

duration-500

flex

items-center

justify-center

"

>


<span

className="

text-white

font-semibold

text-lg

"

>

👀 View Project

</span>


</div>







{/* Featured */}



{

project.featured && (


<span

className="

absolute

top-4

left-4

bg-yellow-400

text-black

text-xs

font-bold

px-3

py-1

rounded-full

shadow-lg

"

>

⭐ Featured

</span>


)


}







{/* Status */}



<span

className={`

absolute

top-4

right-4

text-xs

font-semibold

px-3

py-1

rounded-full

shadow-lg


${

project.status==="Live"

?

"bg-green-500 text-white"

:

"bg-orange-500 text-white"

}


`}

>


{

project.status==="Live"

?

"🟢 Live"

:

"🚧 In Progress"

}


</span>



</div>
              {/* Card Content */}

              <div className="p-6">


                <h3

                  className="

                  text-2xl

                  font-bold

                  text-gray-900

                  dark:text-white

                  mb-3

                  "

                >

                  {project.title}

                </h3>





                <p

                  className="

                  text-gray-600

                  dark:text-gray-400

                  leading-7

                  mb-6

                  "

                >

                  {project.description}

                </p>






                {/* Technology Badges */}


                <div

                  className="

                  flex

                  flex-wrap

                  gap-2

                  mb-6

                  "

                >


                  {

                  project.technologies.map((tech)=>(


                    <span


                      key={tech}


                      className="

                      px-3

                      py-1

                      rounded-full

                      text-xs

                      font-medium

                      bg-blue-100

                      dark:bg-blue-900/40

                      text-blue-700

                      dark:text-blue-300

                      hover:bg-blue-600

                      hover:text-white

                      hover:scale-105

                      transition-all

                      duration-300

                      "

                    >

                      {tech}


                    </span>


                  ))

                  }


                </div>







                {/* Action Buttons */}



                <div

                  className="

                  flex

                  flex-col

                  sm:flex-row

                  gap-3

                  "

                >





                  {/* Details Button */}



                  <button


                    onClick={()=>setSelectedProject(project)}



                    className="

                    flex-1

                    flex

                    items-center

                    justify-center

                    gap-2

                    px-4

                    py-3

                    rounded-xl

                    bg-gray-900

                    dark:bg-gray-700

                    text-white

                    hover:scale-105

                    transition-all

                    duration-300

                    "

                  >

                    👀 Details


                  </button>








                  {/* Github Button */}



                  <a


                    href={project.github}


                    target="_blank"


                    rel="noopener noreferrer"



                    className="

                    flex-1

                    flex

                    items-center

                    justify-center

                    gap-2

                    px-4

                    py-3

                    rounded-xl

                    border

                    border-gray-300

                    dark:border-gray-600

                    text-gray-800

                    dark:text-white

                    hover:bg-gray-900

                    hover:text-white

                    hover:scale-105

                    transition-all

                    duration-300

                    "

                  >


                    <FaGithub size={18}/>


                    GitHub


                  </a>








                  {/* Live Demo Button */}



                  <a


                    href={project.demo}


                    target="_blank"


                    rel="noopener noreferrer"



                    className="

                    flex-1

                    flex

                    items-center

                    justify-center

                    gap-2

                    px-4

                    py-3

                    rounded-xl

                    bg-blue-600

                    text-white

                    hover:bg-blue-700

                    hover:scale-105

                    shadow-lg

                    transition-all

                    duration-300

                    "

                  >


                    <ExternalLink size={18}/>


                    Live Demo


                  </a>




                </div>



              </div>





            </motion.div>


          ))}


        </div>
              </div>


      {/* Project Details Modal */}


      <AnimatePresence>


        {selectedProject && (


          <motion.div


            initial={{
              opacity:0
            }}


            animate={{
              opacity:1
            }}


            exit={{
              opacity:0
            }}


            className="

            fixed

            inset-0

            z-50

            flex

            items-center

            justify-center

            px-4

            bg-black/70

            backdrop-blur-sm

            "

          >




            <motion.div


              initial={{

                scale:0.8,

                opacity:0

              }}



              animate={{

                scale:1,

                opacity:1

              }}



              exit={{

                scale:0.8,

                opacity:0

              }}



              transition={{

                duration:0.3

              }}



              className="

              relative

              w-full

              max-w-3xl

              max-h-[90vh]

              overflow-y-auto

              bg-white

              dark:bg-gray-900

              rounded-3xl

              shadow-2xl

              p-6

              sm:p-8

              "

            >





              {/* Close Button */}


              <button


                onClick={()=>setSelectedProject(null)}



                className="

                absolute

                top-4

                right-4

                z-10

                p-2

                rounded-full

                bg-gray-200

                dark:bg-gray-700

                hover:scale-110

                transition

                "

              >


                <X size={20}/>


              </button>







              {/* Modal Image */}



              <img


                src={selectedProject.image || "/profile.png"}


                alt={selectedProject.title}



                onError={(e)=>{

                  e.currentTarget.src="/profile.png";

                }}



                className="

                w-full

                h-64

                object-cover

                rounded-2xl

                mb-6

                "

              />







              {/* Title */}



              <h2


                className="

                text-3xl

                font-bold

                text-gray-900

                dark:text-white

                mb-3

                "

              >


                {selectedProject.title}


              </h2>






              {/* Description */}



              <p


                className="

                text-gray-600

                dark:text-gray-400

                leading-7

                mb-6

                "

              >


                {selectedProject.description}


              </p>
                            {/* Key Features */}


              <h3

                className="

                text-xl

                font-bold

                text-gray-900

                dark:text-white

                mb-4

                "

              >

                Key Features

              </h3>





              <ul

                className="

                space-y-3

                mb-6

                "

              >


                {

                  selectedProject.features.map(

                    (feature:string)=>(


                      <li

                        key={feature}

                        className="

                        flex

                        items-center

                        gap-2

                        text-gray-600

                        dark:text-gray-400

                        "

                      >

                        <span>
                          ✅
                        </span>

                        {feature}


                      </li>


                    )

                  )

                }


              </ul>







              {/* Modal Technologies */}



              <div

                className="

                flex

                flex-wrap

                gap-2

                mb-8

                "

              >


                {

                selectedProject.technologies.map(

                  (tech:string)=>(


                    <span


                      key={tech}


                      className="

                      px-4

                      py-2

                      rounded-full

                      text-sm

                      bg-blue-100

                      dark:bg-blue-900/40

                      text-blue-700

                      dark:text-blue-300

                      "

                    >

                      {tech}


                    </span>


                  )

                )

                }


              </div>







              {/* Modal Buttons */}



              <div

                className="

                flex

                flex-col

                sm:flex-row

                gap-4

                "

              >




                <a


                  href={selectedProject.github}


                  target="_blank"


                  rel="noopener noreferrer"



                  className="

                  flex-1

                  flex

                  items-center

                  justify-center

                  gap-2

                  py-3

                  rounded-xl

                  border

                  border-gray-300

                  dark:border-gray-600

                  dark:text-white

                  hover:bg-gray-900

                  hover:text-white

                  transition-all

                  duration-300

                  "

                >

                  <FaGithub size={18}/>

                  GitHub


                </a>







                <a


                  href={selectedProject.demo}


                  target="_blank"


                  rel="noopener noreferrer"



                  className="

                  flex-1

                  flex

                  items-center

                  justify-center

                  gap-2

                  py-3

                  rounded-xl

                  bg-blue-600

                  text-white

                  hover:bg-blue-700

                  transition-all

                  duration-300

                  "

                >

                  <ExternalLink size={18}/>

                  Live Demo


                </a>



              </div>




            </motion.div>


          </motion.div>


        )}


      </AnimatePresence>



    </section>


  );

}