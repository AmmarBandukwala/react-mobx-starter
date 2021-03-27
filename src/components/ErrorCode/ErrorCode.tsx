import React from 'react';

export interface IErrorCodeProps {
  httpStatusCode: number;
  title: string;
  description: string;
  redirectUrl?: string;
}

const ErrorCode: React.FC<IErrorCodeProps> = (props) => (
  <section className="section is-medium">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column has-text-centered">
          <h1 className="title">Http Status {props.httpStatusCode}</h1>
          <p className="subtitle">{props.description}</p>
          <a className="button">Home</a>
          <a className="button">Contact</a>
        </div>
        <div className="column has-text-centered">
          <img src="img/error.png" />
        </div>
      </div>
    </div>
  </section>
);

export default ErrorCode;
