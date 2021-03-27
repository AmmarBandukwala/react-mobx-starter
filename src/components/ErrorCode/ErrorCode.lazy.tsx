import React, { lazy, Suspense } from 'react';

import { IErrorCodeProps } from './ErrorCode';

const LazyErrorCode = lazy(() => import('./ErrorCode'));

const ErrorCode = (props: IErrorCodeProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyErrorCode {...props} />
  </Suspense>
);

export default ErrorCode;
