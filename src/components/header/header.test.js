import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/index';
import Header from './header';

const setUp = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');

        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoImg');

        expect(logo.length).toBe(1);
    });

});
