import { motion } from "framer-motion";

import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Code2,
  CheckCircle,
} from "lucide-react";

import type { ReactNode } from "react";


export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      py-24
      px-6
      bg-gradient-to-br
      from-white
      via-blue-50
      to-white
      dark:from-gray-950
      dark:via-slate-900
      dark:to-gray-950
      transition-colors
      duration-300
      "
    >

      {/* Background Blur */}

      <div
        className="
        absolute
        -top-20
        -left-20
        w-80
        h-80
        rounded-full
        bg-blue-500/10
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        rounded-full
        bg-indigo-500/10
        blur-3xl
        "
      />


      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="text-center mb-20"
        >


          <span
            className="
            inline-block
            px-4
            py-1.5
            rounded-full
            bg-blue-100
            dark:bg-blue-900/30
            text-blue-700
            dark:text-blue-400
            font-semibold
            text-sm
            "
          >
            ABOUT ME
          </span>



          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-extrabold
            text-gray-900
            dark:text-white
            "
          >

            Building AI-Powered{" "}

            <span className="text-blue-600">
              Financial Solutions
            </span>

          </h2>



          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-gray-600
            dark:text-gray-400
            "
          >

            IT professional passionate about creating modern web
            applications, intelligent AI systems, and digital finance
            solutions. Focused on building scalable technologies that
            improve financial services through automation and innovation.

          </p>


        </motion.div>





        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >



        {/* LEFT SIDE */}


        <motion.div

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

        >


          <p
          className="
          text-blue-600
          font-semibold
          mb-4
          "
          >
            Hello 👋 I'm
          </p>



          <h3
          className="
          text-4xl
          font-extrabold
          text-gray-900
          dark:text-white
          "
          >
            Kidusyared Liku
          </h3>




          <h4
          className="
          mt-3
          text-2xl
          font-bold
          text-blue-600
          "
          >
        IT Professional | Software Engineer
          </h4>




          <p
          className="
          mt-8
          leading-8
          text-lg
          text-gray-600
          dark:text-gray-400
          "
          >

            I am an Information Technology graduate and software
            developer focused on building modern web applications,
            AI-powered systems, and digital financial solutions
            that solve real-world problems.

          </p>




          <p
          className="
          mt-6
          leading-8
          text-lg
          text-gray-600
          dark:text-gray-400
          "
          >

            I specialize in React, TypeScript, Firebase and AI-powered
            applications, focusing on clean code, great user experience,
            and scalable software architecture.

          </p>



          {/* STATS */}

          <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mt-12
          "
          >


            <Stat
            value="5+"
            title="Projects"
            />


            <Stat
            value="1+"
            title="Years"
            />


            <Stat
            value="10+"
            title="Technologies"
            />


            <Stat
            value="100%"
            title="Passion"
            />


          </div>


          {/* CONTINUE IN PART 2 */}
          
          {/* INFORMATION CARDS */}

          <div
          className="
          grid
          sm:grid-cols-2
          gap-5
          mt-12
          "
          >


            <InfoCard

            icon={
              <MapPin
              className="text-blue-600"
              />
            }

            title="Location"

            value="Ethiopia"

            />



            <InfoCard

            icon={
              <Mail
              className="text-blue-600"
              />
            }

            title="Email"

            value="kidusyaredlik@gmail.com"

            />



            <InfoCard

            icon={
              <Briefcase
              className="text-blue-600"
              />
            }

            title="Experience"

            value="1+ Years"

            />



            <InfoCard

            icon={
              <GraduationCap
              className="text-blue-600"
              />
            }

            title="Education"

            value="BSc Information Technology"

            />


          </div>



        </motion.div>





        {/* RIGHT SIDE */}


        <motion.div

          initial={{
            opacity:0,
            x:60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

          className="space-y-8"

        >



          {/* EXPERTISE CARD */}


          <motion.div

          whileHover={{
            y:-8,
            scale:1.02
          }}

          className="
          rounded-3xl
          p-8
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          shadow-2xl
          "

          >


            <Code2
            size={45}
            className="mb-6"
            />



            <h3
            className="
            text-3xl
            font-bold
            mb-5
            "
            >

              My Expertise

            </h3>



            <p
            className="
            leading-8
            text-blue-100
            "
            >

              I build modern web applications,
              AI-powered software, and fintech solutions
              that deliver excellent user experiences
              while solving real business problems.

            </p>



          </motion.div>






          {/* CAREER GOAL */}


          <motion.div

          whileHover={{
            y:-8,
            scale:1.02
          }}

          className="
          rounded-3xl
          p-8
          bg-white/70
          dark:bg-gray-900/80
          backdrop-blur-xl
          border
          border-gray-200
          dark:border-gray-700
          shadow-xl
          "

          >


            <h3
            className="
            text-3xl
            font-bold
            mb-6
            text-gray-900
            dark:text-white
            "
            >

              Career Goal

            </h3>



            <p
            className="
            text-gray-600
            dark:text-gray-400
            leading-8
            "
            >

              My goal is to work with innovative companies,
              contribute to impactful software products,
              continuously improve my technical skills,
              and create digital solutions that make
              people's lives easier.

            </p>


          </motion.div>






          {/* SPECIALIZATION */}



          <motion.div

          whileHover={{
            y:-8,
            scale:1.02
          }}

          className="
          rounded-3xl
          p-8
          bg-white
          dark:bg-gray-900
          border
          border-gray-200
          dark:border-gray-700
          shadow-xl
          "

          >



            <h3
            className="
            text-3xl
            font-bold
            mb-8
            text-gray-900
            dark:text-white
            "
            >

              What I Specialize In

            </h3>




            <div className="space-y-5">


            {[
              "React & TypeScript Development",
              "Firebase & Cloud Solutions",
              "AI-Powered Applications",
              "FinTech & Digital Loan Systems",
              "REST API Integration",
              "Responsive Web Design",

            ].map((item)=>(


              <div

              key={item}

              className="
              flex
              items-center
              gap-4
              "

              >


                <CheckCircle

                size={22}

                className="text-blue-600"

                />



                <span

                className="
                text-gray-700
                dark:text-gray-300
                text-lg
                "

                >

                  {item}

                </span>


              </div>


            ))}



            </div>



          </motion.div>



        </motion.div>



        </div>


      </div>


    </section>

  );

}








// ==========================
// STAT COMPONENT
// ==========================


function Stat({

value,
title,

}:{

value:string;
title:string;

}){


return (

<motion.div

whileHover={{

y:-5,
scale:1.05

}}

className="
text-center
rounded-2xl
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-gray-200
dark:border-gray-700
shadow-lg
py-6
"

>


<h3

className="
text-4xl
font-extrabold
text-blue-600
"

>

{value}

</h3>



<p

className="
mt-2
text-gray-600
dark:text-gray-400
"

>

{title}

</p>



</motion.div>


);

}








// ==========================
// INFO CARD COMPONENT
// ==========================


function InfoCard({

icon,
title,
value,

}:{

icon:ReactNode;
title:string;
value:string;

}){


return (

<motion.div

whileHover={{

y:-6,
scale:1.03

}}

className="
flex
items-center
gap-4
rounded-2xl
p-5
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-gray-200
dark:border-gray-700
shadow-lg
transition-all
duration-300
"

>


<div

className="
w-12
h-12
rounded-xl
bg-blue-100
dark:bg-blue-900/30
flex
items-center
justify-center
"

>

{icon}

</div>




<div>


<p

className="
text-sm
text-gray-500
dark:text-gray-400
"

>

{title}

</p>



<h4

className="
font-semibold
text-gray-900
dark:text-white
"

>

{value}

</h4>



</div>



</motion.div>


);

}