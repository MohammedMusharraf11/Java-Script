import React from "react";

class ResImage extends React.Component{
    render(){
        return(
            <div>
                <p>Restaurant Image</p>
                <img src={this.props.src} alt={this.props.caption} height={120}  />
            </div>
        )
    }
}


export default ResImage;