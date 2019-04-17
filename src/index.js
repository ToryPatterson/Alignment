import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Alignment from "./Alignment";
import ChangeColor from "./ChangeColor";
import Clock from "./Clock";
import Counter from "./Counter";
import FontSizer from "./FontSizer";
import Toggle from "./Toggle";
import NavBar from "./navbar";
import Index from "./index";
//import Home from "./home";

import "./styles.css";

function App() {
  return (
    <div className="index">
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/Align" component={Alignment} />
            <Route path="/ChangeColor" component={ChangeColor} />
            <Route path="/Clock" component={Clock} />
            <Route path="/Counter" component={Counter} />
            <Route path="/FontSizer" component={FontSizer} />
            <Route path="/Toggle" component={Toggle} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
