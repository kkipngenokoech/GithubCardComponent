import { Component } from "react";

export default class Header extends Component{
    render(){
        return(
            <div className="text-center text-white">{this.props.title}</div>
        )
    }
}

