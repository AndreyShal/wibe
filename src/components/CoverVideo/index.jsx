import { motion } from "framer-motion";
import MainVideo from "../../assets/Walking Girl.mp4";
import css from "./coverVideo.module.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <div className={css.videoContainer} data-scroll>
      <div className={css.darkOverlay}></div>
      <motion.div className={css.title} variants={container} initial="hidden" animate="show">
        <div>
          <motion.p variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </motion.p>
          <motion.p variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </motion.p>
          <motion.p variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </motion.p>
          <motion.p variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </motion.p>
        </div>
        <motion.span style={{ alignSelf: "flex-end" }} variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          inspire. create. belive
        </motion.span>
      </motion.div>

      <video src={MainVideo} muted={true} autoPlay={true} playsInline={true} type="video/mp4" />
    </div>
  );
};

export default CoverVideo;
