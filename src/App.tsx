import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Container from './components/Container/Container.lazy';
import ErrorCode from './components/ErrorCode/ErrorCode.lazy';
import Loading from './components/Loading/Loading.lazy';

const App: React.FC<any> = () => {
  return (
    <React.Suspense fallback={Loading}>
      <Switch>
        <Route path="/" render={props => <Container {...props} />} />
        <Route path="/403" render={props => <ErrorCode httpStatusCode={403} title="" description="" />} />
        <Route path="/404" render={props => <ErrorCode httpStatusCode={404} title="" description=""  />} />
        <Route path="/500" render={props => <ErrorCode httpStatusCode={500} title="" description=""  />} />
      </Switch>
    </React.Suspense>
  )
}

export default App;
