import React, { Component } from 'react'
import { Link} from "react-router-dom";
import './../../css/leftNav.css'

export default class LeftNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftNav : [
                {
                name:'产品管理',
                isShow:false,
                childer:[
                    {
                       name:'域名管理',
                       path:'/yuming'
                    },
                    {
                       name:'虚拟主机管理',
                       path:'/xuni'
                    },
                    {
                        name:'数据库管理',
                        path:'/shujuku'
                    },
                    {
                        name:'云主机管理',
                        path:'/yunzhuji'
                    },
                    {
                        name:'服务器管理',
                        path:'/fuwuqi'
                    },
                    {
                        name:'其他主机管理',
                        path:'/qita'
                    },
                    {
                        name:'价格预览',
                        path:'/jiage'
                    },
                ]
            },{
                name:'用户资料',
                isShow:false,
                childer:[
                    {
                       name:'我的信息',
                       path:'/myInfo'
                    },
                    {
                       name:'修改资料',
                       path:'/xiugai'
                    },
                    {
                        name:'财务记录',
                        path:'/caiwu'
                    },
                    {
                        name:'发票申请',
                        path:'/fapiao'
                    },
                    {
                        name:'提交工单',
                        path:'/submit'
                    },
                    {
                        name:'在线充值',
                        path:'/zaixian'
                    },
                    {
                        name:'安全退出',
                        path:'/out'
                    },
                ]
            },{
                name:'购买产品',
                isShow:false,
                childer:[
                    {
                       name:'域名注册',
                       path:'/ymzc'
                    },
                    {
                       name:'开通虚拟主机',
                       path:'/kaitong'
                    },
                    {
                        name:'购买云服务器',
                        path:'/goumai'
                    },
                    {
                        name:'开通企业邮局',
                        path:'/ktqyyj'
                    },
                ]
            }
        ]
        }
    }
    handleShow(v,i) {
        const temp = this.state.leftNav
        temp.map((item,index) => {
            if(index === i) {
                item.isShow = !v.isShow
                this.setState({
                    leftNav:temp
                })
            }
        })
    }
   
    render() {
        return (
            <div>
            {
                this.state.leftNav.map((v,i) => 
                  <div key={i}>
                    <div className="menu_one" onClick={() => this.handleShow(v,i)}>{v.name}</div>
                    {v.isShow ? null : v.childer.map((item,index) => <div className="menu_two" key={index}>
                      <ul>
                          <li>
                              <Link to={`/email${item.path}`} className="link">{item.name}</Link>
                          </li>
                      </ul>
                    </div>)}
                  </div> 
                )}
            </div>
        )
    }
}
