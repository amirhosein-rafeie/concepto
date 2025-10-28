import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SearchHead from "./SearchPart/SearchBy";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./HomePage/CategoriesHome"));
const NormalLogin = lazy(() => import("./pages/NormalLogin"));
const PhoneLogin = lazy(() => import("./pages/PhoneLogin"));
const OTP = lazy(() => import("./configs/OTP"));
const Contact = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./HomePage/NotFound"));

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen text-gray-600">
    <span className="animate-pulse">در حال بارگذاری...</span>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
              <SearchHead />
            </Layout>
          }
        />
        <Route
          path="/normallogin"
          element={
            <Layout>
              <NormalLogin />
            </Layout>
          }
        />
        <Route
          path="/phonelogin"
          element={
            <Layout>
              <PhoneLogin />
            </Layout>
          }
        />
        <Route
          path="/otp"
          element={
            <Layout>
              <OTP />
            </Layout>
          }
        />

        <Route
          path="/contactus"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
