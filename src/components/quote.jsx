import React, { Component } from "react";

class Quote extends Component {
  state= {
    quote: "on the border"
  }
  render() {
    const { quote } = this.state;
    return (
      <div>
        <p>{quote}</p>
      </div>
    );
  }
}

export default Quote;
