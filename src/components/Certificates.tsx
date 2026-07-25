import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Information Technology Bachelor's Degree",
    issuer: "Wachemo University",
    year: "2024",
    link: "#",
  },
  {
    title: "Coming Soon",
    issuer: "Future Professional Certifications",
    year: "2026",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
      py-24 px-6
      bg-gray-50
      dark:bg-gray-950
      transition-colors duration-300
      "
    >

      <div className="max-w-6xl mx-auto">


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          className="
          text-4xl
          font-bold
          text-center
          mb-14
          text-gray-900
          dark:text-white
          "
        >
          Certificates
        </motion.h2>



        <div className="grid md:grid-cols-2 gap-8">


          {certificates.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.2 }}

              className="
              bg-white
              dark:bg-gray-800
              p-8
              rounded-2xl
              shadow-lg
              border
              border-gray-200
              dark:border-gray-700
              transition
              "

            >


              <Award 
                className="text-blue-600 mb-5"
                size={35}
              />



              <h3
                className="
                text-xl
                font-bold
                mb-2
                text-gray-900
                dark:text-white
                "
              >
                {item.title}
              </h3>



              <p
                className="
                text-gray-600
                dark:text-gray-300
                "
              >
                {item.issuer}
              </p>



              <p
                className="
                text-sm
                text-gray-500
                dark:text-gray-400
                mt-2
                "
              >
                {item.year}
              </p>



              {item.link !== "#" && (

                <a

                  href={item.link}

                  target="_blank"

                  rel="noreferrer"

                  className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  text-blue-600
                  hover:text-blue-700
                  font-medium
                  "

                >

                  View Certificate

                  <ExternalLink size={16} />

                </a>

              )}


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}