import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <h1>Multi-steppp</h1>
    </BrowserRouter>
  );
}

export default AppRoutes;
