import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Account/Login';
import Signup from './containers/Account/Signup';
import Top from './containers/Top';
import Mypage from './containers/Mypage/Mypage';
import ReportCheck from './containers/Report/Check';
import ReportForm from './containers/Report/Form';
import ReportDetails from './containers/Report/Details';
import ReportEdit from './containers/Report/Edit';
import Edit from './containers/Mypage/Edit';
import Report from './containers/Report/Report';
import FireFighting from './containers/FireFighting/FireFighting';
import ScrollToTop from './components/ScrollToTop';
// 初期化用スタイルシート
import './App.css';
// ログインチェックを行うルーティングコンポーネント
import PrivateRoute from './PrivateRoute';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/" component={Top} />
      <PrivateRoute exact path="/mypage" component={Mypage} />
      <PrivateRoute exact path="/account" component={Edit} />
      <PrivateRoute exact path="/report" component={Report} />
      <PrivateRoute exact path="/report/check" component={ReportCheck} />
      <PrivateRoute exact path="/report/:id/form" component={ReportForm} />
      <PrivateRoute exact path="/report/:id" component={ReportDetails} />
      <PrivateRoute exact path="/report/:id/edit" component={ReportEdit} />
      <PrivateRoute exact path="/fire_fighting/:id" component={FireFighting} />
    </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
