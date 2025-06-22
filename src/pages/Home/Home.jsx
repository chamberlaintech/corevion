import React from "react";
import Hero from "../../components/Hero/Hero";
import Capabilities from "../../components/Capabilities/Capabilities";
import Comparison from "../../components/Comparison/Comparison";
import Technology from "../../components/Technology/Technology";
import CTAProduct from "../../components/CTAProduct/CTAProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <Capabilities />
      <Comparison />
      <Technology />
      <CTAProduct />
    </>
  );
};

export default Home;
