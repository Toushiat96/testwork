import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, 
Switch, 
Route, 
Link } from "react-router-dom";

import Home from "./Components/Home/Home/Home";
import MultipleImage from "./Components/MultipleImage/MultipleImage";
import Tshirt from "./Components/Tshirt/Tshirt";
import Hello from "./Components/Hello/Hello";

function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/images">
          <MultipleImage></MultipleImage>
        </Route>
        
        <Route path="/tshirt">
          <Tshirt></Tshirt>
        </Route>
        <Route path="/hello">
        <Hello></Hello>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
