import React, { Component } from "react";
import * as api from "../Api";
import Popup from "reactjs-popup";
import MarketOdds from "../components/MarketOdds";
import Collapsible from "react-collapsible";

class GameMarkets extends Component {
  state = {
    markets: [],
    eventName: ""
  };
  render() {
    const { display, setOddsDisplay } = this.props;
    return (
      <div>
        <h1>Markets for {this.state.eventName}</h1>
        <Collapsible trigger="Available Markets">
          <ul>
            {this.state.markets.map(market => {
              return (
                <Popup
                  key={market.marketId}
                  trigger={<button>{market.name}</button>}
                  modal
                  closeOnDocumentClick
                >
                  <MarketOdds
                    setOddsDisplay={setOddsDisplay}
                    display={display}
                    marketId={market.marketId}
                  />
                </Popup>
              );
            })}
          </ul>
        </Collapsible>
      </div>
    );
  }

  componentDidMount() {
    const { eventId, eventName } = this.props;
    api.getEventMarkets(eventId).then(({ markets }) => {
      const marketArray = Object.values(markets);
      this.setState({ markets: marketArray[0], eventName });
    });
  }
}

export default GameMarkets;
