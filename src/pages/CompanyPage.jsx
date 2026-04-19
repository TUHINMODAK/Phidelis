import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CompanyHero from '../components/company/CompanyHero';
import CompanyIntro from '../components/company/CompanyIntro';
import CompanyPrinciples from '../components/company/CompanyPrinciples';
import CompanyTeam from '../components/company/CompanyTeam';
import PartnerWithUs from '../components/PartnerWithUs';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

const CompanyPage = () => {
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
      <CompanyHero />
      <CompanyIntro />
      <CompanyPrinciples />
      <CompanyTeam />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default CompanyPage;
