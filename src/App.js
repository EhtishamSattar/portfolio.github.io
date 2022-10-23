import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page from "./Components/Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page/>}/>
      </Routes>
    </>
  );
}

export default App;
