import React from 'react';
import Popup from 'reactjs-popup';



class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="viewGallery">
        {this.props.customerData.map(imagesObj => {
          return imagesObj.imagesUrl.map(imagesArr => {
            return <img style={{ width: 100, height: 80 }} src={imagesArr.image} />;
          });
        })}
      </div>
    );
  }
}

export default ImageGallery;