import react, { Component } from "react";
class FilterData extends Component {
  constructor() {
    super();
  }
  onChangeHandler = (e) => {
    e.preventDefault();
    this.props.onSearchText(e.target.value);
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Enter ID/Text to filter"
          className="form-control text-field"
          onChange={(e) => this.onChangeHandler(e)}
        ></input>
      </>
    );
  }
}

export default FilterData;
