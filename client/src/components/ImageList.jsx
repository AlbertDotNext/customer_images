import React from 'react';
import ReviewContent from './reviewContent.jsx';
import Popup from 'reactjs-popup';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: false
    };
    this.popUpClick = this.popUpClick.bind(this);
  }
  popUpClick(event) {
    event.preventDefault();
    this.setState({ popUp: true });
  }
  render() {
    return (
      <div className="imagelist">
        {this.props.imageList.map((imagesObj, index) => {
          return imagesObj.imagesUrl.map((imageArr) => {
            return <ReviewContent
              image={imageArr.image}
              images={imagesObj}
              customerName={imagesObj.customerName}
              reviewStars={imagesObj.reviewStars}
              reviewTitle={imagesObj.reviewTitle}
              reviewContent={imagesObj.reviewContent}
              createdDate={imagesObj.createdDate}
              customerData={this.props.imageList}
            />;
          });
        })}
      </div >
    );
  }
}

export default ImageList;