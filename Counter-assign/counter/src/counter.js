import React, {Component} from 'react';
import './counter.css';

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
        } 
    }

    increment=()=>{
        this.setState((prevState)=>({
            counter : prevState.counter + 1,
        }))
    }
    decrement = () => {
        this.setState((prevState) => ({
          counter: prevState.counter - 1,
        }));
      };
    reset = ()=>{
        this.setState((prevState) => ({
            counter : 0,
        }))
    }

    render() {
        const {counter} = this.state;

        return (
            <div>
                <h2>Counter : {counter} </h2>
                <br />
                <br />

                <button className='incre button1' onClick={this.increment}>High</button>
                
                <button className='reset button1 ' onClick={this.reset}>Reset</button>
                
                <button className='decrement button1' onClick={this.decrement}>Low</button>
                
            </div>
        )
    }
}