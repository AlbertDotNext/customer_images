import React from 'react';
import Popup from 'reactjs-popup';
import { IoMdApps } from 'react-icons/io';
import { FaStar, FaRegStar } from 'react-icons/fa';
//import ReviewContent from './ReviewContent.jsx';
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

    this.handleClickImage = this.handleClickImage.bind(this);
  }
  handleClickImage(event) {
    event.preventDefault();
    let id = event.target.getAttribute('value');
    let url = event.target.getAttribute('src');
    this.props.getCarouselId(Number(id));
    this.props.resetForm();
    this.props.getImageUrl(url);
  }
  render() {
    return (
      <Viewgallery >

        {this.props.customerData.map(imagesObj => {
          return imagesObj.imagesUrl.map(imagesArr => {
            return <Galleryimage style={{ width: 100, height: 80 }} value={imagesObj._id} src={imagesArr.image} onClick={this.handleClickImage} />;
          });
        })}

      </Viewgallery>
    );
  }
}

export default ImageGallery;