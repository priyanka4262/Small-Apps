import react,{Component} from "react";
import {Switch,Route, } from "react-router-dom"
import {useHistory,useRouteMatch} from "react-router";
import VoteComponent from "../VoteComponent/VoteComponent";
import User from "./User";
import Welcome from "./Welcome";
function NestedComponent() {
     let {path,url}=useRouteMatch();
     const history=useHistory();
     console.log(path)
        return(
            <div>
            <h1>Nested Routing</h1>
            <p onClick={()=>history.push("/nested/userDetails")}>click here</p>
            <Switch>
               <Route  exact path={path} component={VoteComponent}/> 
               <Route path={`${path}/userDetails`} component={Welcome}/>
            </Switch>
            </div>
        )
    }

export default NestedComponent;