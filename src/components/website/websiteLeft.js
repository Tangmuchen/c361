import React from 'react';
import './../../css/website//websiteLeft.css';
import './../../css/website//websiteIndex.css';

import{HashRouter as Router,Link,Route,NavLink}from 'react-router-dom';

export default class Website extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    
      <Router>
    <div className="couConents">
            <div className="leftnav">
            <ul className="lnul">
              <li className="lnli"><div className="dian"></div><NavLink to="/"   className="lnla" >鲜花、礼品、工艺品</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/liucheng/"  className="lnla">食品、酒水、茶叶</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/jihua/"  className="lnla" >农业、林业</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/shipin/"   className="lnla">机械、工业制品</NavLink></li> 
              <li className="lnli"><div className="dian"></div><NavLink to="/liucheng/"   className="lnla">电子、电气、电工</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/jihua/"   className="lnla">五金、门窗</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/shipin/"   className="lnla">照明、灯具、能源</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/"   className="lnla" >安防、监控器材</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/liucheng/"  className="lnla">仪器、仪表、量具</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/jihua/"  className="lnla" >印刷、包装</NavLink></li>
              <li className="lnli"><div className="dian"></div><NavLink to="/shipin/"   className="lnla">环保、废料回收</NavLink></li> 
              <li className="lnli"><div className="dian"></div><NavLink to="/liucheng/"   className="lnla">服装、鞋帽、皮具</NavLink></li> 
              <li className="lnli"><div className="dian"></div><NavLink to="/jihua/"  className="lnla" >珠宝、首饰、饰品</NavLink></li>
          </ul>
    </div>
          <div className="courseRight"> 
          <Route path="/" exact component={Index}/>
            <Route path="/liucheng/" component={Liucheng}/>
            <Route path="/jihua/" component={Jihua}/>
         <Route path="/shipin/" component={Vidue}/>
         </div>
      </div>
 
</Router>
    
    );
  }
}
function Index(){
        return(
        <div>
<table className="webbox" border="0">
<tr className="webback">
	<td className="webbox-left">
    <p>198元/年</p>
    <p>建站入门型</p>
    <span className="webbox-button">购买>>></span>
    </td>
    <td className="webbox-right">
    <div><br />
        <p>入门型网站就是用现有的2000多套样板任选一个的格式做网站，这样省去很多成本，所以用样板做网站就很便宜 ，自助添加图片和文字</p>
        <br />
        <p>独立网页空间：100M</p>
        <p>独立数据库空间：20M</p>
        <p>模版：2000多套，任选一套</p>
        <p>时效：一个工作日内完成模版安装</p>
        <p>机房：香港（免备案）、北京（需要有备案号）</p>
        <br />
    </div>
    </td>
</tr>
<tr>
	<td className="webbox-left">
    <p>398元/年</p>
    <p>建站标准型</p>
    <span className="webbox-button">购买>>></span>
    </td>
    <td className="webbox-right">
    <br />
    <p>标准型网站就是用现有的2000多套样板任选一个的格式做网站，这样省去很多成本，所以用样板做网站就很便宜 ，自助添加图片和文字</p>
        <br />
        <p>独立网页空间：300M</p>
        <p>独立数据库空间：50M</p>
        <p>模版：2000多套，任选一套</p>
        <p>时效：一个工作日内完成模版安装</p>
        <p>机房：香港（免备案）、北京（需要有备案号）</p><br />
    </td>
</tr>
</table>
</div>
    )};


function Liucheng(){
            return(
            <div>
                <h3 className="webtatle">食品、酒水、茶叶:</h3>
                <table className="webbox" border="0">
                    <tr>
                        <td className="webimg">
                            <div>
                                <img src={require("./img/3087.jpg") }/>
                                <p>模板编号:3087</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3088.jpg") }/>
                                <p>模板编号:3088</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3089.jpg") }/>
                                <p>模板编号:3089</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3089.jpg") }/>
                                <p>模板编号:3089</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3088.jpg") }/>
                                <p>模板编号:3088</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3087.jpg") }/>
                                <p>模板编号:3087</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
 )};
function Jihua(){
        return(
        <div>
                <h3 className="webtatle">农业、林业</h3>
                <table className="webbox" border="0">
                    <tr>
                        <td className="webimg">
                            <div>
                                <img src={require("./img/3087.jpg") }/>
                                <p>模板编号:3087</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3088.jpg") }/>
                                <p>模板编号:3088</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3089.jpg") }/>
                                <p>模板编号:3089</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3089.jpg") }/>
                                <p>模板编号:3089</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3088.jpg") }/>
                                <p>模板编号:3088</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3087.jpg") }/>
                                <p>模板编号:3087</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                        <td  className="webimg">
                            <div>
                                <img src={require("./img/3090.jpg") }/>
                                <p>模板编号:3090</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
)};
function Vidue(){
        return(
        <div>4</div>
)};

    
