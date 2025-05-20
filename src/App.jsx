import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNavBar from "./components/navbar/Navbar.jsx";
import MainMenu from "./components/mainMenu/MainMenu.jsx";
import HPPromoBtnRight from "./components/HP-Promo-btn-1-right/HP-Promo-btn-1-right.jsx";

function App() {

  const [mainMenu, setMainMenu] = useState(true)
  
  return (
    <>
      <GlobalNavBar />
      <button onClick={() => { setMainMenu(!mainMenu) }}>Click!</button>
      {(() => {
            if (mainMenu) {
              return <MainMenu />;
            } else {
              return <HPPromoBtnRight />;
            }
          })()}
    </>
  );
}

export default App;
