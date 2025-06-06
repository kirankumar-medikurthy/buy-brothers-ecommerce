import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../components/Homepage"));
const ProductLandingPage = lazy(() =>
  import("../components/ProductLandingPage")
);
const NotFound = lazy(() => import("../components/NotFoundPage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductLandingPage />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
