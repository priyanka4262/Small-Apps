import react, { Component } from "react";
import axios from "axios";
class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({
          users: response.data,
        })
      )
      .catch((error) => console.log(error));

    // POST using axios
    const article = { title: "React POST Request Example" };
    axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => this.setState({ articleId: response.data.id }));
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        {/* <div>{this.state.articleId}</div> */}
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id} </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserDetails;
