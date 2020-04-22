import React from 'react';

import $ from 'jquery';

import './../../css/hostbanner.css';
import Swiper from './../../../node_modules/swiper/js/swiper' 
import './../../../node_modules/swiper/css/swiper.min.css' 

export default class Hostbanner extends React.Component{
    constructor(props){
      super(props);
  }
  componentDidMount(){
    new Swiper('.swiper-container', {
        autoplay:true,
        loop: true,//无缝轮播
        speed:1000,
        pagination: {//小圆点分页
            el: '.swiper-pagination',
        },
        navigation: {//左右分页
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
  }
  render(){
    return(
    <div id="hostbanner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://www.c361.com/img/hostimg/host/host_banner1.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://www.c361.com/img/hostimg/host/host_2.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://www.c361.com/img/hostimg/host/host_banner3.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://www.c361.com/img/hostimg/host/host_banner4.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://www.c361.com/img/hostimg/host/host_banner4.jpg" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
    </div>

    </div>)
  }
}