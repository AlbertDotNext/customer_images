import React from 'react';
import { shallow } from 'enzyme';
import ImageList from '../client/src/components/ImageList.jsx';
import ReviewContent from '../client/src/components/ReviewContent.jsx';


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
  test('Should be rendering one <ReviewContent /> component', () => {
    const wrapper = shallow(<ImageList imageList={sampleData} />);
    expect(wrapper.find(ReviewContent)).toHaveLength(3);
  });
});