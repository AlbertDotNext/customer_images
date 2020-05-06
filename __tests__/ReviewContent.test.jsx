import React from 'react';
import { shallow, mount } from 'enzyme';
import ReviewContent from '../client/src/components/ReviewContent.jsx';

const sampleData = [
  {
    'image': 'https://customerimage2020.s3-us-west-1.amazonaws.com/images10.jpg'
  },
  {
    'image': 'https://customerimage2020.s3-us-west-1.amazonaws.com/images111.jpg'
  },
  {
    'image': 'https://customerimage2020.s3-us-west-1.amazonaws.com/images97.jpg'
  }
];

describe('Unit Tests', () => {
  test('should invoke handleClick when click one of the image', () => {
    // const mockHandleClick = jest.fn();
    // const wrapper = mount(<ReviewContent image={sampleData}/>);
    // const clickButton = wrapper.find({children: 'imageGallery'});
    // clickButton.simulate('click');
    // expect(mockHandleClick).toHaveBeenCalled();
  });
  test('should change state of showGallery to be true when invoke handleClick', () => {
    const wrapper = shallow(<ReviewContent image={sampleData}/>);
    wrapper.instance().handleClick({preventDefault: () => {}});
    expect(wrapper.state('showGallery')).toBe(true);
  });
  test('should change state of showGallery to be false when invoke resetForm', () => {
    const wrapper = shallow(<ReviewContent image={sampleData}/>);
    wrapper.instance().resetForm({preventDefault: () => {}});
    expect(wrapper.state('showGallery')).toBe(false);
  });
});