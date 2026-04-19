import React from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import HowWeCreateValue from '../components/HowWeCreateValue';
import PersonalisedSolutions from '../components/PersonalisedSolutions';
import SeasonedExperts from '../components/SeasonedExperts';
import TechnologyPowers from '../components/TechnologyPowers';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';
import DailyMarketInsight from '../components/DailyMarketInsight';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.section) {
      const el = document.getElementById(state.section);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [state]);
  
  return (
    <>
      <Navbar />
      <HomeHero />
      <HowWeCreateValue />
      <div id="solutions">
        <PersonalisedSolutions />
      </div>
      <div id="technology">
        <TechnologyPowers />
      </div>
      <DailyMarketInsight />
      <SeasonedExperts />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default HomePage;
