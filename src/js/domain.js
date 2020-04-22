import React from 'react';  
import ReactDOM from 'react-dom' ;   

import Dolitbanner from './../components/domain/dolitbanner';
import Ymzc from './../components/domain/ymzc';
import Inmerit from './../components/domain/inmerit';

export default class Domain extends React.Component{
    render(){
      return(
          <div>
        <Dolitbanner />
        <Ymzc />
        <Inmerit />
        </div>
)
    }
  }