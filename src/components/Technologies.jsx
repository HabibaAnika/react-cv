import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

// Function for defining animation variants for each icon
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { Icon: RiReactjsLine, color: "text-cyan-400", label: "React.js", duration: 2.5 },
  { Icon: TbBrandNextjs, color: "", label: "Next.js", duration: 3 },
  { Icon: SiMongodb, color: "text-green-500", label: "MongoDB", duration: 5 },
  { Icon: DiRedis, color: "text-red-700", label: "Redis", duration: 2 },
  { Icon: FaNodeJs, color: "text-green-500", label: "Node.js", duration: 6 },
  { Icon: BiLogoPostgresql, color: "text-sky-700", label: "PostgreSQL", duration: 4 },
  { Icon: SiExpress, color: "", label: "Express.js", duration: 4 },
];

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1 , y: 0}}
        initial={{ opacity: 0 , y: -100}}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map(({ Icon, color, label, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-transform"
            aria-label={label}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
