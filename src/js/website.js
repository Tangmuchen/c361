import React from 'react';


import WebsiteLeft from './../components/website/websiteLeft';
import WebsiteBanner from './../components/website/websiteBanner';
export default class Website extends React.Component{
    constructor(props){
      super(props);
  }
  render(){
    return(
    <div id="website">
       <WebsiteBanner />
       <WebsiteLeft />   
    </div>)
  }
}