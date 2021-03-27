import React, { lazy, Suspense } from 'react';

const LazyLogin = lazy(() => import('./Login'));

const Login = (props: any & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLogin {...props} />
  </Suspense>
);

export default Login;
