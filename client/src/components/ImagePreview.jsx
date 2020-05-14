import React from 'react';
import styled from 'styled-components';

const Imagepreview = styled.img`
  cursor: pointer;
`;

const ImagePreview = (props) => {
  return (
    <div>
      {
        <Imagepreview
          style={{ width: 200, height: 180 }}
          src={props.image}
          onClick={props.resetId}
        />
      }
    </div>
  );
}

export default ImagePreview;