import React from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';
import ImageGallery from './ImageGallery.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,
      showReviewContent: false,
      imgUrls: []

    };
    this.handleClick = this.handleClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    // this.setData = this.setData.bind(this);
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
  handleClickImage(event) {
    event.preventDefault();
    this.setState({ showReviewContent: true });
  }
  // componentDidMount() {
  //   this.setData();
  // }
  // setData() {
  //   let imgUrls = [];
  //   let mapData = this.props.customerData.map(imagesObj => {
  //     imagesObj.imagesUrl.map(imagesArr => {
  //       imgUrls.push({ id: imagesObj._id, urls: imagesArr.image });
  //     });
  //   });

  //   this.setState({imgUrls});
  // }
  render() {

    return (

      <Popup
        trigger={<button className='button' >
          <img className="imageView" style={{ width: 200, height: 180 }} src={this.props.image} />
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
                images={this.props.images}
                resetForm={this.resetForm}
                handleClickImage={this.handleClickImage}
                showReviewContent={this.state.showReviewContent}
              /> :
              <div className="parentDiv">
                <span className="imageGallery" onClick={this.handleClick}><IoMdApps size={30} />View Image Gallery</span>

                <div className="reviewContent">
                  <div className="RightBlock">
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
                    <text className="cusomerInfo">By {this.props.images.customerName} on {moment(this.props.images.createdDate).format('LL')}</text>
                    <br />
                    <text className="content">{this.props.images.reviewContent}</text>
                  </div>
                  <div className="imageContent">
                    <ImageCarousel imgUrls={this.state.imgUrls} />
                  </div>
                  <div className="thumbnail">Images in this review</div>
                  <img className="imageThumbnail" style={{ width: 80, height: 80 }} src={this.props.image} />
                </div>

              </div>
            }

          </div>
        )}
      </Popup>
    );
  }
}

export default ReviewContent;