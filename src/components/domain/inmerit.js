import React from 'react';
import './../../css/inmerit.css';

export default class Inmerit extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="inmerit">
        <div id="inmeritin">
	        <div class="index_youshi_tit">
                <span >选择中华世纪网的优势</span><br/>中华世纪网15年网络运维经验，提供全年24小时无休技术在线支持服务。
            </div>
            <div class="index_youshi_list">
    	        <div class="index_youshi_list_l">
        	        <div class="index_youshi_list_pic"><img src="https://www.c361.com/img/hostimg/c361/img/ys4.png"/></div>
                    <span class="index_youshi_list_t">云计算技术</span><br/>企业级云计算平台，基于虚拟数据中心技术，以更高性能、更快交付、更低成本重定义云时代的网络、存储和安全
                </div>
            </div>
    	    <div class="index_youshi_list_r">
                <div class="index_youshi_list_pic2">
                    <img src="https://www.c361.com/img/hostimg/c361/img/ys1.png"/>
                </div>
                <span class="index_youshi_list_t">负载均衡</span><br/>
                集合多台主机的服务能力，可以随时实现水平扩展、系统扩容，增加对外业务服务能力，有效避免单点故障。
            </div>
    	    <div class="index_youshi_list_l">
        	    <div class="index_youshi_list_pic"><img src="https://www.c361.com/img/hostimg/c361/img/ys2.png"/></div>
                <span class="index_youshi_list_t">服务器性能监控</span><br/>监控服务器CPU、内存、硬盘等使用情况和性能，可根据客户要求提供最近一月历史报告。
            </div>
    	    <div class="index_youshi_list_r">
        	    <div class="index_youshi_list_pic2"><img src="https://www.c361.com/img/hostimg/c361/img/ys3.png"/></div>
                <span class="index_youshi_list_t">流量监控</span><br/>为客户提供实时、历史流量监控服务，以便客户对业务应用使用带宽进行分析
            </div>
    	    <div class="index_youshi_list_l">
        	    <div class="index_youshi_list_pic"><img src="https://www.c361.com/img/hostimg/c361/img/ys5.png"/></div>
                <span class="index_youshi_list_t">服务器安全检测</span><br/>为客户服务器提供入侵检测与防护、漏洞扫描、流量清洗、病毒防范、系统加固、安全管理服务、数据存储备份等
            </div>
    	    <div class="index_youshi_list_r">
        	    <div class="index_youshi_list_pic2"><img src="https://www.c361.com/img/hostimg/c361/img/ys6.png"/></div>
                <span class="index_youshi_list_t">专属工程师服务</span><br/>由专属工程师负责跟进和处理故障，并对故障进行分析和总结。7×24小时专业工程师，全天守候。
            </div>
            <div class="clear"></div>
        </div>
    </div>)
  }
}