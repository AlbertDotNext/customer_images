import React from 'react';
import styled from 'styled-components';

const Imageslide = styled.div`
  height: 100%;
  width: 100%;
  transition: background-image .3s ease-in-out;
  `;
const ImageSlide = ({ url }) => {
  const styles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <Imageslide style={styles}>
      <img style={{ width: 380, height: 300 }} src={url} />
    </Imageslide>
  );
};

export default ImageSlide;