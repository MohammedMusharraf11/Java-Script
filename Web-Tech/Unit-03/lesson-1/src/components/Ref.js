import React from "react";

class Ref extends React.Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        const node = this.myRef.current;
        console.log("This is Current ",node);
    }


    render(){
        return(
            <div ref={this.myRef} style={{width:'100px', height:'100px',backgroundColor:'lightblue'}}>
                This is my Ref
            </div>
        )
    }
}

export default Ref;