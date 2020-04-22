import React from 'react';
import './../../css/incase.css';

export default class Incase extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="incase">
        <div class="index_case_tit">我们的典型客户案例</div>
        <div id="incasein">
            
            <div class="index_case_list">
    	        <ul>
        	        <li>
                        <a target="_blank" href="http://www.luxunw.com">
			                <img src="https://www.c361.com/img/hostimg/c361/img/al1.jpg" border="0"/>
                        </a>
                    </li>
        	        <li><a target="_blank" href="http://www.jiannengci.com/"><img src="https://www.c361.com/img/hostimg/c361/img/al2.jpg"/></a></li>
        	        <li><a target="_blank" href="http://www.jstxyy.com/"><img src="https://www.c361.com/img/hostimg/c361/img/al3.jpg"/></a></li>
        	        <li><a target="_blank" href="http://www.njuhaian.com/"><img src="https://www.c361.com/img/hostimg/c361/img/al4.jpg"/></a></li>
        	        <li><a target="_blank" href="http://www.djzn-cn.com/"><img src="https://www.c361.com/img/hostimg/c361/img/al5.jpg"/></a></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al6.jpg"/></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al7.jpg"/></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al8.jpg"/></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al9.jpg"/></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al10.jpg"/></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al11.jpg"/></li>
        	        <li><img src="https://www.c361.com/img/hostimg/c361/img/al12.jpg"/></li>
                    <div class="clear"></div>
                </ul>
            </div>
        </div>
    </div>)
  }
}