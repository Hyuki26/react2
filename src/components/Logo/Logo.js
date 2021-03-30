import React from 'react';
import neon from '../../Pics/200w.gif';
//import logo from '../Logo/logo';

function Logo (props){
    return(
        //Created a logo with pika pic
        <div>
            <img src={neon} className='hello' alt="pics"/>
        </div>
    )
};

export default Logo;