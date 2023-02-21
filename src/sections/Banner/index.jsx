import css from "./banner.module.scss";

const Banner = () => {
  return (
    <section className={css.section}>
      <div className={css.container} id="direction">
        <h1 className={css.bannerComponent}>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#direction">
            Fashion is the armour
          </span>
        </h1>
        <h1 className={css.bannerComponent} data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#direction">
            to survive everyday life
          </span>
        </h1>
        <h1 className={css.bannerComponent}>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#direction">
            One is never over-dressed or
          </span>
        </h1>
        <h1 className={css.bannerComponent}>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#direction">
            under-dressed
          </span>
        </h1>
        <h1 className={css.bannerComponent} data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#direction">
            with a Little Black Dress
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
