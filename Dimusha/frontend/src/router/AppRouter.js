import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import FilesList from '../components/FilesList';
import List from '../components/list';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={App} path="/" exact={true} />
          <Route component={FilesList} path="/list" />
          <Route component={List} path="/lt" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
