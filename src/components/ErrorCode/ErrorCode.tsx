import React from 'react';

export interface IErrorCodeProps {
  httpStatusCode: number;
  title: string;
  description: string;
  redirectUrl?: string;
}

const ErrorCode: React.FC<IErrorCodeProps> = (props) => (
  <div>
    ErrorCode Component
  </div>
);

export default ErrorCode;
