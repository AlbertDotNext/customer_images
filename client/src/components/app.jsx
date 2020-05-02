import React, { Component } from 'react';
import axios from 'axios';
import ImageList from './ImageList.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      imageList: []
    };
    this.setImage = this.setImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  componentDidMount() {
    this.getImage();
  }
  setImage({ data }) {
    console.log(data);
    this.setState({imageList: data});
  }
  getImage() {
    axios.get('/images')
      .then(this.setImage)
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <h2>Customer Images</h2>
        <ImageList imageList={this.state.imageList}/>
      </div>
    );
  }
}

export default App;