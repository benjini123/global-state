import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

const root = createRoot(document.querySelector(".root"));
root.render(<App />);
