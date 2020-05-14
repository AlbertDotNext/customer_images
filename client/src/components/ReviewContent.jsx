import React from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';
import ImageGallery from './ImageGallery.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import ImagePreview from './ImagePreview.jsx';
import ImageReview from './ImageReview.jsx';
import styled from 'styled-components';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Button = styled.button`
  cursor: pointer;
`;
const GalleryIcon = styled.div`
  width: 30px;
  height: 30px;
  float: left;
  cursor: pointer;
`
const Imagegallery = styled.span`
  text-align: center;
  marigin: atuo;
  cursor: pointer;
  font-weight: bold;

  `;
const Reviewcontent = styled.div`
  height: 100%;
  padding-top: 10px;
  `;
const ImageInfo = styled.div`
  float: right;
  width: 310px;
  height: 100%;
  padding-left: 18px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: -4px;
`
const ImageBottom = styled.div`
  float: right;
  padding-right: 70px;
  margin-top: -210px;
  position: relative;
  font-size: 18px;
  color: grey;
`
 const ImageViewContainer = styled.div`
  height: 100%;
  position: relative;
  padding-top: 10px;
`
const ImageView = styled.div`
  position: relative;
  left: 0;
`

const Modal = styled.div`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
  `;

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false,
      imgUrls: this.setData(),
      imageReviewState: '',
      reviewId: this.props.id,
      imagesObj: this.props.images,
      customerName: this.props.customerName,
      reviewStars: this.props.reviewStars,
      reviewTitle: this.props.reviewTitle,
      reviewContent: this.props.reviewContent,
      createdDate: this.props.createdDate

    };

    this.handleClick = this.handleClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.getCarouselId = this.getCarouselId.bind(this);
    this.updateImagesObj = this.updateImagesObj.bind(this);
    this.resetId = this.resetId.bind(this);
  }

  resetForm() {
    this.setState({ showGallery: false });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      showGallery: true
    });
  }

  componentDidMount() {
    this.setState({ imageReviewState: this.props.image });
  }

  setData() {
    let imgUrls = [];
    let mapData = this.props.customerData.map(imagesObj => {
      imagesObj.imagesUrl.map(imagesArr => {
        imgUrls.push({ id: imagesObj._id, urls: imagesArr.image });
      });
    });
    return imgUrls;
  }

  getImageUrl(url) {
    this.setState({ imageReviewState: url });
  }

  getCarouselId(id) {
    this.setState({ reviewId: id });
    this.updateImagesObj(id);

  }

  updateImagesObj(id) {
    let reviewDecisionObj = this.props.customerData.filter(data => {
      if (id === data._id) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      customerName: reviewDecisionObj[0].customerName,
      reviewStars: reviewDecisionObj[0].reviewStars,
      reviewTitle: reviewDecisionObj[0].reviewTitle,
      reviewContent: reviewDecisionObj[0].reviewContent,
      createdDate: reviewDecisionObj[0].createdDate
    });
  }

  resetId() {
    this.setState({
      reviewId: this.props.id,
      imageReviewState: this.props.image
    });
  }

  render() {
    return (
      <Popup
        trigger={
          <Button >
            {
              <ImagePreview
                image={this.props.image}
                resetId={this.resetId}
              />
            }
          </Button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div>
            <Modal onClick={close} >
              &times;
            </Modal>
            {this.state.showGallery ?
              <ImageGallery
                customerData={this.props.customerData}
                getCarouselId={this.getCarouselId}
                resetForm={this.resetForm}
                getImageUrl={this.getImageUrl}
              /> :
              <Reviewcontent>
                <GalleryIcon onClick={this.handleClick}><IoMdApps size={25} /></GalleryIcon><Imagegallery onClick={this.handleClick}>View Image Gallery</Imagegallery>

                <ImageViewContainer>
                  <ImageInfo>
                    <text style={{ fontweight: 'bold' }}>
                      <span className="stars">
                        {this.state.reviewStars === 1 ?
                          <span>
                            <FaStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                            <FaRegStar size={20} style={{ color: 'orange' }} />
                          </span>
                          : this.state.reviewStars === 2 ?
                            <span>
                              <FaStar size={20} style={{ color: 'orange' }} />
                              <FaStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                              <FaRegStar size={20} style={{ color: 'orange' }} />
                            </span>
                            : this.state.reviewStars === 3 ?
                              <span>
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <FaRegStar size={20} style={{ color: 'orange' }} />
                                <FaRegStar size={20} style={{ color: 'orange' }} />
                              </span>
                              : this.state.reviewStars === 4 ?
                                <span>
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaStar size={20} style={{ color: 'orange' }} />
                                  <FaRegStar size={20} style={{ color: 'orange' }} />
                                </span>
                                : this.state.reviewStars === 5 ?
                                  <span>
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                    <FaStar size={20} style={{ color: 'orange' }} />
                                  </span> : null
                        }
                      </span>
                      <span style={{fontWeight: 'bold'}}>
                      {this.state.reviewTitle}
                      </span>
                    </text>
                    <br />
                    <span style={{color: 'grey'}}>By {this.state.customerName} on {moment(this.state.createdDate).format('LL')}</span>
                    <br />
                    <span className="content">{this.state.reviewContent}</span>
                  </ImageInfo>
                  <ImageView>
                    <ImageCarousel
                      image={this.state.imageReviewState}
                      id={this.state.reviewId}
                      imgUrls={this.state.imgUrls}
                      getCarouselId={this.getCarouselId}
                    />
                  <ImageBottom>
                  <div className="thumbnail">Images in this review</div>
                  <ImageReview
                    id={this.state.reviewId}
                    customerData={this.props.customerData} getImageUrl={this.getImageUrl}
                  />
                  </ImageBottom>
                  </ImageView>
                </ImageViewContainer>

              </Reviewcontent>
            }

          </div>
        )}
      </Popup>
    );
  }
}

export default ReviewContent;