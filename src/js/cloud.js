import React from 'react';  
import ReactDOM from 'react-dom' ;   

import Banner from './../components/cloud/banner';
import Routerstwo from './../components/cloud/routerl';
import Inmerit from './../components/domain/inmerit';

export default class Cloud extends React.Component{
    render(){
      return(
          <div>
        <Banner />
        <Routerstwo />
        <Inmerit />
        </div>
)
    }
  }