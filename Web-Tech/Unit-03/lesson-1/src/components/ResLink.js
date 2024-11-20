import React from "react";

class ResLink extends React.Component{
render(){
    return(
        <div>
            <a href={this.props.href}>{this.props.linktext}</a>
        </div>
    )
}

}

export default ResLink;