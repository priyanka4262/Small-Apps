import react, { Component } from "react";
import "./LoginForm.scss";
import { withRouter } from "react-router";
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errorMsgs: {},
    };
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push("./Registration");
  };
  validateInput = (key, value) => {
    const { errorMsgs } = this.state;
    if (key === "username") {
      if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(value)) {
        errorMsgs[key] = "";
      } else {
        errorMsgs[key] = "Please enter a valid email address!";
      }
    } else if (key === "password") {
      if (value && value?.length < 8) {
        errorMsgs[key] = "password should be greater than 8 letters";
      } else {
        errorMsgs[key] = "";
      }
    }
    this.setState({
      errorMsgs,
    });
  };
  onChangeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(
      {
        [key]: value,
      },
      () => {
        this.validateInput(key, value);
      }
    );
  };
  render() {
    const { username, password, errorMsgs } = this.state;
    console.log(this.props.location.pathname)
    console.log(this.props)
    return (
      <div className="col-4 container container-div border">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group row px-2">
            <label className="label " htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              name="username"
              value={username}
              className="form-control col-xs-4 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onChangeHandler}
            ></input>
            {errorMsgs.username && (
              <small id="emailHelp" className="form-text text-muted">
                {errorMsgs.username}
              </small>
            )}
          </div>
          <div className="form-group row px-2">
            <label className="label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control col-xs-4"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.onChangeHandler}
            ></input>
            {errorMsgs.password && (
              <small id="emailHelp" className="form-text text-muted">
                {errorMsgs.password}
              </small>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
