import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardDesign from "./pages/DashboardDesign";
import ResourcesPage from "./pages/ResourcesPage";
import ProfitSplitPage from "./pages/ProfitSplitPage";
import DashboardSignUpPage from "./pages/DashboardSignUpPage";
import DashboardLoginPage from "./pages/DashboardLoginPage";
import RequestAPayoutPage from "./pages/RequestAPayoutPage";
import DailyReportPage1 from "./pages/DailyReportPage1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/resources-page":
        title = "";
        metaDescription = "";
        break;
      case "/profit-split-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-login-page":
        title = "";
        metaDescription = "";
        break;
      case "/request-a-payout-page":
        title = "";
        metaDescription = "";
        break;
      case "/daily-report-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DashboardDesign />} />
      <Route path="/resources-page" element={<ResourcesPage />} />
      <Route path="/profit-split-page" element={<ProfitSplitPage />} />
      <Route path="/dashboard-sign-up-page" element={<DashboardSignUpPage />} />
      <Route path="/dashboard-login-page" element={<DashboardLoginPage />} />
      <Route path="/request-a-payout-page" element={<RequestAPayoutPage />} />
      <Route path="/daily-report-page" element={<DailyReportPage1 />} />
    </Routes>
  );
}
export default App;
