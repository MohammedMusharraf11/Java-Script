// REACT EVENT HANDLING IS KNOW AS SYNTHETIC EVENT HANDLING
// In react we pass function as event handler and it is registered at the time of rendering itself
// In react we use camelCase for event names
// You cannot return false to prevent default behavior in React. You must call preventDefault explicitly.

// The event object passed to event handlers are SYNTHETIC EVENT OBJECTS.

import React from "react";

class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }
    
    increment(){
        this.setState({
            count: this.state.count + 1
        });
    }
        

    render(){
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }

    
}

export default Event;
