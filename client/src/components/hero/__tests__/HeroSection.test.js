import React from 'react';
import ReactDOM from 'react-dom';
import HeroSection from '../HeroSection';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeroSection />, div);
});
