import React from 'react';
import Popup from 'reactjs-popup';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';



class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewContent: false
    };
    this.handleClickImage = this.handleClickImage.bind(this);
  }
  handleClickImage(event) {
    event.preventDefault();
    this.setState({ showReviewContent: true });
  }

  render() {
    return (
      <div className="viewGallery" >
        {this.state.showReviewContent ?
          <div>
            <span className="imageGallery" onClick={this.handleClick}><IoMdApps size={30} />View Image Gallery</span>
            <span className="stars">
              {this.props.images.reviewStars === 1 ?
                <span>
                  <FaStar size={20} style={{ color: 'orange' }} />
                  <FaRegStar size={20} style={{ color: 'orange' }} />
                  <FaRegStar size={20} style={{ color: 'orange' }} />
                  <FaRegStar size={20} style={{ color: 'orange' }} />
                  <FaRegStar size={20} style={{ color: 'orange' }} />
                </span>
                : this.props.images.reviewStars === 2 ?
                  <span>
                    <FaStar size={20} style={{ color: 'orange' }} />
                    <FaStar size={20} style={{ color: 'orange' }} />
                    <FaRegStar size={20} style={{ color: 'orange' }} />
                    <FaRegStar size={20} style={{ color: 'orange' }} />
                    <FaRegStar size={20} style={{ color: 'orange' }} />
                  </span>
                  : this.props.images.reviewStars === 3 ?
                    <span>
                      <FaStar size={20} style={{ color: 'orange' }} />
                      <FaStar size={20} style={{ color: 'orange' }} />
                      <FaStar size={20} style={{ color: 'orange' }} />
                      <FaRegStar size={20} style={{ color: 'orange' }} />
                      <FaRegStar size={20} style={{ color: 'orange' }} />
                    </span>
                    : this.props.images.reviewStars === 4 ?
                      <span>
                        <FaStar size={20} style={{ color: 'orange' }} />
                        <FaStar size={20} style={{ color: 'orange' }} />
                        <FaStar size={20} style={{ color: 'orange' }} />
                        <FaStar size={20} style={{ color: 'orange' }} />
                        <FaRegStar size={20} style={{ color: 'orange' }} />
                      </span>
                      : this.props.images.reviewStars === 5 ?
                        <span>
                          <FaStar size={20} style={{ color: 'orange' }} />
                          <FaStar size={20} style={{ color: 'orange' }} />
                          <FaStar size={20} style={{ color: 'orange' }} />
                          <FaStar size={20} style={{ color: 'orange' }} />
                          <FaStar size={20} style={{ color: 'orange' }} />
                        </span> : null
              }
            </span>
          </div>
          : this.props.customerData.map(imagesObj => {
            return imagesObj.imagesUrl.map(imagesArr => {
              return <img className="galleryImage" style={{ width: 100, height: 80 }} src={imagesArr.image} onClick={this.handleClickImage}/>;
            });
          })}
      </div>
    );
  }
}

export default ImageGallery;