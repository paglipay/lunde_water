import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Dialogue from '../Dialogue';

describe('Register dialogue component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dialogue />, div);
      });
    
    

});

