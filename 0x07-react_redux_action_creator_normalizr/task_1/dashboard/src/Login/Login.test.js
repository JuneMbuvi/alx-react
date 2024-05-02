import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import Login from './Login';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('verifies that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find({ type:'submit' }).props().disabled).toBe(true);
  });

  it('after keying inputs, the submit button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({ id: 'email' }).simulate('change', { target: { name: 'email', value: 'jeanjames@gmail.com' } });
    wrapper.find({ id: 'password' }).simulate('change', { target: { name: 'password', value: 'mndgdersft' } });
    expect(wrapper.find({ type:'submit' }).props().disabled).toBe(false);
  });
});

