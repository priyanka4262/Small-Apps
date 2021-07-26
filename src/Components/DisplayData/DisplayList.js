import react, { Component } from "react";
class DisplayList extends Component {
  render() {
    let newPostsList = this.props.postList.filter(
      (post) =>
        post.id == this.props.searchText ||
        post.title
          .toLowerCase()
          .includes(this.props.searchText.toLowerCase()) ||
        post.content.toLowerCase().includes(this.props.searchText.toLowerCase())
    );
    return (
      <div>
        <table className="list-table table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">CONTENT</th>
            </tr>
          </thead>
          <tbody>
            {newPostsList.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayList;
