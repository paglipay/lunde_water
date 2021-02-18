import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../Dialog';
import renderer from 'react-test-renderer';
import Portal from 'semantic-ui-react/dist/commonjs/addons/Portal/Portal';
import { Modal } from 'semantic-ui-react';


describe('Register dialog component', () => {
  it('should render without crashing', () => {
    render(<Dialog />);
  });

  it('should display a sign up button', () => {
    const { getByText } = render(<Dialog />);
    const button = getByText('Sign Up');

    expect(button).toBeTruthy();
  });
});

jest.mock('semantic-ui-react/dist/commonjs/addons/Portal/Portal', () => ({ children }) => children);

describe('<Modal />', () => {
  test('snapshot', () => {
    const tree = renderer.create(<Modal open>Inside my modal!</Modal>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
