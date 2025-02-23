import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ODataTable from "./components/ODataTable";
// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CategoryCard from "./components/CategoryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ODataTable />
    </>
  );
}

export default App;
