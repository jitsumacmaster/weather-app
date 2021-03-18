import React from 'react';
import { render } from 'react-snapshot';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore({});

  const root = document.getElementById('root');

  render(<Root store={store} />, root);
});