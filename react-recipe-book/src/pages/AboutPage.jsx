import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import GitHubLogo from "../assets/gitHubLogo2.png"
import LinkedinLogo from "../assets/linkedinlogo2.png"


function AboutPage() {
  return (
    <div className="about">
   
      <h1> Meet our chefs! </h1>
      <div className="about-container">
        <br />
      <h2>Patricia Nieto</h2>

      <a href="https://github.com/PatriNieto"> <img src={GitHubLogo} alt="gitHubLogo" className="idLogo"/> </a>
      <a href="https://www.linkedin.com/in/patricia-nieto-madro%C3%B1ero/"><img src={LinkedinLogo} alt="linkedingLogo" className = "idLogo2" /></a>

      <h2>Malu Dietrich</h2>

      <a href="https://github.com/Malu888"> <img src={GitHubLogo} alt="gitHubLogo" className="idLogo"/></a>
      <a href="https://www.linkedin.com/in/mal%C3%BA-dietrich-0b3b83292/"><img src={LinkedinLogo} alt="linkedingLogo" className = "idLogo2" /></a>

      <h2>Pedro Perez</h2>

      <a href="https://github.com/plperezp"> <img src={GitHubLogo} alt="gitHubLogo" className="idLogo"/> </a>
      <a href="https://www.linkedin.com/in/pedro-luis-perez-piris-66aa30165/"><img src={LinkedinLogo} alt="linkedingLogo" className = "idLogo2" /></a>
      </div>
    </div>
  );
}

export default AboutPage;
