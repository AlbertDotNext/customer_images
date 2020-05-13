import React from 'react';
import styled from 'styled-components';

const Imagepreview = styled.img`
  cursor: pointer;
`;
class ImagePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;
    return (
      <div>
        {

          <Imagepreview style={{ width: 200, height: 180 }} src={this.props.image} onClick={this.props.resetId}/>

        }
      </div>
    );
  }
}

export default ImagePreview;