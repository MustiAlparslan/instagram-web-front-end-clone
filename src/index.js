import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { UserDataProvider } from "./context/userDataContext";
import { ActiveUserProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PostProvider>
          <UserDataProvider>
            <ActiveUserProvider>
              <App />
            </ActiveUserProvider>
          </UserDataProvider>
        </PostProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
