import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";


import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";


import { Brain } from "lucide-react";




const skills = [

{
name:"React",
level:"90%",
icon:<FaReact/>
},

{
name:"TypeScript",
level:"85%",
icon:<SiTypescript/>
},

{
name:"JavaScript",
level:"90%",
icon:<FaJs/>
},

{
name:"Tailwind CSS",
level:"85%",
icon:<SiTailwindcss/>
},

{
name:"Firebase",
level:"80%",
icon:<SiFirebase/>
},

{
name:"Node.js",
level:"75%",
icon:<SiNodedotjs/>
},

];






const tools = [

{
name:"HTML",
icon:<FaHtml5/>
},

{
name:"CSS",
icon:<FaCss3Alt/>
},

{
name:"Git",
icon:<FaGitAlt/>
},

{
name:"GitHub",
icon:<FaGithub/>
},

{
name:"AI & APIs",
icon:<Brain/>
},

{
name:"MongoDB",
icon:<SiMongodb/>
},

];







export default function Skills(){


return(


<section

id="skills"

className="

py-16

sm:py-24

px-4

sm:px-6

bg-gray-50

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

Skills

</span>


</h2>





<p

className="

text-sm

sm:text-lg

text-gray-600

dark:text-gray-400

mt-4

px-2

"

>

Technologies and tools I use to build modern applications.


</p>



</motion.div>









{/* Skill Cards */}



<div

className="

grid

grid-cols-1

md:grid-cols-2

gap-5

sm:gap-8

"

>


{skills.map((skill,index)=>(



<motion.div


key={skill.name}



initial={{

opacity:0,

x:index % 2 === 0 ? -40 : 40

}}



whileInView={{

opacity:1,

x:0

}}



transition={{

duration:0.6

}}



viewport={{

once:true

}}



className="

bg-white

dark:bg-gray-800

p-5

sm:p-6

rounded-2xl

shadow-sm

hover:shadow-xl

transition

"

>



<div

className="

flex

justify-between

items-center

mb-5

gap-3

"

>





<div

className="

flex

items-center

gap-3

sm:gap-4

"

>


<div

className="

text-3xl

sm:text-4xl

text-blue-600

"

>

{skill.icon}

</div>




<h3

className="

text-lg

sm:text-xl

font-semibold

text-gray-900

dark:text-white

"

>

{skill.name}


</h3>



</div>





<span

className="

font-bold

text-blue-600

"

>

{skill.level}

</span>



</div>








<div

className="

w-full

bg-gray-200

dark:bg-gray-700

rounded-full

h-3

overflow-hidden

"

>



<motion.div


initial={{
width:0
}}


whileInView={{

width:skill.level

}}


transition={{

duration:1,

delay:0.2

}}


viewport={{

once:true

}}



className="

bg-blue-600

h-3

rounded-full

"

/>



</div>



</motion.div>



))}


</div>









{/* Tools */}



<div

className="

mt-14

sm:mt-20

"

>


<motion.h3


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}



transition={{

duration:0.5

}}



viewport={{

once:true

}}



className="

text-2xl

sm:text-3xl

font-bold

text-center

mb-8

sm:mb-10

text-gray-900

dark:text-white

"

>


Tools & Technologies


</motion.h3>








<div

className="

grid

grid-cols-2

sm:grid-cols-3

md:grid-cols-6

gap-4

sm:gap-6

"

>


{tools.map((tool)=>(


<motion.div


key={tool.name}



whileHover={{

scale:1.08

}}



className="

bg-white

dark:bg-gray-800

p-5

sm:p-6

rounded-2xl

shadow-sm

hover:shadow-lg

transition

flex

flex-col

items-center

gap-3

"

>


<div

className="

text-3xl

sm:text-4xl

text-blue-600

"

>

{tool.icon}


</div>





<p

className="

font-semibold

text-sm

sm:text-base

text-gray-700

dark:text-gray-300

text-center

"

>

{tool.name}


</p>



</motion.div>


))}



</div>



</div>




</div>


</section>


);


}