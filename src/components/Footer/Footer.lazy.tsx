import React, { lazy, Suspense } from 'react';

const LazyFooter = lazy(() => import('./Footer'));

const Footer = (props: any & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooter {...props} />
  </Suspense>
);

export default Footer;
