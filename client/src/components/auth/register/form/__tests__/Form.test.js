import React from 'react';
import { render } from '@testing-library/react';
import Form from '../Form';

describe('<Form/>', () => {
    it('should render in modal container', () => {
        render(<Form/>);
    });
});