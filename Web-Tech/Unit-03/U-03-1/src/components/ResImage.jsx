import React from "react";

class ResImage extends React.Component{
    render(){
        return(
            <div>
                <p>Restaurant Image</p>
                <img src={this.props.image} alt="resImage" />
            </div>
        )
    }
}


export default ResImage;