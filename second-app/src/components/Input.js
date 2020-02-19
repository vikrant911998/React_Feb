import React from 'react';

export const Input = (props)=>{
    return (
        <>
            <input type="text" id="n1" className="form-control" placeholder="Enter First Number" onChange={props.input}/>
            <br/>
            <input type="text" id="n2" className="form-control" placeholder="Enter Second Number" onChange={props.input}/>
            <br/>
            <button className="btn btn-success" onClick={props.calc}>calculate</button>
        </>
    );
}
