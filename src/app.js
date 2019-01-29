import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import "./styles/reset.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
