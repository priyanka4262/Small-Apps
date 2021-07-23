import react, { Component, useContext } from "react";
import {Ctx} from './ContextProvider';
const ContextConsumer = (props) => {
    const name=useContext(Ctx);
        return(
            <div>         
            <div>I am from context consumer</div>
            {/* <Ctx.Consumer>
                {
                    name => {
                             return (  
                                     <div>the context value is {name}</div> 
                                    )
                            }
                }
            </Ctx.Consumer> */}
            {name}
            </div>
        )
    }
    
export default ContextConsumer;