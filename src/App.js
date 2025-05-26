import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/sidebar";
import AppNav from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import DetailMakanan from "./pages/detailMakanan";
import Landing from "./pages/landingPage/landingPage";
import DashboardPage from "./pages/dashboard-page";
import DietPage from "./pages/menu/diet-page";
import BulkingPage from "./pages/menu/bulking-page";
import MaintenancePage from "./pages/menu/maintenance-page";
import FormPersonality from "./pages/FormPersonality";
import DataDiriForm from "./pages/DataDiriForm";
import UploadMakanan from "./pages/UploadMakanan";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isAuthPage = ["/login", "/register", "/forgot-password"].includes(
    location.pathname
  );

  return (
    <div className="App">
      {!isAuthPage && <AppNav toggleSidebar={toggleSidebar} />}
      {!isAuthPage && <Sidebar isOpen={sidebarOpen} />}
      <div className={`content ${sidebarOpen ? "content-shifted" : ""}`}>
        {children}
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/login"
        element={
          <LayoutWrapper>
            {" "}
            <Login />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <LayoutWrapper>
            {" "}
            <Register />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <LayoutWrapper>
            {" "}
            <ForgotPassword />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/detailMakanan"
        element={
          <LayoutWrapper>
            {" "}
            <DetailMakanan />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/dashboard"
        element={
          <LayoutWrapper>
            {" "}
            <DashboardPage />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/diet"
        element={
          <LayoutWrapper>
            {" "}
            <DietPage />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/bulking"
        element={
          <LayoutWrapper>
            {" "}
            <BulkingPage />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/maintenance"
        element={
          <LayoutWrapper>
            {" "}
            <MaintenancePage />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/form-personality"
        element={
          <LayoutWrapper>
            {" "}
            <FormPersonality />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/data-diri"
        element={
          <LayoutWrapper>
            {" "}
            <DataDiriForm />{" "}
          </LayoutWrapper>
        }
      />
      <Route
        path="/foto-makanan"
        element={
          <LayoutWrapper>
            {" "}
            <UploadMakanan />{" "}
          </LayoutWrapper>
        }
      />

      {/* Not found route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <AppRoutes />
    </Router>
  );
}

export default App;
