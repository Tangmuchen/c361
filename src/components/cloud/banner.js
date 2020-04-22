import React from 'react';
import './../../css/banner.css';
import b from './../../img/banner.jpg'
export default class Banner extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="banner">
       <img src={b} />
    </div>)
  }
}