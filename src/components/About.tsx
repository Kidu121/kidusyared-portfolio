import { motion } from "framer-motion";

import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";



export default function About() {

  return (

    <section
      id="about"

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
        w-full
        "
      >





        {/* Title */}


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

            About

            <span className="text-blue-600">

              {" "}Me

            </span>


          </h2>





          <p

            className="
            text-gray-600

            dark:text-gray-400

            mt-4

            px-2

            max-w-2xl

            mx-auto

            text-sm
            sm:text-base
            "

          >

            Get to know more about my background,
            experience and passion for technology.


          </p>



        </motion.div>









        <div

          className="
          grid

          grid-cols-1

          md:grid-cols-2

          gap-10

          md:gap-12

          items-center
          "

        >







          {/* LEFT SIDE */}



          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{
              once:true
            }}

          >





            <h3

              className="
              text-2xl

              sm:text-3xl

              font-bold

              text-gray-800

              dark:text-gray-200

              mb-6
              "

            >

              IT Graduate &


              <span className="text-blue-600">

                {" "}Software Developer

              </span>


            </h3>







            <p

              className="
              text-gray-600

              dark:text-gray-400

              leading-7

              sm:leading-8

              text-base

              sm:text-lg

              mb-6
              "

            >

              I am an Information Technology graduate passionate about
              creating modern digital solutions. I have experience working
              with digital financial systems and developing web applications.


            </p>








            <p

              className="
              text-gray-600

              dark:text-gray-400

              leading-7

              sm:leading-8

              text-base

              sm:text-lg
              "

            >

              My goal is to build scalable software solutions that solve
              real-world problems using modern technologies like React,
              TypeScript, Firebase and Artificial Intelligence.


            </p>









            {/* Info Cards */}


            <div

              className="
              grid

              grid-cols-1

              sm:grid-cols-2

              gap-4

              sm:gap-5

              mt-8

              sm:mt-10
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

                value="Information Technology"

              />



            </div>





          </motion.div>
          



          {/* RIGHT SIDE */}



          <motion.div

            initial={{
              opacity:0,
              x:50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{
              once:true
            }}

            className="
            grid
            gap-6
            "

          >





            {/* Focus Card */}


            <div

              className="
              p-6
              sm:p-8

              rounded-3xl

              bg-gradient-to-br

              from-blue-600

              to-indigo-600

              text-white

              shadow-xl
              "

            >



              <Code2

                size={38}

                className="
                mb-5
                sm:w-[45px]
                sm:h-[45px]
                "

              />





              <h3

                className="
                text-xl

                sm:text-2xl

                font-bold

                mb-4
                "

              >

                My Focus

              </h3>






              <p

                className="
                leading-7

                text-sm

                sm:text-base
                "

              >

                Building responsive web applications,
                AI-powered solutions and fintech products
                that create meaningful impact.


              </p>



            </div>









            {/* Career Goal Card */}


            <div

              className="
              p-6

              sm:p-8

              rounded-3xl

              bg-gray-900

              dark:bg-black

              text-white

              shadow-xl
              "

            >



              <h3

                className="
                text-xl

                sm:text-2xl

                font-bold

                mb-5
                "

              >

                Career Goal

              </h3>






              <p

                className="
                text-gray-300

                leading-7

                text-sm

                sm:text-base
                "

              >

                To join a professional technology team where
                I can contribute my skills, learn continuously,
                and build innovative software solutions.


              </p>




            </div>





          </motion.div>






        </div>


      </div>


    </section>


  );

}







function InfoCard({

  icon,

  title,

  value,

}:{

  icon: React.ReactNode;

  title:string;

  value:string;

}) {


  return (


    <div

      className="
      flex

      items-center

      gap-3

      p-3

      sm:p-4

      rounded-xl

      bg-blue-50

      dark:bg-gray-900
      "

    >



      {icon}




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





        <p

          className="
          font-semibold

          text-gray-900

          dark:text-white

          text-sm

          sm:text-base
          "

        >

          {value}


        </p>



      </div>



    </div>


  );


}