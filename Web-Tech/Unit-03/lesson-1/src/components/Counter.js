import React from 'react';

class Counter extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            seconds: 0
        };

        // Bind the timerTick method to the component
        this.timerTick = this.timerTick.bind(this);
    }

    componentDidMount() {
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
