import React from 'react';

class Counter extends React.Component {
    
    constructor(props, context) { // Constructor is called before component is mounted
        super(props, context); // I we didn't call super then this.props will be undefined  [Calling parent class constructor]

        this.state = {          // State is an object that holds some information that may change over the lifetime of the component
            seconds: 0
        };

        // Bind the timerTick method to the component
        this.timerTick = this.timerTick.bind(this); // We need to bind the method to the component so that it can access the state
    }

    componentDidMount() {   //The best place to initiate network requests, API calls, etc. 
        // Start the timer
        this.interval = setInterval(this.timerTick, 1000);
    }

    componentWillUnmount() {
        // Clear the timer when the component unmounts
        clearInterval(this.interval);
    }

    timerTick() {
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        }));
    }

    render() {
        return (
            <>
                <h1>Counter: {this.state.seconds}</h1>
            </>
        );
    }
}

export default Counter;
