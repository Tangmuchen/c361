import React, { Component } from 'react'

class MyInfo extends Component {
    render() {
        return (
            <div>
                <table width="100%" height="100" border="0" cellpadding="0" cellspacing="1" bgcolor="#CCCCCC">
                  <tbody>
                      <tr>
                        <td align="center" bgcolor="#FFFFFF">　
                          <img src="img/tip.gif" width="34" height="34" align="absmiddle"/>
                          欢迎您： 
                          <strong>
                              <font face="Courier New, Courier, mono">tangmuchen</font>
                         </strong>　

                       可用金额：<font face="Arial, Helvetica, sans-serif">
                       0.00 </font>元 　等待入帐金额：<font face="Arial, Helvetica, sans-serif">
                        0.00 </font>元	登陆时间：2020/4/21 9:58:04 IP：101.74.167.246
                       </td>
                   </tr>
                </tbody>
              </table>
            </div>
        )
    }
}

class Xiugai extends Component {
    render() {
        return (
            <div>
                <table width="100%" border="0" cellpadding="0" cellspacing="1" bgcolor="#E6F4F9">
    <tbody><tr>
                    <td width="34%" height="31" bgcolor="#F5F5F5"><font color="#000000">　　　用户名：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　　tangmuchen
                      <input name="username" type="hidden" value="tangmuchen"/>
            <input name="password" type="hidden" id="password" value="957eb2da6e49647d984b0c9036704094"/></td>
    </tr>
                  <tr>
                    <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　重设新密码：</font></td>
                    <td width="26%" bgcolor="#FAFAF5">　
                    <input name="newpassword" type="password" id="newpassword" size="14" maxlength="50"/></td>
                    <td width="16%" bgcolor="#FAFAF5">重复新密码<font color="#000000">：</font></td>
                    <td width="24%" bgcolor="#FAFAF5">　
                    <input name="renewpassword" type="password" id="renewpassword" size="14" maxlength="50"/></td>
    </tr>
                  <tr>
                    <td height="26" bgcolor="#F5F5F5"><font color="#000000">　　　Email：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                    <input name="email" type="text" id="email" value="294627532@qq.com"/></td>
    </tr>
                  <tr>
                    <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　姓名(或企业名称)：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">
                      　
                      <input name="truename" type="text" id="truename" value="刘蕴娇"/></td>
    </tr>
	
                  <tr>
                    <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　所属业务专员：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">
                      　
                      QQ客服(4202937)　　如果不满意当前的客服人员可以更换： <select name="kefunow">
                <option selected="">请选择: </option>
				
                <option value="旺旺">旺旺</option>
				
                <option value="在线客服（363）">在线客服（363）</option>
				
                <option value="在线客服（362）">在线客服（362）</option>
				
                <option value="在线客服（361）">在线客服（361）</option>
				
                <option value="QQ客服（68819330）">QQ客服（68819330）</option>
				
                <option value="QQ客服(4202937)">QQ客服(4202937)</option>

              </select>更换原因：<input name="changekefufor" type="text" size="25"/>(25个汉字内)</td>
    </tr>
	
                  <tr>
                    <td height="27" bgcolor="#F5F5F5"><font color="#000000">　　　国家：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                    <input name="coun" type="text" id="coun" value="中国" size="10"/>　</td>
    </tr>
                  <tr>
                    <td height="28" bgcolor="#F5F5F5"><font color="#000000">　　　省份：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">
					
					
					 　
                     <select name="prv">
                <option value="">请选择: </option>
                <option value="北京">北京</option>
                <option value="广东">广东</option>
                <option value="上海">上海</option>
                <option value="广西">广西</option>
                <option value="天津">天津</option>
                <option value="重庆">重庆</option>
                <option value="河北" selected="">河北</option>
                <option value="河南">河南</option>
                <option value="黑龙江">黑龙江</option>
                <option value="吉林">吉林</option>
                <option value="辽宁">辽宁</option>
                <option value="内蒙古">内蒙古</option>
                <option value="海南">海南</option>
                <option value="山西">山西</option>
                <option value="陕西">陕西</option>
                <option value="山东">山东</option>
                <option value="江苏">江苏</option>
                <option value="浙江">浙江</option>
                <option value="安徽">安徽</option>
                <option value="江西">江西</option>
                <option value="福建">福建</option>
                <option value="甘肃">甘肃</option>
                <option value="宁夏">宁夏</option>
                <option value="青海">青海</option>
                <option value="新疆">新疆</option>
                <option value="湖北">湖北</option>
                <option value="湖南">湖南</option>
                <option value="四川">四川</option>
                <option value="贵州">贵州</option>
                <option value="云南">云南</option>
                <option value="西藏">西藏</option>
                <option value="香港">香港</option>
                <option value="澳门">澳门</option>
                <option value="台湾">台湾</option>
                <option value="其它">其它</option>
              </select>
			  </td>
                  </tr>
                  <tr>
                    <td height="25" bgcolor="#F5F5F5"><font color="#000000">　　　城市：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                    <input name="city" type="text" id="city" value="唐山市" size="10"/></td>
    </tr>
                  <tr>
                    <td height="30" bgcolor="#F5F5F5"><font color="#000000">　　　地址：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                      <input name="address" type="text" id="address" value="xxxxxx" size="40" maxlength="50"/></td>
    </tr>
	
 <tr>
                    <td height="30" bgcolor="#F5F5F5"><font color="#000000">　　　联系人：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                      <input name="contact" type="text" id="contact" value="刘蕴娇" size="20" maxlength="20"/></td>
    </tr>	
                  <tr>
                    <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　邮政编码： </font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                    <input name="postid" type="text" id="postid" value="063601" size="10" maxlength="10"/></td>
    </tr>
                  <tr>
                    <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　身份证号码(或营业执照)： </font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                    <input name="perid" type="text" id="postid" value="xxxxxxxxxxxxxxxxxx" size="19" maxlength="40"/>
                    <strong> </strong>
                    </td>
                  </tr>
	                  <tr>
                    <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　联系固定电话：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                      <input name="tel" type="text" id="tel" value="17733566081" size="20" maxlength="50"/></td>
    </tr>
	<tr>
                    <td height="31" bgcolor="#F5F5F5"><font color="#000000">　　　联系手机：</font></td>
                    <td colspan="3" bgcolor="#FAFAF5">　
                      <input name="mobi" type="text" id="mobi" value="17733566081" size="20" maxlength="50"/></td>
    </tr>
                  <tr>
                    <td height="34" bgcolor="#F5F5F5"><font color="#000000"> 　　　传　　真：</font></td>
                    <td bgcolor="#FAFAF5">　
                    <input name="fax" type="text" id="fax" value="17733566081" size="20" maxlength="50"/>  </td>
                    <td bgcolor="#FAFAF5"> QQ<font color="#000000">：</font> 　</td>
                    <td bgcolor="#FAFAF5">　
                    <input name="qq" type="text" id="qq" value="294627532" size="20" maxlength="50"/></td>
    </tr>

                  <tr bgcolor="#FFFFFF">
                    <td height="34">　　　
                    <input type="submit" name="Submit" value="提交"/></td>
                    <td colspan="3">&nbsp;</td>
                  </tr>
        </tbody></table>
            </div>
        )
    }
}

class FaPiao extends Component {
    render() {
        return (
            <div>
                <div class="mem_center_r"><font color="#000000"><br/>
<form name="form1" method="post" action="#">
  <table width="100%" border="0" cellspacing="1" bgcolor="#CCCCCC">
    <tbody><tr bgcolor="#EFEFEF">
      <td height="37" colspan="2" align="center"> 发票申请：    
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">已开票总金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 <font color="#ff6600">0 元</font></td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">总入款金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 
        0
    元
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">本年度已开票金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 <font color="#ff6600">0 元</font> (发票只能按开本年度入款开，请您及时申请发票。 )   
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td width="21%" height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">本年度</font><font color="#666666">入款金额：</font>
      </td><td align="left" bgcolor="#FFFFFF">　 
        0
      元</td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">申请金额： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　<strong>
      <input name="usermoney" type="text" id="usermoney" size="5" maxlength="6"/>
</strong>元（可开发票金额为：0 元）(最小开票金额为：50 元)  (将从您的帐上扣除6%) </font> 
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">发票抬头： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
            <input name="title" type="text" id="title" size="40" maxlength="100"/>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">纳税人识别号： </font>
      </td><td width="79%" height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
        <input name="titleID" type="text" id="titleID" size="30" maxlength="50"/> 
        (个人可以不填写)
</font><font color="#FF0000">(税务局要求企业开具增值税发票必须填写)</font></td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">收件人： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
            <input name="recman" type="text" id="recman"/>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">收件人联系电话： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
            <input name="mobi" type="text" id="mobi"/>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">邮寄方式： </font>
      </td><td height="25" align="left" bgcolor="#FFFFFF">　
 <select name="sendtype" id="sendtype">
  <option value="平邮">平邮</option>
  <option value="快递" selected="selected">快递</option>
</select>
 快递费由用户承担，我们将选择信誉较好的顺丰速运（顺丰快递），发票寄出后，我们会将快件运单号码填写在备注内，您可以在<a href="http://www.sf-express.com/cn/sc/" target="_blank">顺丰速运网站</a>查询快件情况，顺丰速运的快递费先付款和到付款价格一样。我们收10元服务费。 <font color="#FF0000">（不建议选择平邮，邮局经常丢掉信件，如果选择平邮未收到信件，可以提交服务工单要求传真发票存根）</font>。</td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">邮编： </font>
      </td><td width="79%" height="25" align="left" bgcolor="#FFFFFF"><font color="#666666">　
          <input name="postid" type="text" id="postid" size="6" maxlength="6"/>
      </font> 
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="25" align="center" bgcolor="#F7F7F7"><font color="#666666">收件人地址：</font>
      </td><td width="79%" height="25" align="left" bgcolor="#FFFFFF">　<font color="#666666">
        <input name="address" type="text" id="address" size="40" maxlength="100"/>
      </font> 
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="90" align="center" bgcolor="#F7F7F7"><font color="#666666">发票内容：</font>
      </td><td height="90" align="left" bgcolor="#FFFFFF"><font color="#666666"> 　
            <textarea name="con" cols="40" rows="3" id="con"></textarea>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="90" align="center" bgcolor="#F7F7F7"><font color="#666666">备注：</font>
      </td><td height="90" align="left" bgcolor="#FFFFFF"><font color="#666666"> 　
            <textarea name="usercodeinfo" cols="40" rows="3" id="usercodeinfo"></textarea>
      </font>     
    </td></tr>
    <tr bgcolor="#FFFFFF">
      <td height="40" colspan="2" align="center" bgcolor="#F7F7F7"><input type="submit" name="Submit" value="提交"/>      </td></tr>
  </tbody></table>
  <input name="id" type="hidden"/>
</form>
 
您尚未申请过任何发票服务。

<br/>

</font></div>
            </div>
        )
    }
}
class Submit extends Component {
    render() {
        return (
            <div>
                数据库不存在相关记录
            </div>
        )
    }
}

export {MyInfo,Xiugai,FaPiao,Submit}