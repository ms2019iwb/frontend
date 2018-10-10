import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './containers/Account/Login';
import Signup from './containers/Account/Signup';
import Mypage from './containers/Mypage/Mypage';
import ReportForm from './containers/Report/Form';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/mypage" component={Mypage}/>
      <Route exact path="/report/form" component={ReportForm} />
    </React.Fragment>
  </Router>
)

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default App
