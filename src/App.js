import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/services/Services";
import ProjectsNew from "./components/projects/projectsNew";
import Team from "./components/team/Team";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";
import HeaderNavs from "./components/headerNavs/HeaderNavs";
import NavbarToggle from "./components/navbarWithToggle/NavbarToggle";
import MainBack from "./components/mainBackground/Mainback";
import JustForTest from "./components/timeline/justForTest";
import Dialog from "./components/dialog/Dialog";
const App = () => {
  return (
    <div className="App">
      {/* <Dialog /> */}
      <HeaderNavs />
      <Navbar />
      <NavbarToggle />
      <MainBack />
      <Services />
      <ProjectsNew />
      <JustForTest />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
