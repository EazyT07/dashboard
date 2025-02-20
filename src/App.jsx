import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/ODataTable";
// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
    </>
  );
}

export default App;
