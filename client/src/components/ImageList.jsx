import React from 'react';
import Popup from 'reactjs-popup';
import ImageGallery from './ImageGallery.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.imageList.map((images, index) => {
          if (index < 1) {
            return images.imagesUrl.map((imageObj) => (
              <span key={imageObj.id}>
                <Popup
                  trigger={<button className='button'>
                    <img style={{ width: 200, height: 180 }} src={imageObj.image} />
                  </button>}
                  modal
                  closeOnDocumentClick
                >
                  <div className="imageGallery">
                    <span><ImageGallery imageList={this.props.imageList}/></span>
                  </div>
                  <div className="content">
                    <span>Hello World!</span>
                  </div>
                </Popup>
              </span>

            ));
          }
        })}
      </div>
    );
  }
}

export default ImageList;