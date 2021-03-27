import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router';

import Footer from '../Footer/Footer.lazy';
import Header from '../Header/Header.lazy';
import Loading from '../Loading/Loading.lazy';
import Navigation from '../Navigation/Navigation.lazy';

import routes from '../../Routes';
import { Route } from 'react-router-dom';

const Container: React.FC = (props) => {
  return (
    <main className="container">
      <Header {...props} />
      <Navigation {...props} />
      <Suspense fallback={Loading}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.component {...props} />
                )} />
            )
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
      <Footer {...props} />
    </main>
  );
}

export default Container;
