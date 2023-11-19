import React from "react";
import PageTitle from "../../components/pagetitle";
import ThankYouRSVP from "../../components/404";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar";

const StoryPage = (props) => {
  return (
    <div>
      <PageTitle pageTitle={"404"} pagesub={"404"} />
      <ThankYouRSVP />
      <Footer />
      <Scrollbar />
    </div>
  );
};
export default StoryPage;
