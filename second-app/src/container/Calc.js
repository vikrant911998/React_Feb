import React, { Component } from "react";
import { Input } from "../components/Input";
import { Output } from "../components/Output";
import { SalaryCalc } from "../components/SalaryCalc";
import { DemoInput } from "../components/DemoInput";


export class Calc extends Component{

    constructor(){
        super();
        this.first = 0;
        this.second = 0;
        this.id = true;
        this.state = { 
            result : this.first+this.second ,
            isCalc:this.id
        };

    }

    takeInput(event){
        if(event.target.id === 'n1'){
            this.first = parseInt( event.target.value );
        }
        else{
            this.second = parseInt( event.target.value );
        }
    }

    calculateResult(){
        this.setState({...this.state,result: this.first+this.second});
    }

    showCalculator(){
        return(
            <div className="col">
                <h1 className="alert-primary text-center">CALCULATOR</h1>
                <Input input={this.takeInput.bind(this)} calc={this.calculateResult.bind(this)}/>

                <Output result={this.state.result}/>
            </div>
        );
    }

    showSalaryCalc(){
        return(
            <div className="col">
                <SalaryCalc/>
                <DemoInput/>
                <DemoInput/>
                <DemoInput/>
            </div>
        );
    }

    toggleCalc(){
        this.id = !this.id;
        this.setState({...this.state,isCalc:this.id});
    }



    render(){
        let style1 ={
            fontSize:'50px',
            backgroundColor:'yellow'
        }
        let style2 ={
            fontSize:'20px',
            backgroundColor:'skyblue'
        }

        return(
            <div className="container">
                <button className="btn btn-info" onClick={this.toggleCalc.bind(this)}>TOGGLE</button>

                <br/><br/>
                <div>
                    <h1 style={this.id ? style1 : style2}>DEMO</h1>
                </div>
                {/* <div className={this.id ? 'alert-primary': 'alert-danger'}>
                    <h1>DEMO</h1>
                </div> */}
                {/* {this.id ? this.showCalculator() : this.showSalaryCalc()} */}
            </div>
        );
    }
}