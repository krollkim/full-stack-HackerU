import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Sandbox from "../sandbox/SandBox";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import Cards from "../cards/components/Cards";
import SANDBOX_ROUTES from "./sandboxRoutesModel";
import Loops from "../sandbox/loops/Loops"
import UseCounter from "../sandbox/useCounter/UseCounter";
import CustomName from "../sandbox/useName/CustomName";
import UseState from "../sandbox/hooks/useState/UseState";
import Events from "../sandbox/events/Events";
import LifeCycleHooks from "../sandbox/lifeCycleHooks/LifeCycleHooks";
import UseCallBackComp from "../sandbox/memozation/UseCallBackComp";
import SetPost from "../sandbox/hooks/SetPost";
import A from "../sandbox/use-context/exeTwo/components/A";
import FormTest from "../sandbox/forms/FormTest";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path={SANDBOX_ROUTES.LOOPS} element={<Loops />}/>
        <Route path={SANDBOX_ROUTES.USE_COUNTER} element={<UseCounter />}/>
        <Route path={SANDBOX_ROUTES.USE_NAME} element={<CustomName />}/>
        <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseState />}/>
        <Route path={SANDBOX_ROUTES.EVENTS} element={<Events />}/>
        <Route path={SANDBOX_ROUTES.HOOKS} element={<SetPost />}/>
        <Route path={SANDBOX_ROUTES.LIFE_CYCLE_HOOKS} element={<LifeCycleHooks />}/>
        <Route path={SANDBOX_ROUTES.USE_CALLBACK_COMP} element={<UseCallBackComp />}/> 
        <Route path={SANDBOX_ROUTES.USE_CONTEXT} element={<A />}/> 
        <Route path={SANDBOX_ROUTES.FORM_PAGE} element={<FormTest />}/> 
      </Route>
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id/:title/:url`} element={<CardDetailsPage />} />
      <Route path={ROUTES.LOGO} element={<Cards />} />
      <Route path={ROUTES.LOGOICON} element={<Cards />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;