import React from 'react';
import ReviewContent from './reviewContent.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let count = 0;
    return (
      <div>
        {this.props.imageList.map((images, index) => {
          return images.imagesUrl.map((imageObj) => {
            count++;
            if (count <= 4) {
              return < span key={imageObj.id} >
                <ReviewContent customerData={this.props.imageList} image={imageObj.image} images={images}/>
              </span>
            }

          });
        }
        )}
      </div >
    );
  }
}

export default ImageList;