import react, {Component} from "react"
class  ErrorBoundaryComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        console.log(error)
        return {
            hasError:true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error,errorInfo);
      }

    render(){
        if(this.state.hasError){
        return "Something went wrong"
        }
       return this.props.children;
    }
}
export default ErrorBoundaryComponent;