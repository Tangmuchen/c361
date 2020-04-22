import React from 'react';
import { BrowserRouter as Router,Route, Link,} from "react-router-dom";
import './../../css/nav.css';
import $ from 'jquery'
import Shouye from "./../../js/shouye"
import Domain from "./../../js/domain"
import Host from "./../../js/host"
import Cloud from "./../../js/cloud"
import Website from "./../../js/website"
import Email from "./../../js/email"

export default class Nav extends React.Component{
  componentDidMount(){
        $(function(){
          $(".yjcd li").mouseenter(function(){
            $(this).children(".ejcd").slideDown(500)
          })
          $(".yjcd li").mouseleave(function(){
            $(this).children(".ejcd").slideUp(500)
          })
        })
  }
  render(){
    
    return(
      <Router>
    <div id="nav">
        <div id="navin">
        <div id="navpics">
            <div id="np1"><img alt="" src="https://www.c361.com/img/hostimg/c361/logo.png"/></div>
            <div id="np2"><img alt="" src="https://www.c361.com/kf/kf.png"/></div>
        </div>
        <div id="links">
       
            <ul className="yjcd">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/domain">域名注册</Link>
                                 <ul className="ejcd">
                                  <li><Link to="/">英文域名</Link></li>
                                  <li><Link to="/">中文域名</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/host">虚拟主机</Link>
                                <ul className="ejcd">
                                  <li><Link to="/">国内主机</Link></li>
                                  <li><Link to="/">香港主机</Link></li>
                                  <li><Link to="/">日本主机</Link></li>
                                  <li><Link to="/">香港主机</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/cloud">云服务器</Link>
                                <ul className="ejcd">
                                  <li><Link to="/">国内服务器</Link></li>
                                  <li><Link to="/">香港服务器</Link></li>
                                  <li><Link to="/">美国服务器</Link></li>
                                  <li><Link to="/">俄罗斯服务器</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/website">网站建设</Link>
                                <ul className="ejcd">
                                  <li><Link to="/">2000多套模板</Link></li>
                                  <li><Link to="/">专业建站500起</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/email">企业邮局</Link></li>
                            <li><Link to="/hostmore" className="free">免费空间</Link></li>
                </ul>
        
        </div>
    </div>
  </div>
            <Route path="/"  exact component={Shouye}></Route>
            <Route path="/domain" component={Domain}></Route>
            <Route path="/host" component={Host}></Route>
            <Route path="/cloud" component={Cloud}></Route>
            <Route path="/website" component={Website}></Route>
            <Route path="/email" component={Email}></Route>
            <Route path="/hostmore" component={Email}></Route>
  </Router>)
  }
}