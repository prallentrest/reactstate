import React, { Component } from 'react';
import logo from "./img/Mc.png"
class App extends Component {
  state = {show: false,Fullname: "selim",bio:"nothing",profession:"student", src:logo };
 
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  };
  



  render(){
    return (
      <div style={{backgroundColor:"grey", color:"whitesmoke"}}>
        <h3>This is my react state checkpoint</h3>
        <button onClick={this.handleShow} style={{backgroundColor:"black",color:"whitesmoke"}}>
          Clickme
        </button>
        
        {this.state.show && <div style={{ textAlign: "center" }}>
          {"name: "+this.state.Fullname}<br/>
          {"bio: "+this.state.bio}<br/>
          {"profession: "+this.state.profession}<br/>
          < img src={this.state.src}/><br/>
        </div>}
       
      </div>
    );
  }
}
export default App;









