import React from "react";

class Events1 extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.setRef= (el)=>{ this.myRef=el};
    //     this.showChar=(event)=>{
    //     this.myRef.innerHTML+=event.key
    //     }
    // }
    constructor(props){
        super(props);
        this.setRef= (el)=>{ this.myRef=el};
        this.showChar=(event)=>{
            if(event.shiftKey)
                var txt="<span style='color:red'>"+event.key+
                "</span>"
            
            else
                txt=event.key
            this.myRef.innerHTML+=txt
            console.log(event);
            event.persist();
            var ev=event;
            //return=false;
            event.preventDefault();
            //event.stopPropagation();
                    
        }
    }
    render(){
        return (
            <>
            <div>
					<input onKeyPress={this.showChar} type="text"/>
					<h1 ref={this.setRef}/>
				</div>
            </>
        )
    }
}

export default Events1