import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer/Footer";

const GallerySlide = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"Gallery"} pagesub={"Gallery"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default GallerySlide;
