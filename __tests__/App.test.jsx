import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import App from '../client/src/components/App.jsx';

describe('Unit Tests', () => {
  jest.mock('axios', () => {
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

    return {
      get: jest.fn(() => Promise.resolve(sampleData)),
    };
  });
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toBeTruthy();
  });
  test('should invoke getImage on componentDidMount', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    const mock = jest.fn();
    wrapper.instance().getImage = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});