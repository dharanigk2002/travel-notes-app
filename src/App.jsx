import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner.jsx";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

// dist/assets/index-DS3y2oRJ.css   30.05 kB │ gzip:   5.07 kB
// dist/assets/index-Dvm6pE_R.js   508.65 kB │ gzip: 148.69 kB

// After dynamic loading jS file size:102 kB

function App() {
  return (
    <AuthContextProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthContextProvider>
  );
}

export default App;
