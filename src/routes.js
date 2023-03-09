import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepsMenu from "./components/StepsMenu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <StepsMenu display='desktop'/>
    </BrowserRouter>
  );
}

export default AppRoutes;
