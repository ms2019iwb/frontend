import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Account/Login';
import Signup from './containers/Account/Signup';
import Top from './containers/Top';
import Mypage from './containers/Mypage/Mypage';
import ReportForm from './containers/Report/Form';
import ReportDetails from './containers/Report/Details';
import ReportEdit from './containers/Report/Edit';
import Edit from './containers/Mypage/Edit';
import Report from './containers/Report/Report';
// 初期化用スタイルシート
import './App.css';
// ログインチェックを行うルーティングコンポーネント
import PrivateRoute from './PrivateRoute';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/" component={Top} />
      <PrivateRoute exact path="/mypage" component={Mypage} />
      <PrivateRoute exact path="/account" component={Edit} />
      <PrivateRoute exact path="/report" component={Report} />
      <PrivateRoute exact path="/report/form" component={ReportForm} />
      <PrivateRoute exact path="/report/details" component={ReportDetails} />
      <PrivateRoute exact path="/report/edit" component={ReportEdit} />
    </Switch>
  </BrowserRouter>
)

export default App
