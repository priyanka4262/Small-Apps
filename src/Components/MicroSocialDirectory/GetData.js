import react, { useState, useEffect } from "react";

import axios from "axios";
import "./GetData.scss";
import DisplayUserDetails from "./DisplayUserDetails";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import ReactPaginate from "react-paginate";

const GetData = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [displayUsers, setDisplayUsers] = useState([]);

  const usersPerPage = 24;
  const pagesVisited = pageNumber * usersPerPage;
  //   let displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(users.length / usersPerPage);
  const onUserClickHandler = (user) => {
    //console.log(user);
    setSelectedUser(user);
    history.push(`/userDetails/${user.phone}`);
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const onSortHandler = (e) => {
    console.log("in sort method");
    // console.log(e);
    const data = [...displayUsers];
    const sortedUsers = data.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });
    console.log(sortedUsers);
    setDisplayUsers(sortedUsers);
  };
  useEffect(() => {
    console.log("test");
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
        setDisplayUsers(
          response.data.results.slice(pagesVisited, pagesVisited + usersPerPage)
        );
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(displayUsers);
  return (
    <div>
      <table className=" col-md-8 table table-bordered">
        <thead className="thead-dark text-center">
          <tr>
            <th>ID</th>
            <th>
              Name <button onClick={onSortHandler}>S</button>
            </th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {displayUsers.map((user, index) => (
            <tr key={index} onClick={() => onUserClickHandler(user)}>
              <td>{index + 1} </td>
              <td id="nameElement">{user.name.first}</td>
              <td>
                <img src={user.picture.thumbnail}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Switch>
        <Route
          path="/DisplayUserDetails"
          render={(props) => <DisplayUserDetails selectedUser={selectedUser} />}
        />
      </Switch> */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        onPageChange={changePage}
        pageCount={pageCount}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
export default GetData;
