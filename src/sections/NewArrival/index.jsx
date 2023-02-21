import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import css from "./newArrival.module.scss";

import img1 from "../../assets/Images/11.webp";
import img2 from "../../assets/Images/12.webp";
import img3 from "../../assets/Images/13.webp";
import img4 from "../../assets/Images/14.webp";

const Photos = ({ img, name }) => {
  return (
    <div className={css.item}>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;

    const scrollingElement = ScrollingRef.current;
    const t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section className={css.section + " new-arrival"} ref={ref} id="fixed-target">
      <div className={css.overlay} />
      <motion.h1 className={css.title} data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        The ocean in its manifestations
      </motion.h1>
      <div className={css.container} ref={ScrollingRef}>
        <Photos img={img1} name="Denim" />
        <Photos img={img2} name="Cool Dresses" />
        <Photos img={img3} name="Jackets" />
        <Photos img={img4} name="T-shirts" />
      </div>
      <div className={css.text} data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men. The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </div>
    </section>
  );
};

export default NewArrival;
