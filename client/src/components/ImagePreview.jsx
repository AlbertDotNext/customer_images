import React from 'react';

class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;
    return (
      <div>
        {

          <img className="imagePreview" style={{ width: 200, height: 180 }} src={this.props.image} />

        }
      </div>
    );
  }
}

export default ImagePreview;