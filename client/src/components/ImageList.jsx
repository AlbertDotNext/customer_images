import React from 'react';
import ReviewContent from './reviewContent.jsx';
import ImagePreview from './ImagePreview.jsx';

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
    this.setState({popUp: true});
  }
  render() {
    return (
      <div className="imagelist">
        {this.state.popUp ? this.props.imageList.map((imagesObj, index) => {
          return imagesObj.imagesUrl.map((imageArr) => {
            return <ReviewContent
              image={imageArr}
              popUpClick={this.popUpClick}
            />;
          });
        }) : <ImagePreview imageList={this.props.imageList} popUpClick={this.popUpClick}/>}
      </div >
    );
  }
}

export default ImageList;