import { useLocomotiveScroll } from "react-locomotive-scroll";
import Logo from "../../assets/Svgs/star_white_48dp.svg";
import { motion } from "framer-motion";
import css from "./footer.module.scss";

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <section className={css.section}>
      <div className={css.logoContainer}>
        <img width="300" height="300" src={Logo} alt="Wibe" data-scroll data-scroll-speed="1" />
        <h3 data-scroll data-scroll-speed="-1">
          Wibe Studio
        </h3>
      </div>
      <motion.footer
        className={css.footerComponent}
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            about
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#shop")}>
            shop
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            new arrival
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>
        <div className={css.bottom}>
          <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
            &copy; 2022. All Rights Reserved.
          </span>
          <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            Made with &hearts; by{" "}
            <a href="http://youtube.com/codebucks" target={"_blank"} rel="noreferrer">
              CodeBucks
            </a>
          </span>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
