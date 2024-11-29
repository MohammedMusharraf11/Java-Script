import React from "react";

class ResPrice extends React.Component{
    render(){
        return(
            <div>
                <p>Price: {this.props.price}</p>
            </div>
        )
    }
}

export default ResPrice;