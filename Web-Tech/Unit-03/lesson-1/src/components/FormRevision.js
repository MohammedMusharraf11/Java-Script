import React from "react";

class FormRevision extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            age: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = function(event){
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value,
        });
    }
    handleSubmit = function(event){
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <>
            <from onsubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name}/>
                </label>
                <label>
                    Age:
                    <input type="text" name="age" value={this.state.age}/>
                </label>
                <button type="submit">Submit</button>
            </from>
            </>
        )
    }
}

export default FormRevision;