import react, { Component } from "react";
class FetchEmployee extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          todos: data,
        });
      });
  }

  render() {
    const { todos } = this.state;
    return (
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id} </td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default FetchEmployee;
