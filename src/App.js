import React from "react";
import Home from "./pages/Home";
import Coffee from "./pages/coffee";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/coffee" component={Coffee} />
      </Router>
    </div>
  );
};

export default App;
