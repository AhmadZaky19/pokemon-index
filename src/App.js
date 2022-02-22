import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/" element={<PokemonDetail />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
