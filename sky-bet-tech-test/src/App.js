import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
// import * as api from "../api";
import LiveGames from "./components/LiveGames";
import GameMarkets from "./components/GameMarkets";
import OddsDisplayChoice from "./components/OddsDisplayChoice";

class App extends Component {
  state = {
    display: "decimal"
  };
  render() {
    const { display } = this.state;
    return (
      <div className="App">
        <h1>Welcome To SkyBet</h1>
        <OddsDisplayChoice
          display={display}
          setOddsDisplay={this.setOddsDisplay}
        />
        <LiveGames
          display={display}
          setOddsDisplay={this.setOddsDisplay}
          path="football/live"
        />
        <Router>
          <GameMarkets display={display} path="football/:eventId/markets" />
        </Router>
      </div>
    );
  }

  setOddsDisplay = display => {
    this.setState({ display });
  };
}

export default App;
