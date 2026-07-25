import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle,
} from "lucide-react";


const experiences = [
  {
    role: "Digital Loan & Contact Center Officer",

    company: "Digaf Micro Credit Provider",

    period: "2024 - Present",

    description:
      "Managed digital loan operations, supported customers through digital financial services, and ensured efficient loan processing workflows.",

    responsibilities: [
      "Reviewed and processed digital loan applications",
      "Analyzed customer information and financial requests",
      "Provided customer support for digital lending services",
      "Maintained accurate records and loan documentation",
      "Worked with digital financial systems and platforms",
    ],
  },
];


export default function Experience() {

  return (

    <section
      id="experience"
      className="
      py-20 sm:py-24
      px-4 sm:px-6
      bg-gray-50
      dark:bg-gray-950
      transition-colors duration-300
      "
    >

      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.6,
          }}

          viewport={{
            once:true,
          }}

          className="text-center mb-12 sm:mb-16"
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

            Work{" "}

            <span className="text-blue-600">
              Experience
            </span>

          </h2>


          <p
            className="
            text-gray-600
            dark:text-gray-400
            mt-4
            text-sm
            sm:text-base
            "
          >

            My professional journey and practical experience.

          </p>


        </motion.div>





        {/* Timeline */}

        <div className="relative">


          {/* Timeline Line */}

          <div
            className="
            absolute
            left-5
            top-0
            bottom-0
            w-1
            bg-blue-200
            dark:bg-blue-900
            "
          />





          {experiences.map((exp,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                x:-40,
              }}

              whileInView={{
                opacity:1,
                x:0,
              }}

              transition={{
                duration:0.6,
              }}

              viewport={{
                once:true,
              }}

              className="
              relative
              pl-14
              sm:pl-16
              mb-10
              "

            >



              {/* Icon */}

              <div
                className="
                absolute
                left-0
                top-0
                w-10
                h-10
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                shadow-lg
                "
              >

                <Briefcase size={20}/>

              </div>







              {/* Card */}

              <div
                className="
                bg-white
                dark:bg-gray-800
                rounded-2xl
                sm:rounded-3xl
                p-5
                sm:p-8
                shadow-sm
                hover:shadow-xl
                border
                border-gray-200
                dark:border-gray-700
                transition
                "
              >



                <h3
                  className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-gray-800
                  dark:text-white
                  "
                >

                  {exp.role}

                </h3>





                <p
                  className="
                  text-blue-600
                  font-semibold
                  mt-2
                  "
                >

                  {exp.company}

                </p>






                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-500
                  dark:text-gray-400
                  mt-3
                  text-sm
                  sm:text-base
                  "
                >

                  <Calendar size={18}/>

                  {exp.period}

                </div>






                <p
                  className="
                  text-gray-600
                  dark:text-gray-300
                  leading-7
                  mt-6
                  text-sm
                  sm:text-base
                  "
                >

                  {exp.description}

                </p>







                <h4
                  className="
                  font-bold
                  text-lg
                  mt-6
                  mb-4
                  text-gray-900
                  dark:text-white
                  "
                >

                  Responsibilities

                </h4>






                <div className="space-y-3">


                  {exp.responsibilities.map((item)=>(


                    <div
                      key={item}
                      className="
                      flex
                      gap-3
                      items-start
                      "
                    >


                      <CheckCircle
                        size={20}
                        className="
                        text-blue-600
                        mt-1
                        flex-shrink-0
                        "
                      />



                      <p
                        className="
                        text-gray-600
                        dark:text-gray-300
                        text-sm
                        sm:text-base
                        "
                      >

                        {item}

                      </p>



                    </div>


                  ))}


                </div>





              </div>




            </motion.div>


          ))}


        </div>



      </div>


    </section>

  );

}