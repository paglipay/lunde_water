import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar'


// it('renders without crashing', () => {
//     let mountedNavBar = shallow(<NavBar />);
//     expect(mountedNavBar.text()).toEqual("");
// });

describe("When a location is passed to it", () => {
    let mountedNavBar;

    beforeEach(() => {
        mountedNavBar = shallow(<NavBar />);
    });

    it("displays the Home link", () => {
        const homeName = mountedNavBar.find(".home");
        expect(homeName.text()).toEqual("Home");
    });

    it("displays the Services link", () => {
        const serviceName = mountedNavBar.find(".services");
        expect(serviceName.text()).toEqual("Services");
    });

    it("displays the Products link", () => {
        const productName = mountedNavBar.find(".order");
        expect(productName.text()).toEqual("Order");
    });
});
