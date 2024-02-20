import React from "react";

function InfoInput({name, onChange, value, placeholder}) {
    return (
        <input type="text" 
        name = {name}
        onChange = {onChange} 
        value = {value} 
        placeholder = {placeholder}/>
    );
}

export default InfoInput;