import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = styled.div`
  height: 100%;
  margin: 0;
  width: 100%;
`;
const Left = styled.p`
  left: 0px;
`;
const Right = styled.p`
 right: 500px;
 position: absolute;
 `;
class IamgeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      currentId: this.props.id,
      imageChange: false,
      imageUrl: this.props.image
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.checkIndex = this.checkIndex.bind(this);
  }

  componentDidMount() {
    this.checkIndex();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.image !== this.props.image) {
      this.setState({ imageUrl: this.props.image });
      this.checkIndex();
    }

  }

  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
      currentId: this.props.imgUrls[index].id
    });
    this.props.getCarouselId(this.props.imgUrls[index].id);
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
    this.props.getCarouselId(this.props.imgUrls[index].id);
  }

  handleClickImage(e) {
    e.preventDefault();
    this.setState({ imageChange: true });
  }

  checkIndex() {
    let index = this.props.imgUrls.findIndex(x => {
      return (x.urls === this.props.image && x.id === this.props.id);
    });
    this.setState({ currentImageIndex: index });
    this.props.getCarouselId(this.state.currentId);
  }

  render() {
    return (
      <Carousel>

        <Left>
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;" />
        </Left>

        <ImageSlide url={this.props.imgUrls[this.state.currentImageIndex].urls} />

        <Right>
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;" />
        </Right>

      </Carousel>
    );
  }
}

export default IamgeCarousel;