import React from 'react';
import Popup from 'reactjs-popup';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ReviewContent from './ReviewContent.jsx';
import styled from 'styled-components';

const Viewgallery = styled.div`
  width = 100%;
`;
const Galleryimage = styled.img`
  cursor: pointer;
`;

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Viewgallery >

        {this.props.showReviewContent ?
          <ReviewContent />
          : this.props.customerData.map(imagesObj => {
            return imagesObj.imagesUrl.map(imagesArr => {
              return <Galleryimage style={{ width: 100, height: 80 }} src={imagesArr.image} onClick={this.props.handleClickImage} onClick={this.props.resetForm}/>;
            });
          })}

      </Viewgallery>
    );
  }
}

export default ImageGallery;