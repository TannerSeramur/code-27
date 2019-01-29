import React from "react";
import "./styles/counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButtonSubtract = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="Counter">
        <div className="count-container">
          <button className="btn1" onClick={this.handleButtonSubtract}>
            -
          </button>
          <h4 className={this.state.counter >= 0 ? "green" : "red"}>
            {this.state.counter}
          </h4>
          <button className="btn2" onClick={this.handleButtonClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
