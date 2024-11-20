import React from "react";
import ResImage from "./ResImage";
import ResCaption from "./ResCaption";
import ResLink from "./ResLink";
import { Route,Routes } from 'react-router-dom'
class SrchResult extends React.Component{
    render(){
        return(
            <div>
                <ResImage src={this.props.src}/>
                <ResCaption caption={this.props.caption}/>
                <ResLink href={this.props.href} linktext={this.props.linktext}/>
                {/* You can use {..}SPREAD OPERATOR to pass all the props of child component to the parent */}
            </div>
        )
    }


}
export default SrchResult;