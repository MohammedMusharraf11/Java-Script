// A controlled component in React is a component where the form's input value is controlled by React state.
//  In other words, the value of the input element (like <input>, <textarea>, or <select>) is tied to the component's state, and any changes to the input are handled through event handlers that update the state.

import React from "react";

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            srn: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = function(event){
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.password]: event.target.value,
            [event.target.srn]: event.target.value

        });
    }
    handleSubmit = function(event){
        event.preventDefault();
        console.log(this.state);
        let v = document.getElementById("form");
        let name = document.createElement("h3");
        name.innerHTML = "Name: " + this.state.name;
        v.appendChild(name);

    }


    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div id="form">
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
                </div>
                <div>
                <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <label>
                    SRN:
                    <input type="text" name="srn" value={this.state.srn} onChange={this.handleChange}/>
                </label>
                </div>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
            </>
        )
    }
}

export default Forms;