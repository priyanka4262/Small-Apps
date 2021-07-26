import react, { useReducer } from "react";
const initialState = { name: " ", password: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "inputChange":
      console.log(action, state);
      return { [action.key]: action.value };
    default:
      console.log("error");
  }
};

function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "inputChange",
            key: e.target.name,
            value: e.target.value,
          })
        }
      ></input>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "inputChange",
            key: e.target.name,
            value: e.target.value,
          })
        }
      ></input>
      <button type="submit">Submit</button>
    </div>
  );
}
export default ReducerComponent;
