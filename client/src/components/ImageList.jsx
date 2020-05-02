import React from 'react';
import Popup from 'reactjs-popup';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.imageList.map((images, index) => {
          if (index < 1) {
            return images.imagesUrl.map((image) => (
              <span key={image.id}>
                <Popup
                  trigger={<button className='button'>
                    <img style={{ width: 200, height: 180 }} src={image} />
                  </button>}
                  modal
                  closeOnDocumentClick
                >
                  <span>Hello World!</span>
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