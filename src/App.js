import React, { Component } from "react";
import "./App.css";
import { ContainerListItem } from "./ContainerListItem.js";
const dataBase = {
  containerList: [
    "MSCU 123 456-9",
    "MSCU 123 456-8",
    "MSCU 123 456-7",
    "MSCU 123 456-5"
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state={taskStatus:"not started",isContainerChecked:[false,false,false,false],
  isContainerSubmitted:[false,false,false,false]}
  }
  handleSubmit() {
    //loop over containers
    //check if container is checked
    //update state is container submitted
  }
  handleCheck(isChecked, index) {
    const newState =this.state.isContainerChecked.slice()
    newState[index]=isChecked
    this.setState({isContainerChecked: newState})
    console.log(newState)
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="form-body">
            <div className="header-row">
              <div>VGM Submission</div>
              <div className="header-right">
                <div>{this.state.taskStatus}</div>
                <button className="dismiss-button">X</button>
              </div>
            </div>

            <div className="radio-control">
              <input type="radio" />
              I have submitted the verified gross weight to the carrier for the
              below selected container(s).
            </div>
            {dataBase.containerList.map((containerNumber, index) => (
              <ContainerListItem
                containerNumber={containerNumber}
                isSubmitted={this.state.isContainerSubmitted[index]}
                onChange={isChecked => this.handleCheck(isChecked, index)}
                isChecked={this.state.isContainerChecked[index]}
              />
            ))}
          </div>
          <div className="footer-row">
            <button onClick={this.handleSubmit}>Complete</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
