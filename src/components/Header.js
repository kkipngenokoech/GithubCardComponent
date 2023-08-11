import { Component } from "react";

export default class Header extends Component{
    render(){
        return(
            <div className="text-center">{this.props.title}</div>
        )
    }
}

