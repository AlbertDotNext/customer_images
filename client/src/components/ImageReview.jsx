import React from 'react';

class ImageReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.customerData.map(imagesObj => {
          if (this.props.id === imagesObj._id) {
            return imagesObj.imagesUrl.map(imageArr => {
              return <img className="imageThumbnail" style={{ width: 80, height: 80 }} src={imageArr.image} onClick={this.props.handleClickImage}/>;
            });
          }
        })}
      </div>
    );
  }
}

export default ImageReview;