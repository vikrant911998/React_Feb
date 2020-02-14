import React,{ Component } from 'react';
// import React from 'react';


//Smart (Class Component)
export class Like extends Component{
    

    render(){
        return(
            <>
                <h1 className="alert-primary text-center">Smart Component</h1>
                <br></br>
                <button className="btn btn-success">Click For Counter</button>
            </>
        );
    }
}