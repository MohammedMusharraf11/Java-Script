import React from "react";

class MeraCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        }
        this.update = this.update.bind(this)
    }

    componentDidMount(){
        this.interval = setInterval(this.update, 500);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    // update(){
    //     this.setState((prevState)=>({
    //         // seconds: prevState.seconds + 1
    //         seconds: this.state.seconds + 1
    //     }))
    update(){
        this.setState({
            seconds:this.state.seconds + 1
        });
    }
        
    
    
render(){
    return(
        <>
        <div>Time Since Page is Loaded</div>
        <h2>{this.state.seconds}</h2>
        </>
    )

    
}
}

export default MeraCounter;