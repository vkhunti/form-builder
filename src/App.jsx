import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalNavBar from "./components/navbar/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <GlobalNavBar/>
      <h1>This is a form builder!</h1>
    </>
  );
}

export default App;
