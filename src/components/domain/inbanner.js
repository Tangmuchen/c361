import React from 'react';

import $ from 'jquery';

import './../../css/inbanner.css';

export default class Inbanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auto: true,
            timer: -1,
            ts:[],
            sts:[],
        }
    }

    // getPic(){
    //     fetch("http://www.qhdlink-student.top/student/banner.php",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/x-www-form-urlencoded"
    //         },
    //         body:"username=lyj&userpwd=12345678&userclass=48&type=2"
    //     }).then(value=>value.json()).then(json=>{for(let v in json){
    //         this.state.ts.push(json[v]);
    //     }
    //     this.setState(({ts:this.state.ts,m:true}),function(){

    //     });
    // })
    // }


    //滚动图自动滚动方法
    divHide(){
        $(".imgs").animate({left:"-=100%"},1000,
            function(){
                $(this).append($(this).children(".img:first"));
                $(this).css("left","0px");
            }
        )
    }
    //左按钮点击左滑方法
    leftclick1(){
        $(".imgs").animate({"left":"-=100%"},500,function(){
            $(".imgs").append($(".imgs").children(".img:first"));
        });
        $(".imgs").animate({left:0},0);
    }
    //右按钮点击右滑方法
    rightclick1(){
        $(".imgs").animate({"left":"-=100%"},0,function(){
            $(".imgs").prepend($(".imgs").children(".img:last")); 
        });
        $(".imgs").animate({left:0},500);
    }
    //让图片滚动，调用divhide方法
    componentDidMount(){
        this.state.timer = setInterval(
            () => {
                this.divHide();
            },
            3000
        )
    }
    //鼠标悬停
    enterHandle(){
        this.state.auto = false;
        this.setState(this.state);
    }
    //鼠标离开
    leaveHandle(){
        this.state.auto = true;
        this.setState(this.state);
    }
//     componentDidMount(){
//         this.getPic();
//   }

    //判断鼠标的存在状态来决定定时器执行与否
    componentDidUpdate(){
        this.state.auto ? this.state.timer = setInterval(
            () => {
                this.divHide();
            },
            3000
        ) : clearInterval(this.state.timer);
    }
    render(){
        return(
          <div className="pic"  onMouseEnter={this.enterHandle.bind(this)} onMouseLeave={this.leaveHandle.bind(this)}>
            <span className="left"  onClick={this.leftclick1.bind(this)} >&lt;</span>
	        <span className="right" onClick={this.rightclick1.bind(this)}>&gt;</span>
            <div className="imgs"> 
            {/* {this.state.ts.map((banner,index)=> 
                <div className="img">              
                    <img src={"http://www.qhdlink-student.top/"+banner.path_banner} key={index}/> 
                </div>                  
            )}  */}
                    <div className="img">
                        <img src="https://www.c361.com/img/hostimg/index/banner2.jpg"/>
                    </div>
                    <div className="img">
                        <img src="https://www.c361.com/img/hostimg/index/banner3.jpg"/>
                    </div>
                    <div className="img">
                        <img src="https://www.c361.com/img/freehost.jpg"/>
                    </div>
                    <div className="img">
                        <img src="https://www.c361.com/img/hostimg/index/banner4.jpg"/>
                    </div>      
            </div>
          </div>
        )
    }
}