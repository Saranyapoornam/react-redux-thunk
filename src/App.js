import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as actionReducer from './store/action';
import logo from './logo.svg'
class App extends Component {
  render(){
    return (
      <div className="App">
       <h1>Age<span>{this.props.age}</span></h1>
       <button onClick={this.props.Age_Up}>Age Up</button>
       <button onClick={this.props.Age_Down}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo" alt="logo" /> }
      </div>
    );
  }
  
}
const mapStateToProps = (state)=>{
  return{
    age: state.age,
    loading :state.loading
  }
}
  const mapDispatchToProps = (dispatch)=>{
    return{
      Age_Up :() =>{dispatch(actionReducer.ageUp(1))},
      Age_Down :() =>{dispatch(actionReducer.ageDown(1))}
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(App);
