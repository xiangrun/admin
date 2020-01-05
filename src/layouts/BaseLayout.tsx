import React from 'react'
import {Layout} from 'antd'
import BaseRouter from './../router/baseRouter'

const {Header, Footer, Content,} = Layout;

const BaseLayout =()=>{
    return(
        <>
        <Header>头</Header>
       {BaseRouter()}
        </>
   
    )
}
export default BaseLayout;
