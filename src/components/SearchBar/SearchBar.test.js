import React from 'react';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';

test('It should render a search bar with   ', () => {
  const wrapper = shallow(<SearchBar />);
  console.log('wrapper',wrapper.find('SearchBar'))
  expect(wrapper.find('Form').parent().is('Navbar')).to.equal(true);
});
