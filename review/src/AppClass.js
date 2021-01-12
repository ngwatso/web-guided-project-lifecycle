import React from "react";

class AppClass extends React.Component {
  constructor() {
    console.log("AppClass: Setup State.");
    super();
    this.state = {
      name: "Warren"
    };
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Handle Click.");
    this.setState({
      name: "Allison"
    });
  };

  render() {
    console.log("AppClass: Render component.");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
