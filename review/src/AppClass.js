import React from "react";

class Person extends React.Component {
  componentDidUpdate() {
    console.log("Person: Component Updated");
  }

  render() {
    console.log("Person: Component Rendered");
    return(<div>
      <h1>Hello {this.props.name}</h1>
    </div>);
  }
}


class AppClass extends React.Component {
  state = {
    name:"Warren",
    showPerson: false
  }

  componentDidMount() {
    console.log("AppClass: Component Mounted.");
  }

  componentDidUpdate() {
    console.log("AppClass: Component Updated.");
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Handle Click.");
    this.setState({
      name: "Allison"
    });
  };

  render() {
    console.log("AppClass: Render Component.");
    return (
      <div>
        {
          (this.state.showPerson === true)?<Person name={this.state.name}/>:<div></div>
        }
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
