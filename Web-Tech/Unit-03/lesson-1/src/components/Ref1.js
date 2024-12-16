import React from "react";

class Ref1 extends React.Component{
    constructor(props){
        super(props);
        this.newRef = React.createRef();
    }

    changeText = (event) => {
        this.newRef.current.innerHTML = "Changed using REF"
    }

    render(){
        return(
            <>
            <h1 ref={this.newRef}>This is the Text</h1>
              <input
                type="button"
                value="Change the Text"
                onClick={this.changeText}
              />
            </>
        )
    }
}

export default Ref1;