import React,{ Component, Suspense, useState } from "react";
import "./App.scss";
import {Switch,Route,Link} from "react-router-dom";
import Facebook from "./Components/facebook/Facebook";
import TimerComponent from "./Components/Timer/TimerComponent";
import ToDoList from "./Components/ToDo/ToDoList";
import ToDoForm from "./Components/ToDo/ToDoForm";
import LifeCycleComponent from "./Components/LifeCycleComponent";
import UpdatingComponent from "./Components/UpdatingComponent";
import ListRenderingComponent from "./Components/ListRendering/ListRenderingComponent";
import DisplayData from "./Components/DisplayData/DisplayData";
import DisplayList from "./Components/DisplayData/DisplayList";
import LoginFormValidate from "./Components/Forms/LoginFormValidate";
import DropDownComponent from "./Components/DropDownComponent";
import FetchEmployee from "./Components/FetchComponent/FetchEmployee";
import FetchEmp from "./Components/FetchComponent/FetchEmp";
import CommentsComponent from "./Components/FetchComponent/Axios/CommentsComponent";
import UserDetails from "./Components/FetchComponent/Axios/UserDetails";
import ReducerComponent from "./Components/Hooks/ReducerComponent";
import LightDemo from "./Components/Reducer/LightDemo";
import ContextConsumer from './Components/Context/ContextConsumer'
import ContextProvider from "./Components/Context/ContextProvider";
import NestedComponent from "./Components/Routing/NestedComponent";
const ContactUsComponent =React.lazy(() =>import ("./Components/ContactUsComponent/ContactUsComponent"));
const Greeting= React.lazy(() => import ("./Components/Greeting/Greeting"));
const VoteComponent=React.lazy(() => import ("./Components/VoteComponent/VoteComponent"));
const LoginForm=React.lazy(()=>import  ("./Components/Forms/LoginForm"));
const Welcome=React.lazy(()=>import ( "./Components/Routing/Welcome"));
const Products=React.lazy(()=>import ("./Components/Routing/Products"));
const RegistrationForm =React.lazy(()=>import ( "./Components/Forms/RegistrationForm"));

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
    //<RegistrationForm />
    // <DisplayData />
    // <LoginFormValidate></LoginFormValidate>
    //<DropDownComponent></DropDownComponent>
    //<FetchEmployee></FetchEmployee>
    //<FetchEmp></FetchEmp>
    //<UserDetails></UserDetails>
    // <CommentsComponent></CommentsComponent>
    // <ReducerComponent></ReducerComponent>
   // <LightDemo></LightDemo>
   //<ContextConsumer></ContextConsumer>
   //<ContextProvider name="priyanka"></ContextProvider>
   <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active"><Link to="/">Home</Link> </a>
      <a className="nav-item nav-link active"><Link to="/Login">Login</Link></a>
      <a className="nav-item nav-link active"><Link to="/ContactUs">ContactUs</Link></a>
      <a className="nav-item nav-link active"><Link to="/routing">routing</Link></a>

      </div>
  </div>
</nav>
<Suspense fallback={<div>Loading.....</div>}>
   <Switch>
     {/* <Route exact path="/" component={Welcome}></Route> */}
     <Route path="/nested" component={NestedComponent}></Route>
     <Route path="/ContactUs" component={ContactUsComponent}></Route>
     <Route path="/Login" component={LoginForm}></Route>
     <Route path="/Registration" component={RegistrationForm}></Route>
     <Route path="/Greeting" component={Greeting}></Route>
     <Route path="/routing" component={Products}></Route>
     <Route exact path="/Products/:id" component={VoteComponent}/>
     {/* <Route path="*" render={()=>{return <h1>Couldnt find the page</h1>}}/>  */}
   </Switch>
   </Suspense>
   </div>
    
  );
}

export default App;
