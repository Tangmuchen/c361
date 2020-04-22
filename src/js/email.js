import React, { Component } from 'react'
import { BrowserRouter as Router,Route, Link,Switch,Redirect} from "react-router-dom";
import "../css/email.css"
import LeftNav from './../components/view/LeftNav'
import {Yuming,Xuni,Shujuku,Yunzhuji,Fuwuqi,Qita,Jiage} from './../components/view/RightContent'
import {MyInfo,Xiugai,FaPiao,Submit} from './../components/view/RightMy'

export default class Email extends Component {
    constructor(props){
        super(props);
        this.state = {
            router:[
                {
                    path:'/yuming',
                    component:Yuming
                },
                {
                    path:'/xuni',
                    component:Xuni
                },
                {
                    path:'/shujuku',
                    component:Shujuku
                },
                {
                    path:'/yunzhuji',
                    component:Yunzhuji
                },
                {
                    path:'/fuwuqi',
                    component:Fuwuqi
                },
                {
                    path:'/qita',
                    component:Qita
                },
                {
                    path:'/jiage',
                    component:Jiage
                },
                {
                    path:'/myInfo',
                    component:MyInfo
                },
                {
                    path:'/xiugai',
                    component:Xiugai
                },
                {
                    path:'/fapiao',
                    component:FaPiao
                },
                {
                    path:'/submit',
                    component:Submit
                },
            ]
        }
    }
    render() {
        return (
         <Router>
            <div className="email">

                <div className="email_left">
                      <LeftNav/>
                </div>
                <div className="email_right">
                    <Switch> 
                        {
                         this.state.router.map((item,index) => <Route path={`/email${item.path}`} component={item.component} key={index}></Route>)
                        }
                        <Redirect from="/email" to="/email/jiage"/>
                    </Switch>
                </div>

            </div>
        </Router>
        )
    }
}
