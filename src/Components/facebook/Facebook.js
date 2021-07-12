import react, { Component } from "react";
import "./Facebook.css";

class Facebook extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="container">
          <div class="text-div">
            <label className="fb-title">facebook</label>
            <p className="fb-description">
              Facebook helps you connect and share with the people in life
            </p>
          </div>
          <div>
            <div className="login-form">
              <input
                className="user-details"
                type="text"
                placeholder="Email address or phone number"
              ></input>
              <input
                className="user-details"
                type="text"
                placeholder="Password"
              ></input>
              <button className="login-button">Log In</button>
              <span className="forgot-pwd">Forgotten password?</span>
              <hr className="line`"></hr>
              <button className="create-button">Create New Account</button>
            </div>
            <div>
              <label className="text">
                Create a page for a celebrity , brand or business
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Facebook;
