import { useState } from "react";
import ContactUsComponent from "./Components/ContactUsComponent/ContactUsComponent";
import Facebook from "./Components/facebook/Facebook";
import Greeting from "./Components/Greeting/Greeting";
import VoteComponent from "./Components/VoteComponent/VoteComponent";
import TimerComponent from "./Components/Timer/TimerComponent";
import ToDoList from "./Components/ToDo/ToDoList";
import ToDoForm from "./Components/ToDo/ToDoForm";
import LifeCycleComponent from "./Components/LifeCycleComponent";
import UpdatingComponent from "./Components/UpdatingComponent";
import ListRenderingComponent from "./Components/ListRendering/ListRenderingComponent";

import "./App.css";
function App() {
  return (
    //<Greeting />
    //<ContactUsComponent />
    //<Facebook />
    //<VoteComponent />
    //<TimerComponent />
    //<ToDoForm />
    //<LifeCycleComponent appName="priyanka" />
    //<UpdatingComponent />
    <ListRenderingComponent />
    //<ToDoList></ToDoList>
  );
}

export default App;
