import { Component } from "react";

class ClassDemo extends Component{
    constructor(props){
        super(props)
        this.state = {count:0,num1:23,result:"", user:{username:"",email:""} }
    }
    handleClick = ()=>alert(this.props.username)
    render(){
        return(
            <div className="container mt-5">
            <h1>{this.state.count}</h1>
             <button type="button" className="btn btn-primary" 
            onClick={(e)=>this.setState({count:this.state.count+1})
            }>Increase</button>


            <h2>{this.props.username}</h2>
            {this.props.isLoggedIn ? <h5>Welcome {this.props.username}</h5> :" Please login "}
            <button type="button" className="btn btn-primary" 
            onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
export default ClassDemo