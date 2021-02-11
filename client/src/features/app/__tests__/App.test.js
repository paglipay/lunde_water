import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';


describe(`The <App/> component`, () => {
it(`should render without crashing`, () => {
    const div = document.createElement("div");
    render(<App/>, div);
  });
});