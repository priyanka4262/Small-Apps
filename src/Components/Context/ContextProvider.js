import React,{Component} from "react";
import ContextConsumer from "./ContextConsumer";
import Intermeadiate from './Intermeadiate';
export const Ctx=React.createContext();
class ContextProvider extends Component{
    state={
        name:"priyanka"
    }
    render(){
        return(
           <div>
               <h1>context provider</h1>
               <Ctx.Provider value={this.state.name}>
                   <Intermeadiate />
                   
               </Ctx.Provider>
           </div>
        )
    }
}
export default ContextProvider;