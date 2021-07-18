import react, { Component } from "react";
class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      mobileNum: "",
      address: "",
      errorMsgs: {},
      gender: "female",
      course: "",
    };
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  validateInput = (key, value) => {
    const { errorMsgs } = this.state;
    if (key === "username") {
      if (value?.length > 10) {
        errorMsgs[key] = "Username length should be less than 10 characters!";
      } else {
        errorMsgs[key] = "";
      }
    } else if (key === "mobileNum") {
      if (value?.length === 10) {
        errorMsgs[key] = "";
      } else {
        errorMsgs[key] = "Mobile number should be 10 numbers";
      }
    } else if (key === "address") {
      if (value?.length > 10) {
        errorMsgs[key] = "address should be less than 10 characters";
      } else errorMsgs[key] = "";
    } else if (key == "course") {
      if (value == "Select") {
        errorMsgs[key] = "please select another option";
      } else {
        errorMsgs[key] = "";
      }
    }
    this.setState({
      errorMsgs,
    });
  };

  onChangeHandler = (e) => {
    e.stopPropagation();
    console.log(e);
    let key = e.target.name;
    let value = e.target.value;
    console.log(e.target.value);
    console.log(e.target.name);
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
    const { username, mobileNum, address, course, errorMsgs } = this.state;
    return (
      <div className="col-4 container container-div border">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group row px-2">
            <label className="label " htmlFor="exampleInputEmail1">
              Name
            </label>
            <input
              type="text"
              name="username"
              value={username}
              className="form-control col-xs-4 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
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
              Mobile Number
            </label>
            <input
              name="mobileNum"
              className="form-control col-xs-4"
              value={mobileNum}
              id="exampleInputPassword1"
              placeholder="Mobile Number"
              onChange={this.onChangeHandler}
            ></input>
            {errorMsgs.mobileNum && (
              <small id="emailHelp" className="form-text text-muted">
                {errorMsgs.mobileNum}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Address</label>
            <textarea
              name="address"
              className="form-control"
              value={address}
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={this.onChangeHandler}
            ></textarea>
            {errorMsgs.address && (
              <small id="emailHelp" className="form-text text-muted">
                {errorMsgs.address}
              </small>
            )}
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label">Gender</label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="inlineRadio1"
              onChange={this.onChangeHandler}
              checked={this.state.gender === "male"}
              value="male"
            ></input>
            <label className="form-check-label" htmlFor="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="inlineRadio2"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.onChangeHandler}
            ></input>
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
          <label>
            Course:
            <select
              name="course"
              onChange={this.onChangeHandler}
              value={course}
            >
              <option value="Select">Select</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="React">React</option>
              <option value="Django">Django</option>
            </select>
          </label>
          {errorMsgs.course && (
            <small id="emailHelp" className="form-text text-muted">
              {errorMsgs.course}
            </small>
          )}
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Course
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item dropdown-toggle"
                href="#"
                role="button"
              >
                React
              </a>
              <a className="dropdown-item" href="#">
                Angular
              </a>
              <a className="dropdown-item" href="#">
                Vue
              </a>
            </div>
          </div> */}

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            onSubmit={this.onSubmitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
