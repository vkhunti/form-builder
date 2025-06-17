import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNavBar from "./components/navbar/Navbar";
import pages from "./components/Pages";

function App() {
  const [currentPage, setCurrentPage] = useState("mainMenu");

  const templateToRender = pages[currentPage] || pages["mainMenu"];

  return (
    <>
      <GlobalNavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{templateToRender}</main>
    </>
  );
}

export default App;
