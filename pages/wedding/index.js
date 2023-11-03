import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Navbar2 from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import CoupleSection from "../../components/CoupleSection/CoupleSection";
import EventSection from "../../components/EventSection/EventSection";

import Scrollbar from "../../components/scrollbar";

const WeddingPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"The Wedding"} pagesub={"Wedding"} />
      <CoupleSection />
      <EventSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default WeddingPage;
