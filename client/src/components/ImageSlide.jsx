import React from 'react';

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div className="image-slide" style={styles}>
      <img style={{ width: 380, height: 300 }} src={url} />
    </div>
  );
};

export default ImageSlide;