import React, { Component } from 'react';
import './../../css/zhutui.css';

class ZhuTui extends Component {
  constructor(props){
    super(props)
    this.state = {
      index:1
    }
  }
  changeIndex(index){
    this.setState({
      index:index
    })
  }
	render() {
		return (
			<div className="zhutui">
				<div className="title">
					<h2>中华世纪网主推产品</h2>
				</div>
				<div className="type">
					<ul>
						<li className={this.state.index ===1 ? "bg" : ""} onMouseOver={()=>this.changeIndex(1)}>企业云服务器</li>
						<li className={this.state.index ===2 ? "bg" : ""} onMouseOver={()=>this.changeIndex(2)} >云服务器</li>
						<li className={this.state.index ===3 ? "bg" : ""} onMouseOver={()=>this.changeIndex(3)}>云虚拟主机</li>
					</ul>
				</div>
				<div className={this.state.index ===1 ? " qiehuan show" : "qiehuan hidden"}>
					<div className="list" >
						<div className="box">
							<dl>
								<dt>百度云香港服务器</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list">
						<div className="box">
							<dl>
								<dt>百度云香港服务器</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list">
						<div className="box">
							<dl>
								<dt>百度云香港服务器</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list">
						<div className="box">
							<dl>
								<dt>百度云香港服务器</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
        </div>
        <div className={this.state.index ===2 ? "show qiehuan" : "qiehuan hidden"}>
					<div className="list list2" >
						<div className="box">
							<dl>
								<dt >香港经济型512M</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list list2">
						<div className="box">
							<dl>
								<dt>香港经济型512M</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list list2">
						<div className="box">
							<dl>
								<dt>香港经济型512M</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list list2">
						<div className="box">
							<dl>
								<dt>香港经济型512M</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
				
        </div>
        <div className={this.state.index ===3 ? "show qiehuan" : "qiehuan hidden"}>
					<div className="list list3" >
						<div className="box">
							<dl>
								<dt>香港迷你</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list list3">
						<div className="box">
							<dl>
								<dt>香港迷你</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list list3">
						<div className="box">
							<dl>
								<dt>香港迷你</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
          <div className="list list3">
						<div className="box">
							<dl>
								<dt>香港迷你</dt>
								<dd>CPU：1核/内存：1G</dd>
								<dd>硬盘：40+20G/带宽：1M</dd>
								<dd>IP个数：独立IP 1 个</dd>
								<dd>系统：Win2008、2012</dd>
								<dd>百度香港机房</dd>
								<dd>提高配置的说明</dd>
								<dd className="price">
									原价月付：<span><del>158</del></span> 元
								</dd>
								<dd className="price">
									月付：<span>140</span> 元
								</dd>
								<dd className="price">
									年付：<span>1400</span> 元
								</dd>
								<div className="but">立即订购</div>
							</dl>
						</div>
					</div>
				
        </div>
			</div>
		);
	}
}

export default ZhuTui;
