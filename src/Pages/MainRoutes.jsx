import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import RequiredAuth from "../hoc/RequiredAuth";
import BrowseFundraiser from "./BrowseFundraiser";
import { FundraiserDetail } from "./FundraiserDetail";

import Homepage from "./Homepage";
import HowItWorks from "./HowItWorks";

import NewFundRaiser2 from "./NewFundRaiser2";
import NewFundRaiser3 from "./NewFundRaiser3";
import NewCampaign from "./NewCampaign";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Homepage />
          </>
        }
      ></Route>
      <Route
        path="/crowdfunding/fundraisers/"
        element={<BrowseFundraiser />}
      ></Route>
      <Route
        path="/new/crowdfunding/type=:cat"
        element={
          // <RequiredAuth>
          <NewFundRaiser2 />
          // </RequiredAuth>
        }
      ></Route>
      <Route
        path="/crowdfunding/fundraisers/:name"
        element={<FundraiserDetail />}
      ></Route>
      <Route path="/crowdfunding" element={<HowItWorks />}></Route>
      <Route
        path="/campaign_created"
        element={
          <>
            <Header />
            <NewCampaign />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
