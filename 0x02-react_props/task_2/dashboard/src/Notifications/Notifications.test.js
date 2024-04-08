import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists).toBe(true);
	});
	it('rendersNotificationItem', () => {
                const wrapper = shallow(<Notifications />);
                expect(wrapper.exists('NotificationItem')).toBe(true);
        });
	it('first NotificationItem renders the right html', () => {
                const wrapper = shallow(<Notifications />);
                expect(wrapper.html()).toContain('New course available');
        });
});
