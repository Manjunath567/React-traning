import React, {Component} from 'react';
import Child from './Child.js';


export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      array: [],
      object: {},
      name: "Bangalore",
      boolena: true
    }
  }

  receivedData(value){
    console.log("from child component", value)
  }

  received(){
    
  }


  render(){
    return(
      <div>
        Home Component is rendered welcome to react js claas
        <button onClick={this.received.bind(this)}>EXAMPLE</button>
        <Child dataSend={this.state.name} sendParentData={this.receivedData.bind(this)} />
      </div>

    );
  }
}
