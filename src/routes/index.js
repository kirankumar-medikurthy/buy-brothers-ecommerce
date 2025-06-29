import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../components/Homepage"));
const ProductLandingPage = lazy(() =>
  import("../components/ProductLandingPage")
);
const ProductDescriptionPage = lazy(() =>
  import("../components/ProductDescriptionPage")
);
const NotFound = lazy(() => import("../components/NotFoundPage"));

const Profile = lazy(()=>import("../components/Profile"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:category" element={<ProductLandingPage />} />
      <Route path="/product/:productId" element={<ProductDescriptionPage />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
