import React from 'react';  
import ReactDOM from 'react-dom' ; 

import Header from './components/public/header';
import Nav from './components/public/nav';
import Footertop from './components/public/footertop';
import Footer from './components/public/footer';


ReactDOM.render((

    <div>
        <Header/>
        <Nav />
        <Footertop/>
        <Footer />
    </div>
), document.getElementById('shouye'));