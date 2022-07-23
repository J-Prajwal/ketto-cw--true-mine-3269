import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import RequiredAuth from "../hoc/RequiredAuth";
import BrowseFundraiser from "./BrowseFundraiser";
import { FundraiserDetail } from "./FundraiserDetail";
import Homepage from "./Homepage";
import HowItWorks from "./HowItWorks";
import NewFundRaiser from "./NewFundRaiser";
import NewFundRaiser2 from "./NewFundRaiser2";

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
          <NewFundRaiser />
          // </RequiredAuth>
        }
      ></Route>
      <Route
        path="/crowdfunding/fundraisers/:name"
        element={<FundraiserDetail />}
      ></Route>
      <Route path="/crowdfunding" element={<HowItWorks />}></Route>
    </Routes>
  );
};

export default MainRoutes;
