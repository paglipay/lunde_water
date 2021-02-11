import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, cleanup, fireEvent } from '@testing-library/react';

describe(`The <App/> component`, () => {
    it(`should render without crashing`, () => {
        const div = document.createElement("div");
        render(<App/>, div);
    });
});