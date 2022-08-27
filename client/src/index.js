import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { GlobalProvider } from "./globalContext";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </GlobalProvider>
  </React.StrictMode>
);
