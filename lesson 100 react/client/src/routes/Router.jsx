import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Sandbox from "../sandbox/SandBox";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../users/pages/CardDetailsPage";
import Cards from "../cards/components/Cards";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SANDBOX} element={<Sandbox />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id/:title/:url`} element={<CardDetailsPage />} />
      {/* <Route path={ROUTES.EDIT} element={<EDIT_USER />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.FAV_CARDS} element={<Favorite />} /> */}
      <Route path={ROUTES.LOGO} element={<Cards />} />
      <Route path={ROUTES.LOGOICON} element={<Cards />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;