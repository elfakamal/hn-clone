import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';

describe('Header ::', () => {
  it('should render a dummy Header using no props', () => {
    const props = { logo: '' };
    const wrapper = mount(<Header {...props} />);

    expect(wrapper.find('.hackernews-app-header').length).toBe(1);
    expect(wrapper.find('.hackernews-app-header').children()).toHaveLength(2);
    expect(wrapper.find('.hackernews-app-header').text()).toBe('Welcome to Eleven\'s hacker News');
  });
});
