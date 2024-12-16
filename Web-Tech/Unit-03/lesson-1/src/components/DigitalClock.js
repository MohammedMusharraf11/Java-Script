import React from "react";

// Create a DigitalClock component that extends React.Component
class DigitalClock extends React.Component {
    constructor(props) {
        super(props); // Call the parent class's constructor
        // Initialize state with the current date and time
        this.state = {
            date: new Date() 
        };
        
    }

    // Lifecycle method: Called once after the component is mounted
    componentDidMount() {
        // Start a timer that updates the time every second
        this.timerID = setInterval(()=>this.tick(), 1000);
        // `timerID` stores the interval ID so we can clear it later
    }

    // Lifecycle method: Called right before the component is unmounted
    componentWillUnmount() {
        // Clear the timer to avoid memory leaks or unintended behavior
        clearInterval(this.timerID);
    }

    // Custom method to update the state with the current date and time
    tick() {
        // Update the state with the current date and time
        this.setState({
            date: new Date()
        });
    }

    // Render method: Defines what will be displayed on the screen
    render() {
        return (
            <>
                {/* Display a static heading */}
                <h1>Time as of now is</h1>
                {/* Display the current time in a human-readable format */}
                <p>{this.state.date.toLocaleTimeString()}</p>
            </>
        );
    }
}

// Export the DigitalClock component so it can be used in other parts of the app
export default DigitalClock;
