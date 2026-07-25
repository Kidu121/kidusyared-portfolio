import { motion } from "framer-motion";

import {
  Monitor,
  Globe,
  Database,
  Brain,
  Smartphone,
  Plug,
} from "lucide-react";


const services = [

  {
    icon:<Monitor size={36}/>,
    title:"Frontend Development",
    description:
    "Building modern, responsive and interactive web applications using React and TypeScript.",
  },


  {
    icon:<Globe size={36}/>,
    title:"Full Stack Web Apps",
    description:
    "Developing complete web applications with frontend, backend and database integration.",
  },


  {
    icon:<Database size={36}/>,
    title:"Firebase Integration",
    description:
    "Authentication, Firestore database, cloud storage and real-time applications.",
  },


  {
    icon:<Brain size={36}/>,
    title:"AI Applications",
    description:
    "Creating AI-powered tools using modern APIs and intelligent automation.",
  },


  {
    icon:<Smartphone size={36}/>,
    title:"Responsive Design",
    description:
    "Designing websites that work beautifully on desktop, tablet and mobile devices.",
  },


  {
    icon:<Plug size={36}/>,
    title:"API Integration",
    description:
    "Connecting applications with third-party APIs and external services.",
  },

];




export default function Services(){

return(


<section

id="services"

className="
py-16
sm:py-24

px-4
sm:px-6

bg-white

dark:bg-gray-900

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

viewport={{
once:true
}}

transition={{
duration:0.6
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


What{" "}

<span className="text-blue-600">

I Do

</span>


</h2>





<p

className="
mt-4

px-2

text-sm
sm:text-base

text-gray-600

dark:text-gray-400

max-w-2xl

mx-auto
"

>

I develop modern software solutions focused on performance,
usability and scalability.


</p>


</motion.div>









{/* Cards */}



<div

className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-5

sm:gap-8
"

>


{services.map((service,index)=>(



<motion.div

key={service.title}


initial={{
opacity:0,
y:40
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


whileHover={{
y:-8
}}


className="

bg-gray-50

dark:bg-gray-800

rounded-3xl

p-6

sm:p-8

border

border-gray-200

dark:border-gray-700

shadow-sm

hover:shadow-xl

transition

"

>


<div

className="
text-blue-600

mb-5

"

>

{service.icon}

</div>






<h3

className="
text-xl

sm:text-2xl

font-bold

mb-3

text-gray-900

dark:text-white

"

>

{service.title}


</h3>






<p

className="
text-sm

sm:text-base

text-gray-600

dark:text-gray-400

leading-7

"

>

{service.description}


</p>



</motion.div>



))}



</div>




</div>


</section>


);


}