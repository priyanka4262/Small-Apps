import react, { Component } from "react";
import validate from "validate.js";
class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mobileNum: "",
      address: "",
      errorMsgs: {},
      gender: "female",
      course: "",
    };
    this.constraints = {
      name: {
        presence: {
          message: "Name cannot be blank",
        },
        length: {
          maximum: 20,
          message: "Name should not be greater than 20 chars",
        },
      },
      mobileNum: {
        presence: {
          message: "Mobile number cannot be blank",
        },
        length: {
          maximum: 10,
          message: "mobile number should be 10 numbers",
        },
      },
      address: {
        presence: {
          message: "Address cannot be blank",
        },
        length: {
          maximum: 20,
          message: "Address should be maximum of 20 characters",
        },
      },
      course: {
        presence: {
          message: "course should be selected",
        },
        length: {
          minimum: 1,
          message: "course is a required field",
        },
      },
    };
  }

  // validateInput = (key, value) => {
  //   const { errorMsgs } = this.state;
  //   if (key === "username") {
  //     if (value?.length > 10) {
  //       errorMsgs[key] = "Username length should be less than 10 characters!";
  //     } else {
  //       errorMsgs[key] = "";
  //     }
  //   } else if (key === "mobileNum") {
  //     if (value?.length === 10) {
  //       errorMsgs[key] = "";
  //     } else {
  //       errorMsgs[key] = "Mobile number should be 10 numbers";
  //     }
  //   } else if (key === "address") {
  //     if (value?.length > 10) {
  //       errorMsgs[key] = "address should be less than 10 characters";
  //     } else errorMsgs[key] = "";
  //   } else if (key == "course") {
  //     if (value == "Select") {
  //       errorMsgs[key] = "please select another option";
  //     } else {
  //       errorMsgs[key] = "";
  //     }
  //   }
  //   this.setState({
  //     errorMsgs,
  //   });
  // };

  // onChangeHandler = (e) => {
  //   e.stopPropagation();
  //   console.log(e);
  //   let key = e.target.name;
  //   let value = e.target.value;
  //   console.log("value=>", e.target.value);
  //   console.log("name->", e.target.name);
  //   this.setState(
  //     {
  //       [key]: value,
  //     },
  //     () => {
  //       this.validateInput(key, value);
  //     }
  //   );
  // };
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
    let value = e.target.value === "Select" ? undefined : e.target.value;

    let errorMsg = this.validateInput(key, value);
    console.log(value);
    errorMsgs[key] = errorMsg;
    this.setState({
      [key]: value,
      errorMsgs: errorMsgs,
    });
  };

  render() {
    const { name, mobileNum, address, course, errorMsgs } = this.state;
    return (
      <div className="col-4 container container-div border">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group row px-2">
            <label className="label " htmlFor="exampleInputEmail1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control col-xs-4 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={this.onChangeHandler}
            ></input>
            {errorMsgs.name && (
              <small id="emailHelp" className="form-text text-muted">
                {errorMsgs.name}
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

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Course</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="course"
              onChange={this.onChangeHandler}
              value={course}
            >
              <option>Select</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="React">React</option>
              <option value="Django">Django</option>
            </select>
          </div>
          {errorMsgs.course && (
            <small id="emailHelp" className="form-text text-muted">
              {errorMsgs.course}
            </small>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-submit"
            onSubmit={this.onSubmitHandler}
            disabled={!name || !mobileNum}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
