import React, { Component } from "react";
import * as api from "../Api";
import OddsDisplayChoice from "./OddsDisplayChoice";

class MarketOdds extends Component {
  state = {
    potentialOutcomes: []
  };
  render() {
    const { potentialOutcomes } = this.state;
    const { display, setOddsDisplay } = this.props;
    return (
      <div>
        <OddsDisplayChoice setOddsDisplay={setOddsDisplay} />
        {potentialOutcomes.map(potentialOutcome => {
          return (
            <ul key={potentialOutcome.outcomeId}>
              {display === "decimal" ? (
                <li>
                  {potentialOutcome.name}: {potentialOutcome.price.decimal}
                </li>
              ) : (
                <li>
                  {potentialOutcome.name}: {potentialOutcome.price.num}/
                  {potentialOutcome.price.den}
                </li>
              )}
            </ul>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const { marketId } = this.props;
    api.getMarketOdds(marketId).then(({ outcomes }) => {
      const potentialOutcomes = Object.values(outcomes);
      this.setState({ potentialOutcomes: potentialOutcomes[0] });
    });
  }
}

export default MarketOdds;
