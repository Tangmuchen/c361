import React from 'react';  
import ReactDOM from 'react-dom' ;   

import Hoatbanner from './../components/host/hostbanner';
import Routersl from './../components/host/routerh';
import Inmerit from './../components/domain/inmerit';

export default class Hoat extends React.Component{
    render(){
      return(
          <div>
        <Hoatbanner />
        <Routersl />
        <Inmerit />
        </div>
)
    }
  }