import React from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';
import ImageGallery from './ImageGallery.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import ImagePreview from './ImagePreview.jsx';
import ImageReview from './ImageReview.jsx';
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
  componentDidMount() {
    this.setData();
  }
  setData() {
    let imgUrls = [];
    let mapData = this.props.customerData.map(imagesObj => {
      imagesObj.imagesUrl.map(imagesArr => {
        imgUrls.push({ id: imagesObj._id, urls: imagesArr.image });
      });
    });

    this.setState({imgUrls});
  }
  render() {

    return (

      <Popup
        trigger={<button className='button' >
          <ImagePreview image={this.props.image}/>
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
                        {this.props.reviewStars === 1 ?
                          <span>
                            <FaStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                          </span>
                          : this.props.reviewStars === 2 ?
                            <span>
                              <FaStar size={20} style={{ color: 'orange' }} />
                              <FaStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                            </span>
                            : this.props.reviewStars === 3 ?
                              <span>
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaRegStar size={20} style={{ color: 'orange' }} />
                                <FaRegStar size={20} style={{ color: 'orange' }} />
                              </span>
                              : this.props.reviewStars === 4 ?
                                <span>
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaRegStar size={20} style={{ color: 'orange' }} />
                                </span>
                                : this.props.reviewStars === 5 ?
                                  <span>
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                  </span> : null
                        }
                      </span>
                      {this.props.reviewTitle}
                    </text>
                    <br />
                    <text className="cusomerInfo">By {this.props.customerName} on {moment(this.props.createdDate).format('LL')}</text>
                    <br />
                    <text className="content">{this.props.reviewContent}</text>
                  </div>
                  <div className="imageContent">
                    <ImageCarousel image={this.props.image} id={this.props.images._id} imgUrls={this.state.imgUrls} />
                  </div>
                  <div className="thumbnail">Images in this review</div>
                  <ImageReview id={this.props.images._id} customerData={this.props.customerData}/>
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