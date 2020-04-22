import React from 'react';  
import ReactDOM from 'react-dom' ;   

import Inbanner from './../components/domain/inbanner';
import Insearch from './../components/domain/insearch';
import Zhutui from './../components/domain/zhutui';
import Inmerit from './../components/domain/inmerit';
import Incase from './../components/domain/incase';
import IndexNews from './../components/domain/index-news';
import './../css/shouye.css';

export default class Shouye extends React.Component{
    render(){
      return(
          <div className="shouye">
        <Inbanner />
        <Insearch />
        <Zhutui/>
        <Inmerit />
        <Incase />
        <IndexNews />
        </div>
)
    }
  }