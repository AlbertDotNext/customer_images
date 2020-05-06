import React from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';
import ImageGallery from './ImageGallery.jsx';
import SimpleImageSlider from 'react-simple-image-slider';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,

    };
    this.handleClick = this.handleClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  resetForm(event) {
    event.preventDefault();
    this.setState({ showGallery: false });
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({
      showGallery: true
    });
  }
  render() {

    return (

      <Popup
        trigger={<button className='button' >
          <img className="imageView" style={{ width: 200, height: 180 }} src={this.props.image} onClick={this.resetForm} />
        </button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="modal">
            <a className="close" onClick={close} >
              &times;
            </a>
            {this.state.showGallery ?
              <ImageGallery
                customerData={this.props.customerData}
                images={this.props.images}
                resetForm={this.resetForm}
              /> :
              <div>
                <span className="imageGallery" onClick={this.handleClick}><IoMdApps size={30} />View Image Gallery</span>

                <div className="reviewContent">
                  <text style={{ fontweight: 'bold' }}>
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
                    {this.props.images.reviewTitle}
                  </text>
                  <br />
                  <text>By {this.props.images.customerName} on {moment(this.props.images.createdDate).format('LL')}</text>
                  <br />
                  <text>{this.props.images.reviewContent}</text>
                </div>
                <span className="content">

                  {<img style={{ width: 380, height: 300 }} src={this.props.image} />}

                </span>

              </div>
            }

          </div>
        )}
      </Popup>
    );
  }
}

export default ReviewContent;