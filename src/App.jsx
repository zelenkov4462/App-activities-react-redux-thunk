import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import React from "react";
import RandomPage from "./pages/RandomPage/RandomPage";
import RelaxationPage from "./pages/RelaxationPage/RelaxationPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import SocialPage from "./pages/SocialPage/SocialPage";
import CharityPage from "./pages/CharityPage/CharityPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="random" element={<RandomPage />} />
          <Route path="relaxation" element={<RelaxationPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="social" element={<SocialPage />} />
          <Route path="charity" element={<CharityPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="*" element={<RandomPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
