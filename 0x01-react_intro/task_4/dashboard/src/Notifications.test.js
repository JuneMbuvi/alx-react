import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications test', () => {
	it('renders without crashing', () => {
		const component = shallow(<Notifications />);
		expect(component).toBeDefined();
	});
	it('renders ul', () => {
                const component = shallow(<Notifications />);
                expect(component.find('ul')).toBeDefined();
        });
	it('renders three list items', () => {
                const component = shallow(<Notifications />);
                expect(component.find('li')).toHaveLength(3);
        });
	it('verify that Notifications renders the correct text', () => {
                const component = shallow(<Notifications />);
                expect(component.find('p').prop('children')).toBe(
			'Here is the list of notifications'
		);
        });
});
