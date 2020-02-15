import React,{ Component } from 'react';
import { Output } from '../components/Output';
// import React from 'react';


//Smart (Class Component)
export class Like extends Component{

    constructor(props){
        super(props);
        this.count = 0;
    }

    increaseCounter(){
        this.count++;
        console.log('Inside Increase Counter ',this.count);
    }
    

    render(){
        return(
            <>
                <h1 className="alert-primary text-center">Smart Component</h1>
                <br></br>
                <button onClick={this.increaseCounter.bind(this)} className="btn btn-success">Click For Counter</button>
                <br/>
                <Output  counter={this.count} /> 
            </>
        );
    }
}