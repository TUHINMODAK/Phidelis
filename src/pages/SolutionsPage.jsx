import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsDesigned from '../components/solutions/SolutionsDesigned';
import SolutionsAssetManagement from '../components/solutions/SolutionsAssetManagement';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

const SolutionsPage = () => {
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
      <SolutionsHero />
      <SolutionsDesigned />
      <SolutionsAssetManagement />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default SolutionsPage;
