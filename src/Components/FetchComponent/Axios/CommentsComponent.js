import axios from "axios";
import react, { useState, useEffect } from "react";
function CommentsComponent() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment, index) => (
          <tr key={comment.id}>
            <td>{comment.id} </td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default CommentsComponent;
