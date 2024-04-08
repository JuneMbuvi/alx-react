import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications form '../Notifications/Notifications';
import Login from '../Login/Login';

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})
	it('contains Notifications', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.contains(<Notifications />)).toBe(true);
        })
	it('contains Header', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find('Header')).to.have.lengthOf(1);
        })
	it('contains Login', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.contains(<Login />)).toBe(true);
        })
	it('contains Footer', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find('Footer')).to.have.lengthOf(1);
        })
});
