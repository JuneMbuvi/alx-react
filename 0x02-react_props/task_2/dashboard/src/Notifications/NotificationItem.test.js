import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
	 it('renders without crashing', () => {
                const wrapper = shallow(<NotificationItem />);
                expect(wrapper.exists()).toBe(true);
        });
	it('renders type and value props', () => {
		const wrapper = shallow(<NotificationItem type='default' value='test' />);
		const li = wrapper.find('li');
		expect(li).to.have.lengthOf(1);
		expect(li.text()).toEqual('test');
		expect(li.prop('data-notification-type')).toEqual('default');
	});
	it('renders html props', () => {
		const text = 'List of notifications';
		const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
		const li = wrapper.find('li');
		expect(li.html()).toEqual('<li><u>text</u></li>');
	});
});
