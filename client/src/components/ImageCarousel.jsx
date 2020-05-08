import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';

class IamgeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      currentId: ''
      // imgUrls: []
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    // this.setData = this.setData.bind(this);

  }
  // componentDidMount() {
  //   this.setData();
  // }
  // setData() {
  //   let imgUrls = [];
  //   let mapData = this.props.customerData.map(imagesObj => {
  //     imagesObj.imagesUrl.map(imagesArr => {
  //       imgUrls.push({ id: imagesObj._id, urls: imagesArr.image });
  //     });
  //   });

  //   this.setState({imgUrls});
  // }
  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      currentId: this.props.imgUrls[index].id
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      currentId: this.props.imgUrls[index].id
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />
        {console.log(this.state.currentId)}
        <ImageSlide url={this.props.imgUrls[this.state.currentImageIndex].urls} />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;" />
      </div>
    );
  }
}

export default IamgeCarousel;