import react, { Component } from "react";
class FilterData extends Component {
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
          onChange={this.onChangeHandler}
        ></input>
      </>
    );
  }
}

export default FilterData;
