import React from "react";

import Hero from "../components/Hero";
import FreeVideo from "../components/FreeVideo";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Integration from "../components/Integration";
import WhatsApp from "../components/WhatsApp";
import Capabilities from "../components/Capabilities";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <FreeVideo />
      <Features />
      <Stats />
      <Integration />
      <WhatsApp />
      <Capabilities />
    </React.Fragment>
  );
};

export default Home;
