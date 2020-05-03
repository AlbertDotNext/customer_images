import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {console.log(this.props.customerData)}
        <span className="stars">
          <FaStar size={20} style={{ color: 'orange' }} />
          <FaStar size={20} style={{ color: 'orange' }} />
          <FaStar size={20} style={{ color: 'orange' }} />
          <FaStar size={20} style={{ color: 'orange' }} />
          <FaStar size={20} style={{ color: 'orange' }} />
          {this.props.customerData.map(data => {
            //if ()
            data.reviewStars;
          })}
        </span>
      </div>
    );
  }
}

export default ReviewContent;