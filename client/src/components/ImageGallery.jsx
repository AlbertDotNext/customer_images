import React from 'react';
import Popup from 'reactjs-popup';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ReviewContent from './ReviewContent.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="viewGallery" >
        {console.log(this.props.images)}
        {this.props.showReviewContent ?
          <ReviewContent />
          : 'hello'}
      </div>
    );
  }
}

export default ImageGallery;