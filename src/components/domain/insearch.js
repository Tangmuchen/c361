import React from 'react';
import './../../css/insearch.css';

export default class Insearch extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="insearch">
        <div id="insearchin">
            <div id="istop">
                <img src="https://www.c361.com/img/hostimg/domain/keys.png"></img>
            </div>
            <div id="ismiddle">
                <div class="yuming_www">www.</div>
                <form id="form1" name="form1" method="get" action="/style/info/domaincheckpub.asp">
                    <div class="yuming_form">
                        <div class="index_yuming_input"><input name="domain" type="text" id="domain" maxlength="50" value="请输入你想要注册的域名，如 c361"  onblur="if (value ==''){value='请输入你想要注册的域名，如 c361'}" onfocus="this.value=''" /></div>
                        <div class="index_yuming_select">
                            <input id="do" type="hidden" name="com" value="yes" />
                            <div class="selecte">
                                <div class="selected"><span class="text">.com</span><em class="trange"></em></div>
                                <ul class="selectlist">
                                    <li data-name="com">.com</li>
                                    <li data-name="net" class="cur">.net</li>
                                    <li data-name="cn">.cn</li>
                                    <li data-name="top">.top</li>
                                    <li data-name="org">.org</li>
                                    <li data-name="hk">.hk</li>
                                    <li data-name="cc">.cc</li>
                                    <li data-name="tv">.tv</li>
                                    <li data-name="comcn">.com.cn</li>
                                    <li data-name="netcn">.net.cn</li>
                                    <li data-name="orgcn">.org.cn</li>
                                    <li data-name="biz">.biz</li>
                                    <li data-name="info">.info</li>
                                    <li data-name="mobi">.mobi</li>
                                </ul>
                            </div>  
                        </div>
                        <div class="index_yuming_button">
                            <input type="hidden" name="big5" value="n"/>
                            <input name="freehosttype" type="hidden" id="freehosttype" value="1"/>
                            <input type="submit" name="button" id="button" value="查询域名" class="yuming_anniu" />
                        </div>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>
            <div id="isbottom">
           .com <font color="#FF0000"><b>35</b></font>元/首年&nbsp;&nbsp;<font color="#FF0000">.top</font> 18元/首年&nbsp;&nbsp;<font color="#FF0000">.xyz</font> 18元/首年&nbsp;&nbsp;.cn 55元/首年&nbsp;&nbsp;.net 60元/首年&nbsp;&nbsp;.cc 55元/首年&nbsp;&nbsp;.中国/.cn 320元/首年&nbsp;&nbsp;.hk 350元/首年&nbsp;&nbsp;.mobi 150元/首年&nbsp;&nbsp;.biz 200元/首年
            </div>
        </div>
    </div>)
  }
}