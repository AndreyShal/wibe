import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import css from "./shop.module.scss";

import img1 from "../../assets/Images/1.webp";
import img2 from "../../assets/Images/2.webp";
import img3 from "../../assets/Images/3.webp";
import img4 from "../../assets/Images/4.webp";
import img5 from "../../assets/Images/5.webp";
import img6 from "../../assets/Images/6.webp";
import img7 from "../../assets/Images/7.webp";
import img8 from "../../assets/Images/8.webp";
import img9 from "../../assets/Images/9.webp";
import img10 from "../../assets/Images/10.webp";

const Product = ({ img, title = "" }) => {
  return (
    <motion.div
      className={css.item}
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </motion.div>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const scrollingElement = Horizontalref.current;
    const pinWrapWidth = scrollingElement.offsetWidth;

    const t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section className={css.section} ref={ref} id="shop">
      <h1 className={css.title} data-scroll data-scroll-speed="-1">
        New Arrivals
      </h1>
      <div className={css.left}>
        <p>
          The brand new collection is currently being developed in USA. We create our products using best quality material, including the use of some
          of the pure fabrics to make our products. All products are made using the best materials, from the finest cotton to the finest fabrics.{" "}
          <br /> <br />
          We have lots of different clothing options like shoes, jackets and dresses. Not only clothes but we also provide unique Jewellery as well.
          It is great for us to carry our new clothes all around the country and look different.
        </p>
      </div>
      <div className={css.right} data-scroll ref={Horizontalref}>
        <Product img={img3} title="Sweatshirts" />
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img1} title="Man Basics" />
        <Product img={img2} title="Tops" />
        <Product img={img5} title="Blazers" />
        <Product img={img6} title="Suits" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Jewellery" />
        <Product img={img9} title="Watches" />
        <Product img={img10} title="Special Edition" />
      </div>
    </section>
  );
};

export default Shop;
