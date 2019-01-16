import React, {Component} from 'react';

export default class Child extends Component{
  constructor(props){
    super(props);
    this.state = {
      city: "",
      country: "India"
    }
    this.sendToParent = this.sendToParent.bind(this);
  }

  componentDidMount(){
    this.setState({
      city: this.props.dataSend
    })
    this.someFunction();
  }

  someFunction(){
  //alert("child")
  }

  sendToParent(){
    this.props.sendParentData(this.state.country);
  }

  render(){
    console.log("props in child", this.props);
    return(
      <div>
        Child Component
        <Parent />
        {this.props.dataSend}
        <p>My city is: {this.state.city}</p>
        <button onClick={this.sendToParent.bind(this)}>Send</button>
      </div>

    );
  }
}
