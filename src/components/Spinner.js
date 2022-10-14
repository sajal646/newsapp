import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <>
        {/* <div className="lds-facebook"><div></div><div></div><div></div></div> */}
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </>
    );
  }
}
