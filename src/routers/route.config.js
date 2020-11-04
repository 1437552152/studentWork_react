/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-20 00:11:30
 * @FilePath     : \react-website(1)(1)\src\routers\route.config.js
 */

import { Route } from 'react-router-dom';
import React from 'react';
import Home from '@/pages/Home/Home';
import Doc from '@/pages/Doc/Doc';
import Tuto from '@/pages/Tuto/Tuto';
import Blog from '@/pages/Blog/Blog';
import Comm from '@/pages/Comm/Comm';
import Login from '@/pages/Login/Login';
import GoodDetail from '@/pages/GoodDetail/GoodDetail';
import FindSearch from '@/pages/FindSearch/FindSearch';
import Include from './include'
const Router = () => {
    return (
        <Include>
        <div>
          <Route exact path="/" component={Home}/>
          <Route  path={`/Home`} component={Home} />
          <Route  path={`/doc/:text`} component={Doc} />
          <Route path={`/tuto`} component={Tuto} />
          <Route  path={`/comm`} component={Comm} />
          <Route path={`/blog`} component={Blog} />
          <Route  path={`/login`} component={Login} />
          <Route  path={`/goodDetail/:id`} component={GoodDetail} />
        <Route path={`/FindSearch`} component={FindSearch} />
        </div>
         </Include>
    );
  };
  
  export default Router;