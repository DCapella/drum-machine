import React from "react";

import './MainDisplay.css';
import { PadDisplay } from "./constDisplay.js";


export class MainDisplay extends React.Component {
  componentDidMount(){
    document.addEventListener("keydown", this.props.keySound, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.props.keySound, false);
  }
  render() {
    return (
      <div id="main">
        <div id="drum-machine">
          <div id="pad-display">
            <PadDisplay state={this.props} />
          </div>
          <div id="display">
            <h3>Instrument:</h3>
            <div id="display-field">
              <div id="display-text">
                {this.props.instrument}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
