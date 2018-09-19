import React from "react";
import { connect } from "react-redux";

import { MainDisplay } from "../components/MainDisplay.js";


class App extends React.Component {
  render() {
    return (
      <MainDisplay />
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(App);
