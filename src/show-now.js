import * as React from 'react';
import * as ReactDOM from 'react-dom';

const target = document.querySelector('#root');

export function showNow() {
  const now = new Date().toLocaleTimeString();

  const el = React.createElement(
    'small',
    {},
    'Now is ',
    React.createElement('span', { className: 'font-bold' }, now)
  );

  ReactDOM.render(el, target);
}