import React, { Component } from "react";

class OddsDisplayChoice extends Component {
  //   state = {
  //     display: ""
  //   };
  render() {
    const { display } = this.props;
    return (
      <div>
        <h1>Show Odds in...</h1>
        <button
          value="decimal"
          disabled={display === "decimal"}
          onClick={this.onClick}
        >
          Decimals
        </button>
        <button
          value="fraction"
          disabled={display === "fraction"}
          onClick={this.onClick}
        >
          Fractions
        </button>
      </div>
    );
  }

  //   componentDidMount() {
  //     const { display } = this.props;
  //     this.setState({ display });
  //   }

  onClick = event => {
    const { value } = event.target;
    this.props.setOddsDisplay(value);
  };
}

export default OddsDisplayChoice;
