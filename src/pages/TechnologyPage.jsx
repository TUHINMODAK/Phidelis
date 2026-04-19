import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TechnologyHero from '../components/technology/TechnologyHero';
import TechnologyTransparent from '../components/technology/TechnologyTransparent';
import TechnologyFeatures from '../components/technology/TechnologyFeatures';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

const TechnologyPage = () => {
  // Ensure the page scrolls to top on initial load
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
      <TechnologyHero />
      <TechnologyTransparent />
      <TechnologyFeatures />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default TechnologyPage;
