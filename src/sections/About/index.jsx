import css from "./about.module.scss";

import img1 from "../../assets/Images/1.webp";
import img2 from "../../assets/Images/2.webp";
import img3 from "../../assets/Images/3.webp";

const About = () => {
  return (
    <section className={css.section + " about"} id="fixed-target">
      <h1 className={css.title} data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        About Us
      </h1>
      <div className={css.left} data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We&rsquo;re fashion studio based in&nbsp;california. We&nbsp;create unique designs that will blow your mind. We&nbsp;also design unique
        jewellary pieces. Fashion is&nbsp;an&nbsp;ART that can not be&nbsp;grasped by&nbsp;everyone. <br />
        <br /> We are very dedicated to making our products. We offer unique and creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We specialize in making things that make you happy. <br />
        <br /> We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. We are always
        looking to make something that is easy for everyone.
      </div>
      <div className={css.right}>
        <img width="400" height="600" src={img1} alt="About Us" />
        <img width="400" height="600" className="small-img-1" src={img2} alt="About Us" data-scroll data-scroll-speed="5" />
        <img width="400" height="600" className="small-img-2" src={img3} alt="About Us" data-scroll data-scroll-speed="-2" />
      </div>
    </section>
  );
};

export default About;
