import React from 'react';
import { IoMdApps } from 'react-icons/io';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    console.log('click');
    this.setState({ showGallery: true });
  }
  render() {
    if (this.state.showGallery) {
      let images = this.props.imageList;
    }
    return (
      <span onClick={this.handleClick}>
        <IoMdApps size={30} />View Image Gallery
      </span>
    );
  }
}

export default ImageGallery;