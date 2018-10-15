import React from "react";

import { letterToSound } from "../const/index.js";


export const PadDisplay = (props) => {
  return (
    <div>
      {props.state.rows.map((row, index) => {
        let tempRow = props.state.rowIndex[index];
        return (
          <div id={tempRow} key={index}>
            {row.map((item, j) => {
              let id = "drum-pad-" + j;
              return (
                <button className="drum-pad btn-custom" onClick={props.state.middleMan} value={item} key={j} id={id}>
                  <audio src={letterToSound[item]} id={item} className="clip" />
                  {item}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
