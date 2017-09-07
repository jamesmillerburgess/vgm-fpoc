import React, { Component } from "react";
import "./App.css";

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
            <div className="container-list-item">
              <input type="checkbox" />
              MSCU 123 456 -9
            </div>
            <div className="container-list-item">
              <input type="checkbox" />
              MSCU 123 456 -8
            </div>
            <div className="container-list-item">
              <input type="checkbox" />
              MSCU 123 456 -7
            </div>
            <div className="container-list-item">
              <input type="checkbox" />
              MSCU 123 456 -0
            </div>
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
