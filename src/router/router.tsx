import React from 'react'
import {Switch,Route } from 'react-router-dom'

import Userlayout from './../layouts/UserLayout'
import BaseLayout from './../layouts/BaseLayout'
const router = ()=>{
    return(
        <Switch>
            <Route path='/user' component={Userlayout}/>
            <Route path='/' component={BaseLayout}/>
        </Switch>
    )
}
export default router;