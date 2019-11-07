import React from 'react'
import { shallow } from 'enzyme'
import Headline from './headline'

import { findByTestAttr } from './../../../utils/index'

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {

    describe('Have props', () => {

        let wrapper;

        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test description'
            }

            wrapper = setUp(props);

        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });

    });

});