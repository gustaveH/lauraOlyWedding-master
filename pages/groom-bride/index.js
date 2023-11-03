import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import Navbar2 from "../../components/Navbar";
import Footer from "../../components/footer/Footer";

const BrideGroomPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"Bridesmaids & Groomsmen"} pagesub={"Bridesmaids & Groomsmen"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default BrideGroomPage;
