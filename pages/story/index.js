import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Navbar2 from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import StorySection from "../../components/StorySection/StorySection";

const StoryPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"Our Story"} pagesub={"Story"} />
      <StorySection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default StoryPage;
