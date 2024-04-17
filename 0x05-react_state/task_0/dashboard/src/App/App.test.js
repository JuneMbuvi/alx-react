import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications form '../Notifications/Notifications';
import Login from '../Login/Login';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});
	it('contains Notifications', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.contains(<Notifications />)).toBe(true);
        });
	it('contains Header', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find('Header')).to.have.lengthOf(1);
        });
	it('contains Login', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.contains(<Login />)).toBe(true);
        });
	it('contains Footer', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find('Footer')).to.have.lengthOf(1);
        });
	it("renders that CourseList is not displayed", () => {
	  const wrapper = shallow(<App />);
	  expect(wrapper.find("CourseList")).toHaveLength(0);
	});
	it("renders two checks when isLoggedIn is true" () => {
	  const wrapper = shallow(<App />);
	  expect(wrapper.find("Login")).toHaveLength(0);
	  expect(wrapper.find("CourseList").toHaveLength(1);
	});
	it('calls handleDisplayDrawer and updates state to true when clicking notifications', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state('displayDrawer')).toBe(true);
	});

       it('calls handleHideDrawer and updates state to false when clicking close button', () => {
	       const wrapper = shallow(<App />);
	       wrapper.setState({ displayDrawer: true }); // Set initial state to true for testing handleHideDrawer
	       wrapper.instance().handleHideDrawer();
	       expect(wrapper.state('displayDrawer')).toBe(false);
       });
	it('logOut', () => {
		const logOut = jest.fn(() => undefined);
		const wrapper = shallow(<App logOut={logOut} />);
		const alert = jest.spyOn(global, 'alert');
		expect(alert);
		expect(logOut);
		jest.restoreAllMocks();
	});
});
