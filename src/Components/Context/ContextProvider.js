import React,{Component} from "react";
import ContextConsumer from "./ContextConsumer";
import Intermeadiate from './Intermeadiate';
import PropTypes from 'prop-types';
export const Ctx=React.createContext("react");
class ContextProvider extends Component{
    constructor(props){
        super(props);
        // this.state={
    //     name:"priyanka"
    // }
    }
    
    render(){
        //console.log(this.state)
        return(
           <div>
               <h1>context provider</h1>
                <Ctx.Provider value={this.props.name}>
                   <Intermeadiate />
                </Ctx.Provider>
           </div>
        )
    }
}
export default ContextProvider;
ContextProvider.propTypes = {
    name: PropTypes.string
  };