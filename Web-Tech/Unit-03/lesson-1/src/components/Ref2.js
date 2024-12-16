import React from "react";
const colors = ["red","blue","green","purple"]
class Ref2 extends React.Component{
    constructor(props){
        super(props);
        this.newRef = React.createRef();
    }

    changeColor = (event) => {
        const i =  Math.floor(Math.random() * colors.length);
        this.newRef.current.style.color = colors[i]
        this.newRef.current.innerHTML = colors[i]
    }

    render(){
        return(
            <>
            <h1 ref={this.newRef}>This is the Text</h1>
            <h3>in the color</h3>
              <input
                type="button"
                value="Change the Text"
                onClick={this.changeColor}
              />
            </>
        )
    }
}

export default Ref2;