import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import List from "./components/List";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom";
import React from "react";
import DashboardPage from "./pages/DashboardPage";

function App() {

  return (
    <>
      <div className="container">
        <div className="subcontainer">
          <NavBar />
          <SideBar />
          
          <Footer url={`https://github.com/PatriNieto/react-recipe-book.git`} />
        
        </div>
        

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/itemdetails/:recipeId" element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
