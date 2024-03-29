import react, { Component } from "react";
import { withRouter } from "react-router";
import "./VoteComponent.css";

class VoteComponent extends Component {
  constructor() {
    super();
    // this.onSubmitHandler = this.onSubmitHandler.bind(this);
    // this.onAgeChange = this.onAgeChange.bind(this);
    this.state = {
      greeting: "",
    };
    this.state = {
      age: "",
    };
  }

  onAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  onSubmitHandler = (age) => {
    if (this.state.age < 18) {
      this.setState({
        greeting: "You are not eligible to vote!",
      });
    } else if (this.state.age >= 18) {
      this.setState({
        greeting: "You are eligible to vote!",
      });
    }
    console.log("value updated");
  };
  render() {
    console.log(this.props);
    return (
      <div className="vote-container">
        <input
          name="userage"
          className="age-field"
          type="text"
          placeholder="Enter your age"
          onChange={this.onAgeChange}
        ></input>
        <button
          className="submit-btn"
          type="submit"
          onClick={this.onSubmitHandler}
        >
          Submit
        </button>
        <p className="greeting">{this.state.greeting}</p>
      </div>
    );
  }
}

export default withRouter(VoteComponent);
