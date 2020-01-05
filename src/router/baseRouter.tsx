//定义公共路由
import React from 'react'
import {Switch,Route } from 'react-router-dom'

import Home from '../pages/Home/Home'

const BaseRouter =()=>{
    return(
        <Switch>
            <Route exact component={Home}/>
        </Switch>
    )
}
export default BaseRouter;