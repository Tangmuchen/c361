 import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import './../../css/header.css';

export default class Header extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="header">
        <div id="headerin">
           <div id="hdileft">
              客服热线: &nbsp;&nbsp;186 0066 0491
           </div>
           <div id="hdiright">
              <Router>
                <Link to= "/register" >注册会员</Link>
                <Link to=" /user">会员登录</Link>
                <Link to=" /agent" >代理登录</Link>
                <Link to="/help" >帮助中心</Link >
                <Link to=" /netpay" >付款中心</Link>
                <Link to=" /lianxiwomen" >联系我们</Link>

                <Route path="/register"></Route>
                <Route path="/user"></Route>
                <Route path="/agent"></Route>
                <Route path="/help"></Route>
                <Route path="/netpay"></Route>
                <Route path="/lianxiwomen"></Route>
              </Router>
           </div>
        </div>
    </div>)
  }
}