// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences } from "../constants";
// import { textVariant } from "../utils/motion";

// const Tech = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           What I work with
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Technologies
//         </h2>
//       </motion.div>

//       <div className='flex flex-row flex-wrap justify-center gap-10'>
//         {technologies.map((technology) => (
//           <div className='w-28 h-28' key={technology.name}>
//             <text className="text-secondary text-[16px] font-semibold">{`‎‎‎‎‎‎‎‎ㅤ  ${technology.name}`}</text>
//             <BallCanvas icon={technology.icon} name={technology.name}/>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Tech, "");

//tech.jsx

import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <text className="text-secondary text-[16px] font-semibold">{`‎‎‎‎‎‎‎‎ㅤ  ${technology.name}`}</text>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
