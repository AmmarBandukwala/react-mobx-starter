import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});