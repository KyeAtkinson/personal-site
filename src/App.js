import React from "react";
import Home from "./pages/Home";
import Beer from "./pages/Beer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/beer" component={Beer} />
      </Router>
    </div>
  );
};

export default App;
