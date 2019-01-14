import React, { Component } from "react";
import * as api from "../Api";
// import { Link } from "@reach/router";
import GameMarkets from "../components/GameMarkets";

class LiveGames extends Component {
  state = {
    events: []
  };
  render() {
    const { display, setOddsDisplay } = this.props;
    return (
      <div>
        <ul>
          {this.state.events.map(event => {
            return (
              <GameMarkets
                key={event.eventId}
                display={display}
                eventId={event.eventId}
                eventName={event.name}
                setOddsDisplay={setOddsDisplay}
              >
                {event.name}
              </GameMarkets>
              // <Link
              //   key={event.eventId}
              //   to={`football/${event.eventId}/markets`}
              // >
              //   {event.name}
              // </Link>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    api.getLiveGames().then(({ events }) => {
      this.setState({ events });
    });
  }
}

export default LiveGames;
