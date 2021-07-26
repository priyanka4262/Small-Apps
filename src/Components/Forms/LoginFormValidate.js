import react, { Component } from "react";

import validate from "validate.js";

class LoginFormValidate extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errorMsgs: {},
    };
    this.constraints = {
      username: {
        presence: {
          message: "username cannot be blank",
        },
        email: {
          message: "Please enter valid username, should be valid email",
        },
      },
      password: {
        presence: {
          message: "password cannot be blank",
        },
        length: {
          minimum: 6,
          message: "must be atleast 6 characters",
        },
      },
    };
  }

  validateInput = (field, value) => {
    console.log("field=>", field, "value=>", value);
    let object = {};
    object[field] = value;
    console.log(object, " : object after setting value in object[field]");
    let constraint = this.constraints[field];
    console.log("constraint", constraint, this.constraints[field]);
    let result = validate(object, { [field]: constraint });
    console.log(result);
    if (result) {
      return result[field][0];
    }
    return null;
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChangeHandler = (e) => {
    const { errorMsgs } = this.state;
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    let errorMsg = this.validateInput(key, value);
    errorMsgs[key] = errorMsg;
    this.setState({
      [key]: value,
      errorMsgs: errorMsgs,
    });
  };
  render() {
    const { username, password, errorMsgs } = this.state;
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
export default LoginFormValidate;
