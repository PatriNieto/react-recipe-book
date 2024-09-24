import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import imgChicote from "../assets/chicote.webp";
import { useEffect } from "react";

function NotFoundPage() {
  return (
    <div className="error-page-container">
      <h3>404 en la cocina</h3>
      <p>¡Oh no! No encontramos la receta...</p>
      <p>
        Parece que algo se quemó en la cocina. No pudimos encontrar la página
        que buscabas, pero ¡no te preocupes! A veces, incluso los mejores chefs
        se equivocan.
      </p>

      <img src={imgChicote} alt="" />
    </div>
  );
}

export default NotFoundPage;
