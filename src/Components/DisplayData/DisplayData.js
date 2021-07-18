import react, { Component } from "react";
import DisplayList from "./DisplayList";
import FilterData from "./FilterData";
class DisplayData extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      posts: [
        { id: 1, title: "Hello World", content: "Welcome to learning React!" },
        {
          id: 2,
          title: "Installation",
          content: "You can install React from npm.",
        },
        {
          id: 3,
          title: "Bootstrap",
          content: "Features numerous HTML and CSS templates for UI",
        },
        {
          id: 4,
          title: "sass",
          content: " allows you to create style sheets faster",
        },
        {
          id: 5,
          title: "React",
          content: "Developed by facebook",
        },
        {
          id: 6,
          title: "lists and rendering",
          content: "Can be done using map function",
        },
      ],
    };
  }
  onSearchHandler = (searchText) => {
    this.setState({
      searchText,
    });
  };

  render() {
    return (
      <div>
        <FilterData onSearchText={this.onSearchHandler}></FilterData>
        <DisplayList
          postList={this.state.posts}
          searchText={this.state.searchText}
        ></DisplayList>
      </div>
    );
  }
}
export default DisplayData;
