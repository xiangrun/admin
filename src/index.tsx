import React from 'react';
import ReactDOM from 'react-dom';

import router from './router/router'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css'
import {  ConfigProvider,} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');
ReactDOM.render(

  <ConfigProvider locale={zhCN}>
 <Router>
    {router()}
</Router>
</ConfigProvider>
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
