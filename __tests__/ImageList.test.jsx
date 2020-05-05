import React from 'react';
import { shallow } from 'enzyme';
import ImageList from '../client/src/components/ImageList.jsx';
import ReviewContent from '../client/src/components/ReviewContent.jsx';

describe('Unit Tests', () => {
  test('Should be rendering one <ReviewContent /> component', () => {
    const wrapper = shallow(<ImageList />);
    expect(wrapper.find(<ReviewContent/>).toHaveLength(1));
  });
});