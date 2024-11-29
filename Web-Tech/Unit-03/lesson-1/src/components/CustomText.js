import React from "react";
const colors = ["red", "green", "blue", "yellow", "orange"];
class CustomText extends React.Component{

    constructor(props){
        super(props);
        this.myref = React.createRef();
    }

    changetext = (event) => {
        console.log(event.target.value + 'clicked');
        this.myref.current.innerHTML = "changed"
        
    }
    changeText = (event) => {
        console.log(event.target.value + " clicked");
        const i = Math.floor(Math.random() * colors.length);
        console.log(i);
        this.myref.current.innerHTML = colors[i];
        this.myref.current.style.color = colors[i];
      };


    render(){
        return(
            <>
            <h1 ref={this.myref}>This is the Text</h1>
              <input
                type="button"
                value="Change the Text"
                onClick={this.changetext}
              />

                <input
                type="button"
                value="Change the Text"
                onClick={this.changeText}
              />
            </>
        )
    }
}

export default CustomText;