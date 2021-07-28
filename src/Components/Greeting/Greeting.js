import react, { useState } from "react";
import { useHistory,useLocation,useParams } from "react-router";
const Greeting = () => {
  const [wish, setWish] = useState("");

  const history=useHistory();
  const location=useLocation();
  const param=useParams();

  const redirectToHome=()=>{
    history.push("./"); // to redirect to the path mentioned
    console.log(location.pathname);// to get current path
  }
  const onTimeChangeHandler = (event) => {
    if (!event.target.value) {
      setWish("Enter any number");
    } else if (event.target.value >= 0 && event.target.value < 13) {
      setWish("good morning");
    } else if (event.target.value > 13 && event.target.value <= 16) {
      setWish("good afternoon");
    } else if (event.target.value > 16 && event.target.value <= 20) {
      setWish("good evening");
    } else if (event.target.value > 18 && event.target.value <= 24) {
      setWish("good night");
    } else if (event.target.value > 24) {
      setWish("Invalid Time");
    } else if (event.target.value === "") {
      setWish(" ");
    }
  };
  return (
    <div className="container">
      <label>Enter time in hours:</label>
      <input type="text" onChange={onTimeChangeHandler}></input>
      <label className="wishLabel">{wish}</label>
      <button onClick={()=>redirectToHome()}>Bact to Home</button>
    </div>
  );
};
export default Greeting;
