import React from "react";
import Footer from "../../molecules/Footer";
import Header from "../../organisms/Header";
import MainContent from "../../organisms/MainContent";
import TemplateHomePage from "../../templates/HomePageTemplate";

const HomePage = () => {
  return (
    <TemplateHomePage
      header={<Header />}
      content={<MainContent />}
      footer={
        <Footer
          text1="Home"
          text2="Contact us"
          text3="Privacy policy"
          text4="Terms & conditions"
        />
      }
    />
  );
};

export default HomePage;
