import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Nav} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
