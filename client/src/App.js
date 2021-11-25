import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Recipe from "./components/recipeDetail/Recipe.jsx";
import Create from "./components/create/Create";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Nav} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/recipe/:id" component={Recipe} />
      <Route exact path="/home/create" component={Create} />
    </div>
  );
}

export default App;
