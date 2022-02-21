import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemon/:id" exact component={PokemonDetail} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
