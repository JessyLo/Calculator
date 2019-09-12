import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import StartPage from "./components/start-page/start-page";
import Calculator from "./components/calculator/calculator";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={StartPage} />
        <Route exact path="/calculator" component={Calculator} />
      </div>
    </HashRouter>
  );
}

export default App;
