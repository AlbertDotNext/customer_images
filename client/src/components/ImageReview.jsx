import React from 'react';
import styled from 'styled-components';

const Imagethumbnail = styled.img`
  cursor:pointer;
`;
class ImageReview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {

    let imgReviewUrl = event.target.getAttribute('src');
    this.props.getImageUrl(imgReviewUrl);
  }
  render() {
    return (
      <div>
        {this.props.customerData.map(imagesObj => {
          if (this.props.id === imagesObj._id) {
            return imagesObj.imagesUrl.map(imageArr => {
              return <Imagethumbnail style={{ width: 80, height: 80 }} src={imageArr.image} onClick={this.handleClick} />;
            });
          }
        })}
      </div>
    );
  }
}

export default ImageReview;