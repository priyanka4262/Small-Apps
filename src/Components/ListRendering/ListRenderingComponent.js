import { post } from "jquery";
import react, { Component } from "react";
import "./ListRenderingComponent.css";
class ListRenderingComponent extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      text: "",
    };
    this.state = {
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
      displayPosts: [],
    };
    this.state.displayPosts = this.state.posts;
  }
  //Filter By ID
  onChangeHandler = (event) => {
    //console.log(event.target.value == []);
    let newPostsList = [];
    if (event.target.value == []) {
      newPostsList = this.state.posts;
    } else {
      newPostsList = this.state.displayPosts.filter(
        (post) =>
          post.id == event.target.value ||
          post.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
          post.content.toLowerCase().includes(event.target.value.toLowerCase())
      );
    }
    //console.log(newPostsList);
    this.setState({
      displayPosts: newPostsList,
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Enter ID/Text to filter"
          value={this.state.number}
          className="form-control text-field"
          onChange={(e) => this.onChangeHandler(e)}
        ></input>

        <table className="list-table table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">CONTENT</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default ListRenderingComponent;
