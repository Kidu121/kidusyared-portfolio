import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";


export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState("");



  const sendEmail = async (e: React.FormEvent) => {

    e.preventDefault();

    if(!form.current) return;


    setLoading(true);
    setError("");
    setSuccess(false);


    try {

      await emailjs.sendForm(
        "service_cursvs6",
        "template_ce9g4zp",
        form.current,
        "OwbnxaHlOeVuanoqd"
      );


      setSuccess(true);
      form.current.reset();


    } catch(err){

      console.error(err);
      setError("Something went wrong. Please try again.");

    }
    finally{

      setLoading(false);

    }

  };



  return (

    <section
      id="contact"
      className="
      py-20 px-6
      bg-gray-50
      dark:bg-gray-950
      transition-colors duration-300
      "
    >


      <div className="
      max-w-6xl mx-auto
      grid md:grid-cols-2
      gap-10
      ">



        {/* Contact Info */}


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
            duration:0.5
          }}

          viewport={{
            once:true
          }}

        >



          <h2 className="
          text-4xl
          font-bold
          mb-6
          text-gray-900
          dark:text-white
          ">

            Contact Me

          </h2>




          <p className="
          text-gray-600
          dark:text-gray-400
          mb-8
          ">

            Have a project or opportunity?
            Feel free to send me a message.

          </p>





          <div className="space-y-5">



            <div className="flex items-center gap-4">

              <Mail className="text-blue-600"/>

              <span className="
              text-gray-800
              dark:text-gray-200
              ">
                kidusyaredlik@gmail.com
              </span>

            </div>




            <div className="flex items-center gap-4">

              <Phone className="text-blue-600"/>

              <span className="
              text-gray-800
              dark:text-gray-200
              ">
                +251 927209931 ,
                +251923519111
              </span>

            </div>




            <div className="flex items-center gap-4">

              <MapPin className="text-blue-600"/>

              <span className="
              text-gray-800
              dark:text-gray-200
              ">
                Addis Ababa, Ethiopia
              </span>

            </div>



          </div>



        </motion.div>







        {/* Form */}



        <motion.form

          ref={form}

          onSubmit={sendEmail}


          initial={{
            opacity:0,
            x:50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.5
          }}

          viewport={{
            once:true
          }}


          className="
          bg-white
          dark:bg-gray-900
          p-8
          rounded-2xl
          shadow-lg
          space-y-5
          border
          border-gray-200
          dark:border-gray-800
          "

        >




          <input

            type="text"

            name="user_name"

            placeholder="Your Name"

            required


            className="
            w-full
            p-3
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            border
            border-gray-300
            dark:border-gray-700
            text-gray-900
            dark:text-white
            outline-none
            "

          />






          <input

            type="email"

            name="user_email"

            placeholder="Your Email"

            required


            className="
            w-full
            p-3
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            border
            border-gray-300
            dark:border-gray-700
            text-gray-900
            dark:text-white
            outline-none
            "

          />






          <textarea

            name="message"

            placeholder="Your Message"

            rows={5}

            required


            className="
            w-full
            p-3
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            border
            border-gray-300
            dark:border-gray-700
            text-gray-900
            dark:text-white
            outline-none
            "

          />







          <button

            disabled={loading}

            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-lg
            transition
            "

          >


            {loading ? (

              <>
                <Loader2 className="animate-spin"/>

                Sending...

              </>


            ) : (

              <>

                <Send size={20}/>

                Send Message

              </>

            )}


          </button>







          {success && (

            <div className="
            flex
            items-center
            gap-2
            text-green-600
            dark:text-green-400
            ">

              <CheckCircle/>

              Message sent successfully!

            </div>

          )}






          {error && (

            <p className="text-red-500">

              {error}

            </p>

          )}



        </motion.form>



      </div>


    </section>

  );

}