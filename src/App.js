import React, { Component } from "react";
import "./App.css";
import {ContainerListItem} from "./ContainerListItem.js"
const dataBase = {containerList:["MSCU 123 456-9","MSCU 123 456-8","MSCU 123 456-7","MSCU 123 456-5"]}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="form-body">
            <div className="header-row">
              <div>VGM Submission</div>
              <div className="header-right">
                <div>Not Started</div>
                <button className="dismiss-button">X</button>
              </div>
            </div>

            <div className="radio-control">
              <input type="radio" />
              I have submitted the verified gross weight to the carrier for the
              below selected container(s).
            </div>
            {dataBase.containerList.map(containerNumber =>
              <ContainerListItem containerNumber={containerNumber}/>
              )}
          </div>
          <div className="footer-row">
            <button>Complete</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
