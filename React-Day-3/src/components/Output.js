import React from 'react';

export const Output = (props)=>{
    console.log(props.counter);
    return (
        <>
            
            <h3>Result {props.counter}</h3>
        </>
    );
}