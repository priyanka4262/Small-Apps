import { Component, useState } from "react";
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
import LoginForm from "./Components/Forms/LoginForm";
import RegistrationForm from "./Components/Forms/RegistrationForm";
import DisplayData from "./Components/DisplayData/DisplayData";
import DisplayList from "./Components/DisplayData/DisplayList";
import LoginFormValidate from "./Components/Forms/LoginFormValidate";
import DropDownComponent from "./Components/DropDownComponent";
import FetchEmployee from "./Components/FetchComponent/FetchEmployee";
import FetchEmp from "./Components/FetchComponent/FetchEmp";
import CommentsComponent from "./Components/FetchComponent/Axios/CommentsComponent";
import "./App.scss";
import UserDetails from "./Components/FetchComponent/Axios/UserDetails";
import ReducerComponent from "./Components/Hooks/ReducerComponent";
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
    // <ListRenderingComponent />
    //<ToDoList></ToDoList>
    //<LoginForm></LoginForm>
    // <RegistrationForm />
    // <DisplayData />
    // <LoginFormValidate></LoginFormValidate>
    //<DropDownComponent></DropDownComponent>
    //<FetchEmployee></FetchEmployee>
    //<FetchEmp></FetchEmp>
    <UserDetails></UserDetails>
    // <CommentsComponent></CommentsComponent>
    // <ReducerComponent></ReducerComponent>
  );
}

export default App;
