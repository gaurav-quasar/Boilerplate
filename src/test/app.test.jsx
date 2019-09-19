import { shallow } from 'enzyme';

import React from 'react';

import App from '../app';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App - Gaurav');
    expect(wrapper).toMatchSnapshot();
  });
});
