import React from 'react';
import './Button.css';

function Button(props){
    return(
        <div >
            <button className="button" > {props.Name} </button>
        </div>
    )
}

export default Button;