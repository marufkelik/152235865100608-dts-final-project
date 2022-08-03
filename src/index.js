import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ProtectedComponent from "./Validation/ProtectedComponent";
import ProtectedComponentSignUp from "./Validation/ProtectedComponen2";
import DetailNews from "./Components/NewsDetail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route
          path="*"
          element={
            <main>
              <h3>404 - Page not found !</h3>
            </main>
          }
        />
        <Route
          path="/"
          element={ <App />}  />
          {/* <Route
          path="Education"
          element={ <Education />}  /> */}
        <Route path="login" element={
        <ProtectedComponent>
        <LoginPage />
        </ProtectedComponent>
        } />
        <Route path="signup" element={
           <ProtectedComponentSignUp>
        <SignUpPage />
        </ProtectedComponentSignUp>
        } />
        <Route
          path="detail_News/:idNews"
          element={
            <ProtectedComponent>
              <DetailNews />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
