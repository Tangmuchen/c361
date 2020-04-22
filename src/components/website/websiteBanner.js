import React from 'react';
import './../../css/website//websiteBanner.css';

export default class WebsiteBanner extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
        <div>
            <div className='webbanner'></div>
            <div className='webbannerxia'>
                <div>
                    <a href="#">首页</a>&nbsp;>&nbsp;
                    <a href="#">网站建设</a>
                </div>
            </div>
        </div>
    )
  }
}