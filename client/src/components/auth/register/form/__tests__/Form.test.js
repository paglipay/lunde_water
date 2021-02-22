import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Form from '../Form';

describe('<Form/>', () => {
    it('should render a form with four fields without crashing', () => {
        render(<Form/>);
        const tree = renderer.create(<Form/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

});