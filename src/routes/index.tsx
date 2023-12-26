import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../views/Pokedex"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading...</div>}>  {/*Ampliarme lo que necesite en el Loading*/}
          <Pokedex />
        </React.Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;