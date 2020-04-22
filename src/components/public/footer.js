import React from 'react';
import './../../css/footer.css';

export default class Footer extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="footer">
        <div id="footerin">
        <div id="footerpics">
            <div id="fo1"><img alt="" src="https://www.c361.com/img/hostimg/c361/hd315.gif"/></div>
            <div id="fo2"><img alt="" src="https://www.c361.com/img/hostimg/c361/xinyongpinganlogo.png"/></div>
        </div>
        <div id="footerzi">
        Copyright 2004-2018 北京妙思科技有限公司 All Rights Reserved 中华世纪网 版权所有 
        </div>
        </div>
    </div>)
  }
}