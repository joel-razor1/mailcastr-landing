import React, { Component } from "react";

import MainPage from "./Components/MainPage/MainPage";
import Individual from "./Components/Individual/Individual";
import Team from "./Components/Team/Team";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="trial">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/individual" component={Individual} />
              <Route path="/team" component={Team} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
