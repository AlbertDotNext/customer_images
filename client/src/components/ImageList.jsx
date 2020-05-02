import React from 'react';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.renderImage = this.renderImage.bind(this);
  }
  renderImage(imageList) {
    return (
      <div>
        <img src={this.props.imageList.imageUrl} />
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.imageList.map(image => this.renderImage(image.imageUrl))}
      </div>
    );
  }
}
// <div>
//   {props.imageList.map(image => (
//     <span>
//       <img src={image.imageUrl} />
//     </span>
//   ))}
// </div>


export default ImageList;