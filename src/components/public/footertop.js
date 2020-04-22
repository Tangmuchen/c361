import React from 'react';
import './../../css/footertop.css';

export default class Footertop extends React.Component{
    constructor(props){
      super(props);
    }
  render(){
    return(
    <div id="footertop">
      <div id="footertopin">
        <div id="footertopleft">
          <div className="ftlul">
            <h3>关于我们</h3>
            <ul>
              <li><a href="##">公司简介</a></li>
              <li><a href="##">公司资质</a></li>
              <li><a href="##">联系我们</a></li>
              <li><a href="##">代理加盟</a></li>
              <li><a href="##">法律法规</a></li>
            </ul>
          </div>
          <div className="ftlul">
            <h3>产品中心</h3>
            <ul>
              <li><a href="##">网站建设</a></li>
              <li><a href="##">云服务器</a></li>
              <li><a href="##">虚拟主机</a></li>
              <li><a href="##">域名注册</a></li>
              <li><a href="##">管理面板</a></li>
            </ul>
          </div>
          <div className="ftlul">
            <h3>支付方式</h3>
            <ul>
              <li><a href="##">付款方式</a></li>
              <li><a href="##">在线付款</a></li>
              <li><a href="##">银行汇款</a></li>
              <li><a href="##">申请发票</a></li>
            </ul>
          </div>
          <div className="ftlul">
            <h3>服务支持</h3>
            <ul>
              <li><a href="##">会员中心</a></li>
              <li><a href="##">代理中心</a></li>
              <li><a href="##">有问必答</a></li>
              <li><a href="##">价格总览</a></li>
              <li><a href="##">站内搜索</a></li>
            </ul>
          </div>
          <div className="ftlul">
            <h3>相关帮助</h3>
            <ul>
            <li><a href="##">帮助公告</a></li>
            <li><a href="##">公司公告</a></li>
            <li><a href="##">资讯中心</a></li>
            <li><a href="##">密码找回</a></li>
            </ul>
          </div>
        </div>
        <div id="footertopright">
          <div id="ftrtop">
            <p>公司名称：妙思经营中心（中华世纪网）</p>
            <p>公司地址：北京市海淀区温泉航材大道11-4号</p>
            <p>《中华人民共和国增值电信业务经营许可证》</p>
            <p>京ICP证070633号　京ICP备08012273号</p>
            <p>中国互联网络信息中心认证编号：010202008020100002</p>
            <p>公安局备案编号：京公网安备 11010802022212号</p>
            <p>公司营业执照号码：9111010877158629X0</p>
          </div>
          <div id="ftrbottom">
            <h4>客服热线： 手机:186 0066 0491</h4>
          </div>
        </div>
      </div>
    </div>
    )
  }
}