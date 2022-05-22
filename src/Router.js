import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkBox from "./components/LinkBox";
import CssParty from "./components/CssParty";

const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkBox />} />
        <Route path="/:cssItems" element={<CssParty />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Router;
