import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import css from "./logo.module.scss";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <div className={css.container}>
      <Link to={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 106.048 106.048"
          height="106.048px"
          viewBox="0 0 106.048 106.048"
          width="106.048px"
          fill="none"
        >
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M84.838,0H21.209C9.543,0,0,9.543,0,21.209v63.629c0,11.666,9.543,21.21,21.209,21.21h63.628
              c11.667,0,21.21-9.544,21.21-21.21V21.209C106.048,9.543,96.505,0,84.838,0z M84.838,100.745H21.209
		          c-8.769,0-15.907-7.136-15.907-15.907v-26.32C14.227,37.521,32.871,25.46,59.051,25.46c12.045,0,18.952,6.623,21.552,11.975
		          c2.517,5.165,2.206,14.978-4.784,16.758c-2.952,0.757-8.006-1.255-9.58-4.787c-1.46-3.28,0.052-8.176,2.393-9.574
		          c-21.365-5.458-44.208,54.015,27.734,55.9C93.471,98.799,89.385,100.745,84.838,100.745z"
            />
          </g>
        </svg>
        <motion.span className={css.text} variants={textVariants} initial="hidden" animate="visible">
          Wibe
        </motion.span>
      </Link>
    </div>
  );
};

export default Logo;
