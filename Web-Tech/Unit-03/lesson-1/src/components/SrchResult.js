import React from "react";
import ResImage from "./ResImage";
import ResCaption from "./ResCaption";
import ResLink from "./ResLink";
import ResPrice from "./ResPrice";
import ResLocation from "./ResLocation";
import { Route,Routes } from 'react-router-dom'
class SrchResult extends React.Component{
    render(){
        return(
            <div>
                <ResImage {...this.props}/>
                <ResCaption {...this.props}/>
                <ResLink {...this.props}/>
                <ResPrice {...this.props}/>
                <ResLocation {...this.props}/>
                {/* You can use {..}SPREAD OPERATOR to pass all the props of child component to the parent */}
            </div>
        )
    }


}
export default SrchResult;