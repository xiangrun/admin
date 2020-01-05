//定义公共路由
import React from 'react'
import {Switch,Route } from 'react-router-dom'

import Login from '../pages/UserLogin/Login'

const UserRouter =()=>{
    return(
        <Switch>
            <Route exact component={Login}/>
        </Switch>
    )
}
export default UserRouter;