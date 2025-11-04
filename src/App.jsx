import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./HomePage/Home"));
const NormalLogin = lazy(() => import("./pages/NormalLogin"));
const PhoneLogin = lazy(() => import("./pages/PhoneLogin"));
const OTP = lazy(() => import("./configs/OTP"));
const Contact = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./HomePage/NotFound"));
const Navbar = lazy(() => import("./components/Navbar"));
import SearchHead from "./SearchPart/SearchBy";
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
            </Layout>
          }
        />
        <Route path="/normallogin" element={<NormalLogin />} />
        <Route
          path="/otp"
          element={
            <Layout>
              <OTP />
            </Layout>
          }
        />
        <Route
          path="/Mainsearch"
          element={
            <>
              <Navbar />
              <SearchHead />
            </>
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
