// dokyu_main.tsx
import { useState, useEffect } from "react";
import { JsConceptsApp } from "../Tarea/JSconcepts";
import TravelRequests from "../../../class2/A01025119/travel_card";
import LoginEx from "../../../class2/A01025119/login_exp";
import Login from "../../../class3/A01025119/Login_page";
import TravelRequestForm from "../../../class3/A01025119/Travel_request";
import CustomLogin from "../../../class4/A01025119/customLogin";

// ——— CLASS 6 CONTEXT IMPORTS —————————————————————————————
import { UserProvider } from "../../../class6/A01025119/UserContext";
import ContextLogin from "../../../class6/A01025119/Login";
import ContextDashboard from "../../../class6/A01025119/Dashboard";
// —————————————————————————————————————————————————————————

import "./main_design.css";
import "../../../App.css";

type Page =
  | "home"
  | "class1"
  | "class2-login"
  | "class2-travel"
  | "class3"
  | "travel-request"
  | "class4"
  | "class6-login"
  | "class6-dashboard";

export const A01025119 = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const loadFromHash = () => {
      const hash = window.location.hash.replace("#", "") as Page;
      if (
        [
          "home",
          "class1",
          "class2-login",
          "class2-travel",
          "class3",
          "travel-request",
          "class4",
          "class6-login",
          "class6-dashboard",
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    loadFromHash();
    window.addEventListener("hashchange", loadFromHash);
    return () => window.removeEventListener("hashchange", loadFromHash);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
  };

  const handleLoginSuccess = (username: string) => {
    setLoggedInUser(username);
    navigateTo("travel-request");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "class1":
        return <JsConceptsApp />;
      case "class2-login":
        return <LoginEx />;
      case "class2-travel":
        return <TravelRequests />;
      case "class3":
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case "travel-request":
        return <TravelRequestForm username={loggedInUser ?? ""} />;
      case "class4":
        return <CustomLogin />;
      case "class6-login":
        return (
          <UserProvider>
            <ContextLogin />
          </UserProvider>
        );
      case "class6-dashboard":
        return (
          <UserProvider>
            <ContextDashboard />
          </UserProvider>
        );

      default:
        return (
          <div className="main-container">
            <h1 className="main-title">
              Página principal de Do Kyu (A01025119)
            </h1>

            <button
              className="main-button"
              onClick={() => navigateTo("class1")}
            >
              Class 1 Arrow Functions
            </button>
            <br />
            <button
              className="main-button"
              onClick={() => navigateTo("class2-login")}
            >
              Class 2 Login
            </button>
            <br />
            <button
              className="main-button"
              onClick={() => navigateTo("class2-travel")}
            >
              Class 2 Travel Form
            </button>
            <br />
            <button
              className="main-button"
              onClick={() => navigateTo("class3")}
            >
              Class 3 Login Authentication
            </button>
            <br />
            <button
              className="main-button"
              onClick={() => navigateTo("class4")}
            >
              Class 4 Custom Login
            </button>
            <br />
            <button
              className="main-button"
              onClick={() => navigateTo("class6-login")}
            >
              Class 6: Role-Based Login
            </button>
          </div>
        );
    }
  };

  return <>{renderPage()}</>;
};
