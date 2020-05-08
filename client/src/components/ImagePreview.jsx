import React from 'react';

class ImagePreview extends React.Component {
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
                <img className="imagePreview" style={{ width: 200, height: 180 }} src={imageObj.image} onClick={this.props.popUpClick}/>
              </span>;
            }
          });
        })}
      </div>
    );
  }
}

export default ImagePreview;