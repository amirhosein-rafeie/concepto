import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import FilterBox from "./components/FilterBox";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./HomePage/Home"));
const NormalLogin = lazy(() => import("./pages/NormalLogin"));
const PhoneLogin = lazy(() => import("./pages/PhoneLogin"));
const OTP = lazy(() => import("./configs/OTP"));
const Contact = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./HomePage/NotFound"));
import MainSearch from "./SearchPart/MainSearch";
import AdvisorSearch from "./SearchPart/InvestorSearch";
import Mainsearch from "./components/Mainsearch";

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen text-gray-600">
    <span className="animate-pulse">در حال بارگذاری...</span>
  </div>
);

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/phonelogin" element={<PhoneLogin />} />
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
            path="/companies"
            element={
              <Layout>
                <MainSearch />
              </Layout>
            }
          />
          <Route
            path="/Mainsearch"
            element={
              <Layout>
                <Mainsearch />
              </Layout>
            }
          />
          <Route
            path="/investors"
            element={
              <Layout>
                <AdvisorSearch />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
