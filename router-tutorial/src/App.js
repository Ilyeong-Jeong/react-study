import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;