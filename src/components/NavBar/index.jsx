import { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import css from "./navBar.module.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    console.log(id);
    const elem = document.querySelector(id);
    console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <motion.div
      click={+click}
      style={click ? { top: "0" } : { top: "-var(--navHeight)" }}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.ul className={css.menuItems} drag="y" dragConstraints={{ top: 0, bottom: 70 }} dragElastic={0.05} dragSnapToOrigin>
        <button className={css.menuBtn} onClick={() => setClick(!click)}>
          Menu
        </button>
        <motion.li
          className={css.menuItem}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          aria-hidden="true"
          onClick={() => handleScroll("#home")}
        >
          Home
        </motion.li>
        <motion.li className={css.menuItem} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleScroll(".about")}>
          about
        </motion.li>
        <motion.li className={css.menuItem} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }} onClick={() => handleScroll("#shop")}>
          shop
        </motion.li>
        <motion.li
          className={css.menuItem}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll(".new-arrival")}
        >
          new arrival
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default NavBar;
