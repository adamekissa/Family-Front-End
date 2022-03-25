import './index.css';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./Components/Routes/Expenses/index.js"
import Invoices from "./Components/Routes/Invoices/index.js"
import Profile from "./Components/Routes/Profile/index.js"


ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-9spka-3p.us.auth0.com"
    clientId="1v1bgbjzn5msa5HoKUsXaR9UwfxtCLHR"
    redirectUri={window.location.origin}
  >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
