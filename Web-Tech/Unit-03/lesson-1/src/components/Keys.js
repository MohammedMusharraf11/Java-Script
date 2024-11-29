import React from "react";

function Key(){
    const numbers = [1,2,3,4,5];
    const listitems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return(
        <ul>{listitems}</ul>
    )
}

export default Key;