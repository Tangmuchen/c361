import React, { Component } from 'react';
import './../../css/ymzc.css';
class Ymzc extends Component {
	render() {
		return (
			<div>
				<div className="search">
					<table width="1200" border="0" cellspacing="0" cellpadding="0" className="table1">
						<tr>
							<td width="160" height="60" align="left">
								<div className="title1">WWW.</div>
							</td>
							<td width="900" align="left">
								<input
									name="domain"
									type="text"
									id="domain"
									maxlength="50"
									placeholder="请输入你想要注册的域名，如c361"
									className="title2"
								/>
							</td>
							<td width="140" align="left">
								<input type="button" className="searchbut" />
							</td>
						</tr>
					</table>

					<table width="1200" border="0" cellspacing="0" cellpadding="0" className="choose">
						<tr>
							<td width="120" height="30" align="left" />
							<td width="120" align="left">
								<input name="cc" type="checkbox" value="yes" /> .cc
							</td>
							<td width="120" align="left">
								<input name="com" type="checkbox" value="yes" checked="checked" /> .com
							</td>
							<td width="120" align="left">
								<input name="net" type="checkbox" value="yes" /> .net
							</td>
							<td width="120" align="left">
								<input name="org" type="checkbox" value="yes" /> .org
							</td>
							<td width="120" align="left">
								<input name="cn" type="checkbox" value="yes" checked="checked" /> .cn
							</td>
							<td width="120" align="left">
								<input name="comcn" type="checkbox" value="yes" /> .com.cn
							</td>
							<td width="120" align="left">
								<input name="netcn" type="checkbox" value="yes" /> .net.cn
							</td>
							<td width="120" align="left">
								<input name="orgcn" type="checkbox" value="yes" /> .org.cn
							</td>
							<td width="120" align="left" />
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="top" type="checkbox" value="yes" /> .top
							</td>
							<td align="left">
								<input name="mobi" type="checkbox" value="yes" /> .mobi
							</td>
							<td align="left">
								<input name="govcn" type="checkbox" value="yes" /> .gov.cn
							</td>
							<td align="left">
								<input name="co" type="checkbox" value="yes" /> .co
							</td>
							<td align="left">
								<input name="hk" type="checkbox" value="yes" /> .hk
							</td>
							<td align="left">
								<input name="tw" type="checkbox" value="yes" /> .tw
							</td>
							<td align="left">
								<input name="xyz" type="checkbox" value="yes" /> .xyz
							</td>
							<td align="left">
								<input name="tv" type="checkbox" value="yes" /> .tv
							</td>
							<td align="left" />
						</tr>
						<tr>
							<td height="30" align="left">

							</td>
							<td align="left">
								<input name="pw" type="checkbox" value="yes" /> .pw
							</td>
							<td align="left">
								<input name="wang" type="checkbox" value="yes" /> .wang
							</td>
							<td align="left">
								<input name="im" type="checkbox" value="yes" /> .im
							</td>
							<td align="left">
								<input name="cm" type="checkbox" value="yes" /> .cm
							</td>
							<td align="left">
								<input name="us" type="checkbox" value="yes" /> .us
							</td>
							<td align="left">
								<input name="la" type="checkbox" value="yes" /> .la
							</td>
							<td align="left">
								<input name="tel" type="checkbox" value="yes" /> .tel
							</td>
							<td align="left">
								<input name="me" type="checkbox" value="yes" /> .me
							</td>
							<td align="left">　</td>
						</tr>
						<tr>
							<td height="30" align="left">

							</td>
							<td align="left">
								<input name="in" type="checkbox" value="yes" /> .in
							</td>
							<td align="left">
								<input name="biz" type="checkbox" value="yes" /> .biz
							</td>
							<td align="left">
								<input name="asia" type="checkbox" value="yes" /> .asia
							</td>
							<td align="left">
								<input name="name" type="checkbox" value="yes" /> .name
							</td>
							<td align="left">
								<input name="info" type="checkbox" value="yes" /> .info
							</td>
							<td align="left">　</td>
							<td align="left">　</td>
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="bjcn" type="checkbox" value="yes" /> .bj.cn
							</td>
							<td align="left">
								<input name="shcn" type="checkbox" value="yes" /> .sh.cn
							</td>
							<td align="left">
								<input name="hecn" type="checkbox" value="yes" /> .he.cn
							</td>
							<td align="left">
								<input name="sxcn" type="checkbox" value="yes" /> .sx.cn
							</td>
							<td align="left">
								<input name="nmcn" type="checkbox" value="yes" /> .nm.cn
							</td>
							<td align="left">
								<input name=".qh.cn" type="checkbox" value="yes" /> .qh.cn
							</td>
							<td align="left">
								<input name="lncn" type="checkbox" value="yes" /> .ln.cn
							</td>
							<td align="left">
								<input name="jlcn" type="checkbox" value="yes" /> .jl.cn
							</td>
							<td align="left" />
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="sdcn" type="checkbox" value="yes" /> .sd.cn
							</td>
							<td align="left">
								<input name="jscn" type="checkbox" value="yes" /> .js.cn
							</td>
							<td align="left">
								<input name="zjcn" type="checkbox" value="yes" /> .zj.cn
							</td>
							<td align="left">
								<input name="ahcn" type="checkbox" value="yes" /> .ah.cn
							</td>
							<td align="left">
								<input name="fjcn" type="checkbox" value="yes" /> .fj.cn
							</td>
							<td align="left">
								<input name="xjcn" type="checkbox" value="yes" /> .xj.cn
							</td>
							<td align="left">
								<input name="hlcn" type="checkbox" value="yes" /> .hl.cn
							</td>
							<td align="left">
								<input name="jxcn" type="checkbox" value="yes" /> .jx.cn
							</td>
							<td align="left" />
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="hacn" type="checkbox" value="yes" /> .ha.cn
							</td>
							<td align="left">
								<input name="hbcn" type="checkbox" value="yes" /> .hb.cn
							</td>
							<td align="left">
								<input name="hncn" type="checkbox" value="yes" /> .hn.cn
							</td>
							<td align="left">
								<input name="gdcn" type="checkbox" value="yes" /> .gd.cn
							</td>
							<td align="left">
								<input name="gxcn" type="checkbox" value="yes" /> .gx.cn
							</td>
							<td align="left">
								<input name="nxcn" type="checkbox" value="yes" /> .nx.cn
							</td>
							<td align="left">
								<input name="hicn" type="checkbox" value="yes" /> .hi.cn
							</td>
							<td align="left">
								<input name="sccn" type="checkbox" value="yes" /> .sc.cn
							</td>
							<td align="left" />
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="gzcn" type="checkbox" value="yes" /> .gz.cn
							</td>
							<td align="left">
								<input name="yncn" type="checkbox" value="yes" /> .yn.cn
							</td>
							<td align="left">
								<input name="xzcn" type="checkbox" value="yes" /> .xz.cn
							</td>
							<td align="left">
								<input name="sncn" type="checkbox" value="yes" /> .sn.cn
							</td>
							<td align="left">
								<input name="gscn" type="checkbox" value="yes" /> .gs.cn
							</td>
							<td align="left">
								<input name="twcn" type="checkbox" value="yes" /> .tw.cn
							</td>
							<td align="left">
								<input name="hkcn" type="checkbox" value="yes" /> .hk.cn
							</td>
							<td align="left">
								<input name="mocn" type="checkbox" value="yes" /> .mo.cn
							</td>
							<td align="left">
								<input type="hidden" name="big5" value="n" />
								<input name="freehosttype" type="hidden" id="freehosttype" value="1" />
							</td>
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="tjcn" type="checkbox" value="yes" /> .tj.cn
							</td>
							<td align="left">
								<input name="cqcn" type="checkbox" value="yes" /> .cq.cn
							</td>
							<td align="left">　</td>
							<td align="left">　</td>
							<td align="left">　</td>
							<td align="left">　</td>
							<td align="left">　</td>
							<td align="left">　</td>
							<td align="left">
								<input type="hidden" name="big5" value="n" />
								<input name="freehosttype" type="hidden" id="freehosttype" value="1" />
							</td>
						</tr>
					</table>
          <div className="line">中文域名查询注册</div>
					<table width="1200" border="0" cellspacing="0" cellpadding="0" className="table1">
						<tr>
							<td width="160" height="60" align="left">
								<div className="title1">WWW.</div>
							</td>
							<td width="900" align="left">
								<input
									name="domain"
									type="text"
									id="domain"
									maxlength="50"
									placeholder="请输入你想要注册的域名，如c361"
									className="title2"
								/>
							</td>
							<td width="140" align="left">
								<input type="button" className="searchbut" />
							</td>
						</tr>
					</table>

					<table width="1200" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="120" height="30" align="left" />
							<td width="120" align="left">
								<input name="top" type="checkbox" value="yes" checked="checked" /> .top
							</td>
							<td width="120" align="left">
								<input type="checkbox" value="yes" CHECKED /> .com
							</td>
							<td width="120" align="left">
								<input name="net" type="checkbox" value="yes" checked="checked" /> .net
							</td>
							<td width="120" align="left">
								<input name="中国" type="checkbox" value="yes" checked="checked" /> .中国
							</td>
							<td width="120" align="left">
								<input name="cn" type="checkbox" value="yes" checked="checked" /> .cn
							</td>
							<td width="120" align="left">
								<input name="公司" type="checkbox" value="yes" /> .公司
							</td>
							<td width="120" align="left">
								<input name="hk" type="checkbox" value="yes" /> .hk
							</td>
							<td width="120" align="left">
								<input name="biz2" type="checkbox" value="yes" /> .biz
							</td>
							<td width="120" align="left">
								<input name="tv" type="checkbox" value="yes" /> .tv
							</td>
							<td width="120" align="left" />
						</tr>
						<tr>
							<td height="30" align="left" />
							<td align="left">
								<input name="cc" type="checkbox" value="yes" /> .cc
							</td>
							<td align="left">
								<input name="freehosttype" type="hidden" id="freehosttype" value="2" />
								<input name="type_encode" type="hidden" id="type_encode" value="1" />
								<input name="tw" type="checkbox" value="yes" /> .tw
							</td>
							<td align="left" />
							<td align="left" />
							<td align="left" />
							<td align="left" />
							<td align="left" />
							<td align="left" />
							<td align="left" />
						</tr>
					</table>
				</div>
				<div className="price">
					<div className="_title">域名价格查询</div>
					<table width="1200" border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC">
						<tr>
							<td width="300" height="50" align="center" bgcolor="#EFEEF2">
								<div className="title">域名类别</div>
							</td>
							<td width="500" align="center" bgcolor="#EFEEF2">
								<div className="title">域名描述</div>
							</td>
							<td width="100" align="center" bgcolor="#EFEEF2">
								<div className="title">首年价格</div>
							</td>
							<td width="100" align="center" bgcolor="#EFEEF2">
								<div className="title">域名续费</div>
							</td>
							<td width="100" align="center" bgcolor="#EFEEF2">
								<div className="title">转入价格</div>
							</td>
						</tr>
						<tr>
							<td height="80" align="center" bgcolor="#EFEEF2" rowspan="3">
								国际英文域名
							</td>
							<td align="center" bgcolor="#FFFF00" height="40">
								.com最受欢迎的域名
							</td>
							<td align="center" bgcolor="#FFFF00">
								<b>
									<font color="#FF0000">45元</font>
								</b>
							</td>
							<td align="center" bgcolor="#FFFF00">
								75元/年
							</td>
							<td align="center" bgcolor="#FFFF00">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.net
							</td>
							<td align="center" bgcolor="#EFEEF2">
								80元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								80元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.org
							</td>
							<td align="center" bgcolor="#EFEEF2">
								100元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								100元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td height="40" align="center" bgcolor="#EFEEF2">
								国内英文域名
							</td>
							<td align="center" bgcolor="#EFEEF2">
								.cn/.com.cn/.net.cn/.org.cn
							</td>
							<td align="center" bgcolor="#EFEEF2">
								55元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								75元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td height="40" align="center" bgcolor="#EFEEF2">
								中国政府域名
							</td>
							<td align="center" bgcolor="#EFEEF2">
								.gov.cn
							</td>
							<td align="center" bgcolor="#EFEEF2">
								180元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								180元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td height="40" align="center" bgcolor="#EFEEF2">
								中文通用域名
							</td>
							<td align="center" bgcolor="#EFEEF2">
								中文.中国/中文.网络/中文.公司
							</td>
							<td align="center" bgcolor="#EFEEF2">
								320元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								380元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td height="40" align="center" bgcolor="#EFEEF2">
								中文国际域名
							</td>
							<td align="center" bgcolor="#EFEEF2">
								中文.com 中文.net
							</td>
							<td align="center" bgcolor="#EFEEF2">
								320元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								380元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td height="40" align="center" bgcolor="#EFEEF2">
								中文国内域名
							</td>
							<td align="center" bgcolor="#EFEEF2">
								中文.cn
							</td>
							<td align="center" bgcolor="#EFEEF2">
								320元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								320元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td height="40" align="center" bgcolor="#EFEEF2" rowspan="21">
								其它域名
							</td>
							<td align="center" bgcolor="#FFFF00" height="40">
								.top
							</td>
							<td align="center" bgcolor="#FFFF00">
								<b>
									<font color="#FF0000">9元</font>
								</b>
							</td>
							<td align="center" bgcolor="#FFFF00">
								36元/年
							</td>
							<td align="center" bgcolor="#FFFF00">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.xyz
							</td>
							<td align="center" bgcolor="#EFEEF2">
								<b>
									<font color="#FF0000">18元</font>
								</b>
							</td>
							<td align="center" bgcolor="#EFEEF2">
								26元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.cc
							</td>
							<td align="center" bgcolor="#EFEEF2">
								55元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								140元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.wang
							</td>
							<td align="center" bgcolor="#EFEEF2">
								80元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								80元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.pw
							</td>
							<td align="center" bgcolor="#EFEEF2">
								88元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								88元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.name
							</td>
							<td align="center" bgcolor="#EFEEF2">
								88元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								88元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.asia
							</td>
							<td align="center" bgcolor="#EFEEF2">
								155元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								155元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.biz
							</td>
							<td align="center" bgcolor="#EFEEF2">
								155元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								155元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.tel
							</td>
							<td align="center" bgcolor="#EFEEF2">
								155元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								155元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.info
							</td>
							<td align="center" bgcolor="#EFEEF2">
								180元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								180元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.mobi
							</td>
							<td align="center" bgcolor="#EFEEF2">
								180元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								180元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.im
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.us
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.co
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.me
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.in
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								300元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.hk
							</td>
							<td align="center" bgcolor="#EFEEF2">
								355元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								355元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.la
							</td>
							<td align="center" bgcolor="#EFEEF2">
								360元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								360元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.tv
							</td>
							<td align="center" bgcolor="#EFEEF2">
								380元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								380元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.tw
							</td>
							<td align="center" bgcolor="#EFEEF2">
								455元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								455元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
						<tr>
							<td align="center" bgcolor="#EFEEF2" height="40">
								.cm
							</td>
							<td align="center" bgcolor="#EFEEF2">
								855元
							</td>
							<td align="center" bgcolor="#EFEEF2">
								855元/年
							</td>
							<td align="center" bgcolor="#EFEEF2">
								续费一年
							</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

export default Ymzc;
