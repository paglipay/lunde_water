import React from 'react';
import ReactDOM from 'react-dom';
import Dialogue from '../Dialogue';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dialogue />, div);
});
