import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Login from './containers/Account/Login';
import Signup from './containers/Account/Signup';
import Auth from './containers/Auth';
import Top from './containers/Top';
import Mypage from './containers/Mypage/Mypage';
import ReportForm from './containers/Report/Form';
import ReportDetails from './containers/Report/Details';
import ReportEdit from './containers/Report/Edit';
import Edit from './containers/Mypage/Edit';
import Report from './containers/Report/Report';
import './App.css';

// ログインステータス設定
let loginStatus;
if(sessionStorage.getItem("loginUser")) {
  loginStatus = true;
} else {
  loginStatus = false;
}

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* 以下ログイン時のみ */}
      <Auth loginStatus={loginStatus}>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/account" component={Edit} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/report/form" component={ReportForm} />
          <Route exact path="/report/details" component={ReportDetails} />
          <Route exact path="/report/edit" component={ReportEdit} />
        </Switch>
      </Auth>
    </Switch>
  </Router>
)

export default App
