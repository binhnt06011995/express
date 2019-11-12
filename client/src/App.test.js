import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouterDOM from './router/AppRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouterDOM />, div);
});
