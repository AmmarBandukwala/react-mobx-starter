import React from 'react';
import ReactDOM from 'react-dom';
import ErrorCode from './ErrorCode';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorCode />, div);
  ReactDOM.unmountComponentAtNode(div);
});