import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpeg";
const HomePage = () => {
  return (
    <div>
      <Hero title="awesome gadgets" max img={mainBcg}>
        <Link to="/products">our products</Link>
      </Hero>
    </div>
  );
};

export default HomePage;
