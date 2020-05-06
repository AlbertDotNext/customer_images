import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageGallery from '../client/src/components/ImageGallery.jsx';

const sampleData = [
  {
    'imagesUrl': [
      {
        'image': 'https://customerimage2020.s3-us-west-1.amazonaws.com/images10.jpg'
      },
      {
        'image': 'https://customerimage2020.s3-us-west-1.amazonaws.com/images111.jpg'
      },
      {
        'image': 'https://customerimage2020.s3-us-west-1.amazonaws.com/images97.jpg'
      }
    ],
    '_id': 1,
    'customerName': 'Royce Herman',
    'reviewStars': 1,
    'reviewTitle': 'Realigned cohesive solution',
    'reviewContent': "parsing the capacitor won't do anything, we need to connect the mobile RAM port!",
    'createdDate': '2019-06-22T14:38:52.297Z',
    '__v': 0
  }
];

describe('Unit Tests', () => {
  test('should invoke handleClickImage when click one of the image', () => {
    // const wrapper = mount(<ImageGallery customerData={sampleData}/>);
    // const mockHandleClick = wrapper.find({children: 'galleryImage'}).simulate('click');
    // expect(mockHandleClick).toHaveBeenCalled();
  });
  test('should change state of showReviewContent to be true when invoke handleClickImage', () => {
    const wrapper = shallow(<ImageGallery customerData={sampleData}/>);
    wrapper.instance().handleClickImage({preventDefault: () => {}});
    expect(wrapper.state('showReviewContent')).toBe(true);
  });
});