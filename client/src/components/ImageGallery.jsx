import React from 'react';
import Popup from 'reactjs-popup';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ReviewContent from './ReviewContent.jsx';
<<<<<<< HEAD


=======
>>>>>>> customerImage1

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showReviewContent: false
    };

  }


  render() {
    return (
      <div className="viewGallery" >
        {this.props.showReviewContent ?
          <ReviewContent />
          : this.props.customerData.map(imagesObj => {
            return imagesObj.imagesUrl.map(imagesArr => {
              return <img className="galleryImage" style={{ width: 100, height: 80 }} src={imagesArr.image} onClick={this.props.handleClickImage} onClick={this.props.resetForm}/>;
            });
          })}
      </div>
    );
  }
}

export default ImageGallery;