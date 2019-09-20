import React from 'react';
import VideoDetails from './VideoDetails';
import { mount } from 'enzyme';

test('It should not render a modal', () => {
  const wrapper = mount(
      <VideoDetails isOpen={false} />
  );
  expect(wrapper.find('VideoDetails').exists()).to.equal(false);
});


test('It should render a modal for details', () => {
    const wrapper = mount(
        <VideoDetails isOpen={true} />
    );
    expect(wrapper.find('VideoDetails').exists()).to.equal(false);
  });

