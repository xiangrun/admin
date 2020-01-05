import React from 'react'
import {Layout} from 'antd'
import UserRouter from './../router/userRouter'

const {Header, Footer, Content,} = Layout;

const UserLayout =()=>{
    return(
       <>
       <div>我是登陆啊
      <UserRouter></UserRouter>
       </div>
   
        </>
    )
}
export default UserLayout;