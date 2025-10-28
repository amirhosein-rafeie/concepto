import React from "react";
import Landing from "./Landing";
import Statistics from "./Statistics";
import LandingCard from "./LandingCard";
import Famous from "./Famous";
import News from "./News.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Landing />
      <Statistics />
      <LandingCard />
      <Famous />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
