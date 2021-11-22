import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
