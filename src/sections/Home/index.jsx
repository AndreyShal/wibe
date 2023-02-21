import React, { Suspense } from "react";
import css from "./home.module.scss";

const CoverVideo = React.lazy(() => import("../../components/CoverVideo"));
const NavBar = React.lazy(() => import("../../components/NavBar"));
const Logo = React.lazy(() => import("../../components/Logo"));

const Home = () => {
  return (
    <section className={css.section} id="home">
      <Suspense fallback={<></>}>
        <Logo />
        <NavBar />
        <CoverVideo />
      </Suspense>
    </section>
  );
};

export default Home;
