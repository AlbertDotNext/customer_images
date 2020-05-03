import React from 'react';
import Popup from 'reactjs-popup';
import ImageGallery from './ImageGallery.jsx';
import ReviewContent from './reviewContent.jsx';

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
                  {close => (
                    <div className="modal">
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                      <div>
                        <span className="imageGallery"><ImageGallery imageList={this.props.imageList} /></span>
                        <div className="reviewContent">
                          <text style={{ fontweight: 'bold' }}><ReviewContent customerData={this.props.imageList} />{images.reviewTitle}</text>
                          <br/>
                          <text>By {images.customerName} on {images.createdDate}</text>
                        </div>
                      </div>
                      <span className="content">
                        <span>{<img style={{ width: 380, height: 300 }} src={imageObj.image} />}</span>

                      </span>
                    </div>
                  )}
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