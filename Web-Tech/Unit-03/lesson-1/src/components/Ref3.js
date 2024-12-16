import React from "react";

class Ref3 extends React.Component{
    constructor(props){
        super(props);
        this.focusInput = React.createRef();
    }

    focus = (event) => {
        this.focusInput.current.focus()
    }

    render(){
        return(
            <>
             <input type="text" ref={this.focusInput} />
              <input
                type="button"
                value="Focus the text input"
                onClick={this.focus}
              />
            </>
        )
    }
}

export default Ref3;