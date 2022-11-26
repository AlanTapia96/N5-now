import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import "./index.scss";
import { Provider } from "react-redux";
import NotifContextProvider from "./components/context/NotifContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotifContextProvider>
        <App />
      </NotifContextProvider>
    </Provider>
  </React.StrictMode>
);
