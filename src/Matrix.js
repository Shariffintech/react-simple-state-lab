import React, { Component } from "react";
import Cell from "./Cell";
import {pattern1} from "./data";

export default class Matrix extends Component {
  genRow = (val) => {
    return <Cell value={val} />;
  };

  genMatrix = () => {
    return this.props.values.map((rowVals) => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: pattern1
};
